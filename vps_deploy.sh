#!/bin/bash

# ==========================================
# liro.it.com Deployment Script (V2)
# Purpose: Robust install of Node.js & Nginx
# Usage: Upload dist.tar.gz and this script to /root/
# Then run: bash vps_deploy.sh
# ==========================================

set -e

echo "🚀 Starting Deployment V2..."

# 1. Fix Broken Packages & Install NodeSource
echo "📦 Installing Dependencies (Node.js 20)..."
export DEBIAN_FRONTEND=noninteractive
apt-get update --allow-releaseinfo-change || true
# Try to fix held packages
apt-get install -f -y || true

# Install NodeSource (Recommended for resolving conflicts)
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs nginx unzip

# Install Global Packages
npm install -g pm2 serve

# 2. Setup Project Directory
echo "📂 Cleaning /var/www/liro_it_com..."
mkdir -p /var/www/liro_it_com
# Remove old content but keep directory structure
rm -rf /var/www/liro_it_com/*

# Check for dist archive (dist.tar.gz or dist.zip)
if [ -f "dist.tar.gz" ]; then
    echo "📦 Extracting dist.tar.gz..."
    tar -xzf dist.tar.gz -C /var/www/liro_it_com
    # If it extracted into 'dist' folder, move contents up
    if [ -d "/var/www/liro_it_com/dist" ]; then
        mv /var/www/liro_it_com/dist/* /var/www/liro_it_com/
        rmdir /var/www/liro_it_com/dist
    fi
elif [ -f "dist.zip" ]; then
    echo "📦 Extracting dist.zip..."
    unzip -o dist.zip -d /var/www/liro_it_com
    # If it extracted into 'dist' folder, move contents up
    if [ -d "/var/www/liro_it_com/dist" ]; then
        mv /var/www/liro_it_com/dist/* /var/www/liro_it_com/
        rmdir /var/www/liro_it_com/dist
    fi
elif [ -d "dist" ]; then
    echo "📂 Copying from directory..."
    cp -r dist/* /var/www/liro_it_com/
else
    echo "⚠️ Warning: 'dist.tar.gz' or 'dist' folder not found!"
    echo "Please upload 'dist.tar.gz' to /root/ before running this script."
    exit 1
fi

# 3. Setup PM2 (Run on Port 8860)
echo "⚡ configuring PM2..."
pm2 delete "liro-it-com" 2>/dev/null || true
cd /var/www/liro_it_com
# Ensure we serve current dir
pm2 start serve --name "liro-it-com" -- -s . -l 8860
pm2 save
pm2 startup

# 4. Setup Nginx (Force Replace)
echo "🌐 Configuring Nginx Reverse Proxy..."
# Remove default to prevent conflict
rm /etc/nginx/sites-enabled/default 2>/dev/null || true

cat > /etc/nginx/sites-available/liro.it.com <<EOF
server {
    listen 80;
    server_name liro.it.com;

    location / {
        proxy_pass http://127.0.0.1:8860;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF

# Enable Site
ln -sf /etc/nginx/sites-available/liro.it.com /etc/nginx/sites-enabled/

# Test & Reload Nginx
nginx -t
systemctl reload nginx

# 5. Fix Permissions
chown -R www-data:www-data /var/www/liro_it_com
chmod -R 755 /var/www/liro_it_com

echo "✅ Deployment V2 Complete!"
echo "You can now access: http://liro.it.com"
