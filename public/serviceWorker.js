const cacheName = 'electrohackV1.0.0';
const filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js'
];
console.log('from worker') 

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(filesToCache)));
});


self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  let cacheKeeplist = [cacheName];

  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (cacheKeeplist.indexOf(key) === -1) {
          console.log('cache deleteado')
          return caches.delete(key);
        }
      }));
    })
  );
});