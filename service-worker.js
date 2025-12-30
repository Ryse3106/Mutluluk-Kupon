const CACHE_NAME = "mutluluk-kuponu-v1";
const ASSETS = [
  "./",
  "./Mutluluk_Kuponu.html",
  "./emoji.png",
  "./manifest.webmanifest",
  "./service-worker.js",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-512-maskable.png",
  "./splash/iphone-1290x2796.png",
  "./splash/iphone-1179x2556.png",
  "./splash/iphone-1284x2778.png",
  "./splash/iphone-1125x2436.png",
  "./splash/ipad-2048x2732.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => (k===CACHE_NAME)?null:caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((resp) => {
        const copy = resp.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy)).catch(()=>{});
        return resp;
      }).catch(() => cached);
    })
  );
});