// Service Worker mínimo.
// NO intercepta fetch — así no interfiere con requests a Supabase ni CDNs.
// Su única razón de existir es habilitar el prompt "Instalar app" en Chrome/Android.

const VERSION = 'v2';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// Sin fetch handler: el navegador maneja todas las requests directamente.
