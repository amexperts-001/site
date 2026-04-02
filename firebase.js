/* ════════════════════════════════════════════════════════════
   AMEXPERTS & PARTNERS — firebase.js
   ════════════════════════════════════════════════════════════

   ╔══════════════════════════════════════════════════════════╗
   ║  POUR CHANGER DE COMPTE FIREBASE :                      ║
   ║  Remplacez UNIQUEMENT les valeurs ci-dessous            ║
   ║  par celles de votre nouveau projet Firebase.           ║
   ║  Console Firebase → Paramètres → Vos applications       ║
   ╚══════════════════════════════════════════════════════════╝
   ════════════════════════════════════════════════════════════ */

const firebaseConfig = {
  apiKey: "AIzaSyBZB_51fpfegtUlZtwF3mgJ7PwMZM3pjhk",
  authDomain: "amexperts-and-partners-ac615.firebaseapp.com",
  projectId: "amexperts-and-partners-ac615",
  storageBucket: "amexperts-and-partners-ac615.firebasestorage.app",
  messagingSenderId: "427905166706",
  appId: "1:427905166706:web:f50268a3f137a8706901eb"
};

/* ════════════════════════════════════════════════════════════
   NE PAS MODIFIER EN DESSOUS DE CETTE LIGNE
   ════════════════════════════════════════════════════════════ */
