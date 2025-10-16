self.addEventListener('install',e=>{
  e.waitUntil(caches.open('tc-13-7').then(c=>c.addAll(['./','./index.html','./settings.html','./manifest.json','./icon.png'])));
});
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});