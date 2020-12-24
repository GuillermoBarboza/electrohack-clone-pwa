var cacheName = 'electrohack0';
var filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log(cache, 'on install')
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  var cacheKeeplist = cacheName;

  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (cacheKeeplist.indexOf(key) === -1) {
        console.log("deleted", key);
        
          return caches.delete(key);
        }
      }));
    })
  );
});