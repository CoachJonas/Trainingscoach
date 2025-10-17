self.addEventListener('install',e=>{
  e.waitUntil(caches.open('tc-13-10').then(c=>c.addAll(['./','./index.html','./manifest.json','./icon.png','./service-worker.js'])));
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});