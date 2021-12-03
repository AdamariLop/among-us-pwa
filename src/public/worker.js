const cachePWA = "cache-site-v1";

const assets = [
    "/",
    "/index.html",
    "/manifest.json",
    "/pages/prueba.html",
    "/css/style.css",
    "/css/style6.css",
    "/css/style7.css",
    "/images/bg.jpg",
    "/images/bubble.png",
    "/images/feeds.jpg",
    "/images/link1.png",
    "/images/link2.png",
    "/images/link3.png",
    "/images/link4.png",
    "/images/link5.png",
    "/images/ltfeature.jpg",
    "/images/portada.jpg",
    "/images/rtboxbg.jpg",
    "/images/rtboxbg1.jpg",
    "/images/rtfeature.jpg",
    "/images/topbg.jpg",
    "/images/icons/android-launchericon-48-48.png",
    "/images/icons/android-launchericon-72-72.png",
    "/images/icons/android-launchericon-96-96.png",
    "/images/icons/android-launchericon-144-144.png",
    "/images/icons/android-launchericon-192-192.png",
    "/images/icons/android-launchericon-512-512.png",

    "/images/skins/skin1.png",
    "/images/skins/skin2.png",
    "/images/skins/skin3.png",
    "/images/skins/skin4.png",
    "/images/skins/skin5.png",
    "/images/skins/skin6.png",
    "/images/skins/skin7.png",
    "/images/skins/skin8.png",

    "/main.js",

    
    
    
    
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(cachePWA).then(cache => {
            cache.addAll(assets)
        })
    )
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    )
});

//Añadimos el evento push para la notificación

console.log('Service Worker Works');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log(data)
    console.log('Notification Received');
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: 'https://i.pinimg.com/originals/3d/04/56/3d0456f4c89dffbf0f11d3847ca01681.png'
    });
});

self.addEventListener('notificationclick', e => {
    //---access data from event using event.notification.data---
    console.log('On notification click: ', e.notification.data);
    var url = '/pages/prueba.html';

    //---close the notification---
    e.notification.close();

    //---open the app and navigate to breaking.html
    // after clicking the notification---
    e.waitUntil(
        clients.openWindow(url)
    );
});