const cacheName = 'electrohack';
const filesToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js'
];
console.log('from worker') 

self.addEventListener('install', e => {
  let preCache = async () => {
    let cache = await caches.open(cacheName);
    let caches = await caches.keys().map((key) => {
      if (cacheName.indexOf(key) === -1) {
        return caches.delete(key);
      }
    })
    
    return cache.addAll(filesToCache);
  };
  e.waitUntil(preCache());
});


self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

self.addEventListener('activate', (event) => {
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
});