var cacheName = 'electrohackV1.0.2';
var filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  const preCache = async () => {
    const cache = await caches.open(cacheName);
    return cache.addAll(filesToCache);
  };
  e.waitUntil(preCache());
});


/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

/* self.addEventListener('activate', (event) => {
  let cacheKeeplist = cacheName;

  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (cacheKeeplist.indexOf(key) === -1) {
        
          return caches.delete(key);
        }
      }));
    })
  );
}); */