// Offline support for the orange clock.
// Install: precache everything the page needs, so it works offline after one visit.
// Page (navigation): network first with a short timeout, so updates arrive when online
// but a slow venue network never stalls the clock. Other files: cache first.
const CACHE = "orange-clock-v4";
const ASSETS = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "fonts/archivo.woff2",
  "fonts/chiron-goround-tc.woff2",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    for (const key of await caches.keys()) if (key !== CACHE) await caches.delete(key);
    await self.clients.claim();
  })());
});

const timeout = (ms) => new Promise((_, reject) => setTimeout(() => reject(new Error("timeout")), ms));

self.addEventListener("fetch", (e) => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) return;

  if (req.mode === "navigate") {
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      try {
        const res = await Promise.race([fetch(req), timeout(3000)]);
        if (res.ok) cache.put("index.html", res.clone());
        return res;
      } catch {
        return (await cache.match("index.html")) || (await cache.match("./")) || Response.error();
      }
    })());
    return;
  }

  e.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;
    const res = await fetch(req);
    if (res.ok) (await caches.open(CACHE)).put(req, res.clone());
    return res;
  })());
});
