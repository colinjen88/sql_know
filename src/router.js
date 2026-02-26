// =========================================
// SPA Router — Hash-based routing
// =========================================

const routes = {};
let currentRoute = null;
let onRouteChange = null;

export function registerRoute(path, handler) {
    routes[path] = handler;
}

export function setRouteChangeCallback(cb) {
    onRouteChange = cb;
}

export function navigate(path, params = {}) {
    const hash = params && Object.keys(params).length > 0
        ? `#${path}?${new URLSearchParams(params).toString()}`
        : `#${path}`;
    window.location.hash = hash;
}

export function getCurrentRoute() {
    return currentRoute;
}

function parseHash() {
    const hash = window.location.hash.slice(1) || 'dashboard';
    const [path, queryString] = hash.split('?');
    const params = {};
    if (queryString) {
        new URLSearchParams(queryString).forEach((value, key) => {
            params[key] = value;
        });
    }
    return { path, params };
}

async function handleRoute() {
    const { path, params } = parseHash();
    currentRoute = { path, params };

    const handler = routes[path];
    if (handler) {
        await handler(params);
    } else if (routes['dashboard']) {
        await routes['dashboard']({});
    }

    if (onRouteChange) {
        onRouteChange(path, params);
    }
}

let isRouterInitialized = false;

export function initRouter() {
    if (isRouterInitialized) {
        handleRoute();
        return;
    }
    window.addEventListener('hashchange', handleRoute);
    handleRoute();
    isRouterInitialized = true;
}
