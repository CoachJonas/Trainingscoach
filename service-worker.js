self.addEventListener('install', e => {
  e.waitUntil(caches.open('coach-v13-5').then(c=>c.addAll(['./','./index.html','./manifest.json','./icon.png'])));
});
self.addEventListener('fetch', e => {
  e.respondWith((async () => {
    const r = await caches.match(e.request); if (r) return r;
    try { const resp = await fetch(e.request); const c = await caches.open('coach-v13-5'); c.put(e.request, resp.clone()); return resp; }
    catch(e) { return new Response('', {status:504}); }
  })());
});