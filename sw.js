self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("victor-rpg-v2").then((cache) =>
      cache.addAll(["./index.html", "./manifest.json", "./sw.js"])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
