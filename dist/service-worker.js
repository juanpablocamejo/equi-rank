var cacheName = "sgtoilet-cache";
var filesToCache = [
  "./",  
  "./index.html",
  "./icons/apple-icon-57x57.png",
  "./icons/apple-icon-60x60.png",
  "./icons/apple-icon-72x72.png",
  "./icons/apple-icon-76x76.png",
  "./icons/apple-icon-114x114.png",
  "./icons/apple-icon-120x120.png",
  "./icons/apple-icon-144x144.png",
  "./icons/apple-icon-152x152.png",
  "./icons/apple-icon-180x180.png",
  "./icons/icon-192x192.png",
  "./icons/favicon-32x32.png",
  "./icons/favicon-96x96.png",
  "./icons/favicon-16x16.png",
  "./icons/ms-icon-144x144.png"
];
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(thisCacheName) {
          if (thisCacheName !== cacheName) {
            return caches.delete(thisCacheName);
          }
        })
      );
    })
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    (async function() {
      const response = await caches.match(e.request);
      return response || fetch(e.request);
    })()
  );
});