(function(global){
'use strict';

function getDB() {
  try {
    if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
    return firebase.firestore();
  } catch(e) { console.error('Firebase init:', e); return null; }
}
global.getDB = getDB;

function fmtDate(s,l){
  if(!s) return '';
  try{return new Date(s).toLocaleDateString(l==='en'?'en-GB':'fr-FR',{day:'numeric',month:'long',year:'numeric'});}
  catch(e){return s;}
}

async function safeTranslate(txt){
  if(!txt||global._ampLang!=='en') return txt||'';
  return (typeof global.autoTrans==='function') ? await global.autoTrans(txt) : txt;
}

/* ── Animations + Counters ── */
function initUI(){
  try{
    var obs=new IntersectionObserver(function(e){e.forEach(function(i){if(i.isIntersecting)i.target.classList.add('visible');});},{threshold:0.05});
    document.querySelectorAll('.fade-up').forEach(function(el){obs.observe(el);});
  }catch(e){document.querySelectorAll('.fade-up').forEach(function(el){el.classList.add('visible');});}
  setTimeout(function(){document.querySelectorAll('.fade-up').forEach(function(el){el.classList.add('visible');});},500);
  document.querySelectorAll('.counter').forEach(function(el){
    var t=parseInt(el.dataset.target)||0,s=el.dataset.suffix||'';
    try{
      var o=new IntersectionObserver(function(entries){
        if(!entries[0].isIntersecting)return;o.disconnect();
        var c=0,step=t/(1800/16);
        var tick=function(){c=Math.min(c+step,t);el.textContent=Math.floor(c)+s;if(c<t)requestAnimationFrame(tick);};tick();
      });o.observe(el);
    }catch(e){el.textContent=t+s;}
  });
}

/* ── Newsletter (toutes pages) ── */
function initNewsletter(){
  var db=getDB(); if(!db) return;
  document.querySelectorAll('#nlForm,#newsletterForm').forEach(function(form){
    form.addEventListener('submit',async function(e){
      e.preventDefault();
      var inp=this.querySelector('input[type="email"]');
      if(!inp||!inp.value.trim()) return;
      var btn=this.querySelector('button[type="submit"]'),orig=btn?btn.textContent:'OK';
      if(btn){btn.textContent='…';btn.disabled=true;}
      try{
        await db.collection('newsletter').add({email:inp.value.trim(),date:new Date().toISOString(),source:this.id||'site'});
        inp.value='';
        if(btn){btn.textContent='✓';setTimeout(function(){btn.textContent=orig;btn.disabled=false;},2000);}
      }catch(err){console.error('Newsletter:',err);if(btn){btn.textContent=orig;btn.disabled=false;}}
    });
  });
}

/* ════════════════════════════════════════════════════════════
   PAGE : index.html
   ════════════════════════════════════════════════════════════ */
async function initIndex(){
  var db=getDB(); if(!db) return;
  var FALLBACK=[
    {icon:'📊',categorie:'Finance',date:'2026-02-15',titre:'Structuration financière des PME en Afrique de l\'Ouest',extrait:'Analyse des mécanismes de financement adaptés aux PME africaines dans un contexte de rareté de capital.'},
    {icon:'🏗️',categorie:'Investissement',date:'2026-01-28',titre:'Opportunités immobilières au Togo en 2026',extrait:'Tour d\'horizon des secteurs porteurs et des zones à fort potentiel de valorisation dans l\'immobilier togolais.'},
    {icon:'🤝',categorie:'PPP',date:'2026-01-10',titre:'PPP : levier de développement pour les collectivités africaines',extrait:'Comment les partenariats public-privé peuvent accélérer les infrastructures structurantes en Afrique de l\'Ouest.'},
  ];

  async function renderRealisations(docs){
    var c=document.getElementById('realisationsContainer'); if(!c) return;
    var d=global._i18n&&global._i18n[global._ampLang||'fr'];
    if(!docs||!docs.length){c.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--gray)"><i class="fas fa-folder-open" style="font-size:2rem;opacity:.3;display:block;margin-bottom:.75rem;color:var(--purple)"></i><p>'+(d&&d.ref_empty||'Aucune réalisation publiée.')+'</p></div>';return;}
    var rows=await Promise.all(docs.slice(0,3).map(async function(doc){
      var titre=await safeTranslate(doc.titre||''),desc=await safeTranslate(doc.description||doc.extrait||''),secteur=await safeTranslate(doc.secteur||doc.cat||'—'),pays=await safeTranslate(doc.pays||'');
      return '<div class="realisation-card fade-up"><div class="card-img" style="display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--purple-dark),var(--purple));overflow:hidden">'+(doc.image?'<img src="'+doc.image+'" alt="'+titre+'" style="width:100%;height:100%;object-fit:cover">':'<i class="fas fa-building" style="font-size:2.5rem;color:rgba(255,255,255,.5)"></i>')+'</div><div class="card-body"><div class="tag">'+secteur+(pays?' · '+pays:'')+'</div><h3>'+titre+'</h3><p>'+desc+'</p></div></div>';
    }));
    c.innerHTML=rows.join('');
    setTimeout(function(){c.querySelectorAll('.fade-up').forEach(function(el){el.classList.add('visible');});},100);
  }

  async function renderBlog(arts){
    var c=document.getElementById('blogContainer'); if(!c) return;
    var d=global._i18n&&global._i18n[global._ampLang||'fr'];
    var rows=await Promise.all(arts.slice(0,3).map(async function(a){
      var titre=await safeTranslate(a.titre||''),extrait=await safeTranslate(a.extrait||a.description||''),cat=await safeTranslate(a.categorie||a.cat||'Analyse');
      return '<article class="blog-card fade-up"><div class="card-img" style="display:flex;align-items:center;justify-content:center;font-size:2.5rem;background:linear-gradient(135deg,var(--purple-dark),var(--purple));overflow:hidden">'+(a.image?'<img src="'+a.image+'" alt="'+titre+'" style="width:100%;height:100%;object-fit:cover">':(a.icon||'📰'))+'</div><div class="card-body"><div class="meta"><span>'+cat+'</span> — '+fmtDate(a.date,global._ampLang||'fr')+'</div><h3>'+titre+'</h3><p>'+extrait+'</p><a href="blog.html" class="read-more">'+(d&&d.blog_read_more||'Lire la suite →')+'</a></div></article>';
    }));
    c.innerHTML=rows.join('');
    setTimeout(function(){c.querySelectorAll('.fade-up').forEach(function(el){el.classList.add('visible');});},100);
  }

  async function loadRealisations(){
    try{
      var snap;
      try{snap=await db.collection('realisations_data').orderBy('date','desc').limit(3).get();}catch(e){snap=await db.collection('realisations_data').limit(3).get();}
      var docs=(snap&&!snap.empty)?snap.docs.map(function(d){return Object.assign({id:d.id},d.data());}).sort(function(a,b){return (b.date||'').localeCompare(a.date||'');}):[]; global._realData=docs; renderRealisations(docs);
    }catch(e){console.error('Réalisations:',e);renderRealisations([]);}
  }

  async function loadBlog(){
    global._blogData=FALLBACK; renderBlog(FALLBACK);
    try{
      var snap;
      try{snap=await db.collection('articles').orderBy('date','desc').limit(3).get();}catch(e){snap=await db.collection('articles').limit(3).get();}
      if(snap&&!snap.empty){var docs=snap.docs.map(function(d){return Object.assign({id:d.id},d.data());}).sort(function(a,b){return (b.date||'').localeCompare(a.date||'');});global._blogData=docs;renderBlog(docs);}
    }catch(e){console.error('Blog:',e);}
  }

  var cf=document.getElementById('consultationForm');
  if(cf){cf.addEventListener('submit',async function(e){
    e.preventDefault();var btn=this.querySelector('[type="submit"]'),orig=btn.innerHTML;
    var d=global._i18n&&global._i18n[global._ampLang||'fr'];
    btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> <span>'+(d&&d.f_sending||'Envoi…')+'</span>';btn.disabled=true;
    var data={nom:this.nom&&this.nom.value||'',email:this.email&&this.email.value||'',telephone:this.telephone&&this.telephone.value||'',organisation:this.organisation&&this.organisation.value||'',service:this.service&&this.service.value||'',message:this.message&&this.message.value||'',date:new Date().toISOString(),status:'nouveau',lu:false};
    try{await db.collection('consultations').add(data);btn.innerHTML='<i class="fas fa-check"></i> <span>'+(d&&d.f_sent||'Envoyé !')+'</span>';this.reset();setTimeout(function(){btn.innerHTML=orig;btn.disabled=false;},3000);}
    catch(err){console.error(err);btn.innerHTML=orig;btn.disabled=false;alert(d&&d.f_error||'Erreur.');}
  });}

  global._reloadDynamic=function(l){global._ampLang=l;if(global._blogData)renderBlog(global._blogData);if(global._realData)renderRealisations(global._realData);};
  loadRealisations(); loadBlog();
}

/* ════════════════════════════════════════════════════════════
   PAGE : about.html — Équipe
   ════════════════════════════════════════════════════════════ */
async function initAbout(){
  var c=document.getElementById('teamContainer')||document.querySelector('.team-grid'); if(!c) return;
  var db=getDB(); if(!db) return;
  async function renderTeam(docs){
    if(!docs||!docs.length) return;
    var rows=await Promise.all(docs.map(async function(doc){
      var nom=await safeTranslate(doc.nom||doc.name||''),role=await safeTranslate(doc.role||doc.poste||''),desc=await safeTranslate(doc.description||doc.bio||''),dept=await safeTranslate(doc.departement||doc.dept||'');
      return '<div class="team-card fade-up"><div class="team-img" style="background:linear-gradient(135deg,var(--purple-dark),var(--purple));display:flex;align-items:center;justify-content:center;height:120px">'+(doc.photo?'<img src="'+doc.photo+'" alt="'+nom+'" style="width:100%;height:100%;object-fit:cover">':'<i class="fas fa-user" style="font-size:2.5rem;color:rgba(255,255,255,.4)"></i>')+'</div><div class="team-body" style="padding:1.5rem">'+(dept?'<div class="section-label" style="font-size:.7rem">'+dept+'</div>':'')+'<h3 style="margin:.5rem 0 .25rem">'+nom+'</h3><div style="font-size:.82rem;color:var(--purple);font-weight:600;margin-bottom:.75rem">'+role+'</div><p style="font-size:.88rem;color:var(--gray-dark);line-height:1.7">'+desc+'</p></div></div>';
    }));
    c.innerHTML=rows.join('');
    setTimeout(function(){c.querySelectorAll('.fade-up').forEach(function(el){el.classList.add('visible');});},100);
  }
  global._reloadDynamic=function(l){global._ampLang=l;if(global._teamData)renderTeam(global._teamData);};
  try{
    var snap;try{snap=await db.collection('experts').orderBy('ordre','asc').get();}catch(e){snap=await db.collection('experts').get();}
    if(snap&&!snap.empty){var docs=snap.docs.map(function(d){return Object.assign({id:d.id},d.data());});global._teamData=docs;renderTeam(docs);}
  }catch(e){console.error('Équipe:',e);}
}

/* ════════════════════════════════════════════════════════════
   PAGE : realisation.html
   ════════════════════════════════════════════════════════════ */
async function initRealisations(){
  var c=document.getElementById('realisationsGrid')||document.getElementById('projetsGrid'); if(!c) return;
  var db=getDB(); if(!db) return;
  var d=global._i18n&&global._i18n[global._ampLang||'fr'];
  async function renderDocs(docs){
    if(!docs||!docs.length){c.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--gray)"><i class="fas fa-folder-open" style="font-size:2rem;opacity:.3;display:block;margin-bottom:.75rem"></i><p>'+(d&&d.real_empty||'Aucun projet publié.')+'</p></div>';return;}
    var rows=await Promise.all(docs.map(async function(doc){
      var titre=await safeTranslate(doc.titre||''),desc2=await safeTranslate(doc.description||''),secteur=await safeTranslate(doc.secteur||doc.cat||'—'),pays=await safeTranslate(doc.pays||'');
      return '<div class="realisation-card fade-up"><div class="card-img" style="background:linear-gradient(135deg,var(--purple-dark),var(--purple));overflow:hidden;display:flex;align-items:center;justify-content:center">'+(doc.image?'<img src="'+doc.image+'" alt="'+titre+'" style="width:100%;height:100%;object-fit:cover">':'<i class="fas fa-building" style="font-size:2.5rem;color:rgba(255,255,255,.5)"></i>')+'</div><div class="card-body"><div class="tag">'+secteur+(pays?' · '+pays:'')+'</div><h3>'+titre+'</h3><p>'+desc2+'</p></div></div>';
    }));
    c.innerHTML=rows.join('');
    setTimeout(function(){c.querySelectorAll('.fade-up').forEach(function(el){el.classList.add('visible');});},100);
  }
  global._reloadDynamic=function(l){global._ampLang=l;if(global._realPageData)renderDocs(global._realPageData);};
  try{
    var snap;try{snap=await db.collection('realisations_data').orderBy('date','desc').get();}catch(e){snap=await db.collection('realisations_data').get();}
    if(snap&&!snap.empty){var docs=snap.docs.map(function(d){return Object.assign({id:d.id},d.data());}).sort(function(a,b){return (b.date||'').localeCompare(a.date||'');});global._realPageData=docs;renderDocs(docs);}
    else{renderDocs([]);}
  }catch(e){console.error('Réalisations page:',e);renderDocs([]);}
}

/* ════════════════════════════════════════════════════════════
   INIT AUTOMATIQUE
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded',function(){
  initUI();
  initNewsletter();
  var page=window.location.pathname.split('/').pop()||'index.html';
  if(page===''||page==='index.html') initIndex();
  else if(page==='about.html')       initAbout();
  else if(page==='realisation.html') initRealisations();
});

})(window);
