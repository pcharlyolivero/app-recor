// Service Worker mínimo para habilitar instalación como PWA.
// Por ahora no cachea nada: pasa todas las requests a red directamente.
// (Cuando queramos modo offline, agregaremos estrategia de cache aquí.)

const VERSION = 'v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Solo interceptamos requests GET del mismo origen para no romper Supabase.
    // Todo pasa directo a red.
    event.respondWith(fetch(event.request));
});
