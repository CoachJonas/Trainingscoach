self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("coach-cache-v12").then((cache) =>
      cache.addAll([
        "./",
        "./index.html",
        "./manifest.json",
        "./icon.png"
      ])
    )
  );
});
self.addEventListener("activate", (e)=> self.clients.claim());
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((resp) => resp || fetch(e.request))
  );
});