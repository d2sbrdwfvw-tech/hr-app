self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  if(e.request.mode!=='navigate')return;
  e.respondWith(fetch(e.request).catch(()=>new Response('<meta charset=utf-8><body style="font-family:system-ui;text-align:center;padding:40px" dir=rtl>ما فيه اتصال بالإنترنت. تأكد من الاتصال وحاول مرة ثانية.</body>',{headers:{'Content-Type':'text/html; charset=utf-8'}})));
});
