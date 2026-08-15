// Minimal service worker -- exists purely so the browser considers this
// page installable (Chrome requires a registered service worker with a
// fetch handler before it will offer "Install"). Deliberately does NOT
// cache anything: every request still goes straight to the real network,
// same as without a service worker at all. This project has already been
// bitten by stale cached content on GitHub Pages more than once -- an
// offline-caching service worker would make that problem permanent
// instead of just annoying, so this one stays a pure pass-through.
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
