self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open('coach-v13-5').then(cache => cache.addAll([
    './', './index.html', './manifest.json', './icon.png'
  ])));
});
self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});