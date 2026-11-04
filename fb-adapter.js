window.MZ_FB={apiKey:"AIzaSyDDJtUm8RLGXCBTwmvgTLI0LTiVu9Hjomw",authDomain:"mirzadah-14e40.firebaseapp.com",projectId:"mirzadah-14e40",storageBucket:"mirzadah-14e40.firebasestorage.app",messagingSenderId:"710356553517",appId:"1:710356553517:web:0775a732b7e649fd4f8da4"};
(function(){
var cfg=window.MZ_FB||null;
try{if(!cfg)cfg=JSON.parse(localStorage.getItem('mzFB')||'null')}catch(e){}
var LG="<div style='font:700 26px Georgia,serif;letter-spacing:5px;color:#d4af37'>MIRZADAH</div>";
var IS="width:100%;max-width:340px;padding:12px;border-radius:10px;border:1px solid #2b3042;background:#161a24;color:#f3efe6;font-size:16px;box-sizing:border-box";
var BS="padding:12px 28px;border:0;border-radius:10px;background:#d4af37;color:#1a1405;font-weight:700;font-size:16px";
function ov(h){var d=document.createElement('div');d.id='mzov';d.style.cssText='position:fixed;left:0;right:0;top:0;bottom:0;z-index:40;background:#0c0e14;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:20px;color:#f3efe6;font-family:Tahoma,Arial;text-align:center;direction:rtl;overflow:auto';d.innerHTML=h;document.body.appendChild(d);return d}
function parse(t){var o={};['apiKey','authDomain','projectId','storageBucket','messagingSenderId','appId'].forEach(function(k){var m=new RegExp(k+'\\s*:\\s*["\']([^"\']+)["\']').exec(t);if(m)o[k]=m[1]});return o.apiKey&&o.projectId?o:null}
if('serviceWorker' in navigator)navigator.serviceWorker.register('sw.js').catch(function(){});
if(!cfg){var d=ov(LG+"<div>تنظیمات Firebase را اینجا بچسبانید (یک بار)</div><textarea id='mzc' rows='9' style='"+IS+"' placeholder='const firebaseConfig = {...}'></textarea><button id='mzs' style='"+BS+"'>ذخیره</button><div id='mzm' style='color:#ef6b5e'></div>");
 document.getElementById('mzs').onclick=function(){var c=parse(document.getElementById('mzc').value);if(!c){document.getElementById('mzm').textContent='تنظیمات درست نیست';return}localStorage.setItem('mzFB',JSON.stringify(c));location.reload()};return}
if(typeof firebase==='undefined')return;
firebase.initializeApp(cfg);var fs=firebase.firestore();
try{fs.settings({cacheSizeBytes:firebase.firestore.CACHE_SIZE_UNLIMITED})}catch(e){}
try{fs.enablePersistence({synchronizeTabs:true}).catch(function(){})}catch(e){}
var auth=firebase.auth();
function login(){ov(LG+"<input id='mze' type='email' placeholder='ایمیل' style='"+IS+"'><input id='mzp' type='password' placeholder='رمز' style='"+IS+"'><button id='mzb' style='"+BS+"'>ورود</button><div id='mzm' style='color:#ef6b5e'></div>");
 document.getElementById('mzb').onclick=function(){document.getElementById('mzm').textContent='...';auth.signInWithEmailAndPassword(document.getElementById('mze').value.trim(),document.getElementById('mzp').value).catch(function(e){document.getElementById('mzm').textContent='ایمیل یا رمز اشتباه است یا انترنت نیست'})}}
var ready=new Promise(function(res){auth.onAuthStateChanged(function(u){var o=document.getElementById('mzov');if(u){if(o)o.remove();res()}else if(!o)login()})});
function soft(p){if(!navigator.onLine){p.catch(function(){});return Promise.resolve()}return Promise.race([p,new Promise(function(r){setTimeout(r,8000)})])}
function wq(q){return{onSnapshot:function(a,b){return q.onSnapshot(a,b||function(){})},get:function(){return q.get()},where:function(f,o,v){return wq(q.where(f,o,v))}}}
var dbA={collection:function(n){var c=fs.collection(n),w=wq(c);w.doc=function(id){var d=c.doc(id);return{set:function(o){return soft(d.set(o))},update:function(o){return soft(d.update(o))},delete:function(){return soft(d.delete())},get:function(){return d.get()},onSnapshot:function(a,b){return d.onSnapshot(a,b||function(){})}}};return w}};
window.claude={use:function(n){return n==='db'?ready.then(function(){return dbA}):Promise.resolve(null)}};
})();
