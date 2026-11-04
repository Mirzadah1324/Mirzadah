const C='mz-v1';
self.addEventListener('install',e=>{self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);if(!(u.origin===location.origin||u.host==='www.gstatic.com'))return;
e.respondWith(caches.open(C).then(async c=>{const m=await c.match(e.request,{ignoreSearch:true});const f=fetch(e.request).then(r=>{if(r&&(r.ok||r.type==='opaque'))c.put(e.request,r.clone());return r}).catch(()=>m);return m||f}))});
