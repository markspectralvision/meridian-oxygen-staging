(function(){
  const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // progress bar
  const bar=document.querySelector('.progress');
  if(bar){addEventListener('scroll',()=>{const h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});}
  // mobile menu
  const burger=document.querySelector('.burger'),menu=document.querySelector('.mobile-menu');
  if(burger&&menu){burger.addEventListener('click',()=>{const o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o)});}
  // reveal
  const els=document.querySelectorAll('.reveal');
  if(rm||!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));}
  else{const io=new IntersectionObserver(en=>{en.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:0,rootMargin:'0px 0px -8% 0px'});els.forEach(e=>io.observe(e));}
  // counters
  const cs=document.querySelectorAll('[data-count]');
  const fmt=(n,d,g)=>n.toLocaleString('en-US',{maximumFractionDigits:d,useGrouping:g!==false});
  const run=el=>{const t=parseFloat(el.dataset.count),d=(el.dataset.dec|0),suf=el.dataset.suffix||'',pre=el.dataset.prefix||'',g=!('nogroup' in el.dataset);if(rm){el.textContent=pre+fmt(t,d,g)+suf;return}
    const s=performance.now(),dur=1400;const step=now=>{const p=Math.min(1,(now-s)/dur),e=1-Math.pow(1-p,3);el.textContent=pre+fmt(t*e,d,g)+suf;if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)};
  if(cs.length){const io2=new IntersectionObserver(en=>{en.forEach(x=>{if(x.isIntersecting){run(x.target);io2.unobserve(x.target)}})},{threshold:0});cs.forEach(c=>io2.observe(c));}
  // pills
  document.querySelectorAll('.pills').forEach(g=>{const hidden=g.parentElement.querySelector('input[name=interests]');const sum=g.parentElement.querySelector('.summary');
    g.querySelectorAll('.pill').forEach(p=>p.addEventListener('click',e=>{e.preventDefault();p.classList.toggle('on');const on=[...g.querySelectorAll('.pill.on')].map(x=>x.textContent.trim());if(hidden)hidden.value=on.join(', ');if(sum)sum.textContent=on.length?('Selected: '+on.join(', ')):'';}));});
  // lead form: honest submit (success only on 2xx; otherwise email fallback)
  document.querySelectorAll('form.lead').forEach(f=>{f.addEventListener('submit',async e=>{e.preventDefault();const note=f.querySelector('.form-note');const pills=f.querySelector('.pills');
    if(pills&&!pills.querySelector('.pill.on')){pills.classList.add('shake');setTimeout(()=>pills.classList.remove('shake'),450);return;}
    if(f.querySelector('input[name=website]').value){return;}
    const btn=f.querySelector('button[type=submit]');btn.disabled=true;
    try{const r=await fetch(f.action,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.fromEntries(new FormData(f)))});
      if(r.ok){note.textContent='Thank you. An engineer replies within one business day.';note.classList.add('show');f.reset();}
      else{throw new Error('bad status');}}
    catch(err){note.innerHTML='Our request line is not connected on this staging build yet. Email <a href="mailto:info@meridianoxygen.com">info@meridianoxygen.com</a> and an engineer replies within one business day.';note.classList.add('show');}
    btn.disabled=false;});});
  // calculator
  const c=document.querySelector('.calc');
  if(c){const q=s=>c.querySelector(s);const upd=()=>{const n=parseFloat(q('#cyl-month').value)||0,p=parseFloat(q('#cyl-price').value)||0,f=parseFloat(q('#fees').value)||0;
      const annual=n*12*p+f*12;const five=annual*5;const ppi=annual*2.317;
      q('#r-annual').textContent=fmt(Math.round(annual),0);q('#r-five').textContent=fmt(Math.round(five),0);q('#r-ppi').textContent=fmt(Math.round(ppi),0);};
    c.querySelectorAll('input').forEach(i=>i.addEventListener('input',upd));upd();}
  // faq chips active
  const chips=document.querySelectorAll('.faq-nav .chip');
  if(chips.length){const secs=[...chips].map(ch=>document.querySelector(ch.getAttribute('href')));const io3=new IntersectionObserver(en=>{en.forEach(x=>{if(x.isIntersecting){chips.forEach(ch=>ch.classList.toggle('active',ch.getAttribute('href')==='#'+x.target.id))}})},{rootMargin:'-40% 0px -55% 0px'});secs.forEach(s=>s&&io3.observe(s));}
})();
