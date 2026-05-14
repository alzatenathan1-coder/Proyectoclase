(function(){
    const c=document.getElementById('smoke-canvas'),x=c.getContext('2d');
    let p=[],id;
    function rs(){c.width=window.innerWidth;c.height=window.innerHeight;}
    window.addEventListener('resize',rs);rs();
    class P{
        constructor(){this.reset(true)}
        reset(i){this.x=Math.random()*c.width;this.y=c.height+20+Math.random()*100;this.size=20+Math.random()*80;this.speedY=-(0.15+Math.random()*0.4);this.speedX=(Math.random()-0.5)*0.12;this.alpha=0.02+Math.random()*0.05;this.rotation=Math.random()*Math.PI*2;this.rotSpeed=(Math.random()-0.5)*0.002;if(i)this.y=Math.random()*c.height*0.5}
        update(){this.y+=this.speedY;this.x+=this.speedX;this.alpha*=0.998;this.rotation+=this.rotSpeed;if(this.y<-60||this.alpha<0.001)this.reset(false)}
        draw(){x.save();x.translate(this.x,this.y);x.rotate(this.rotation);let g=x.createRadialGradient(0,0,0,0,0,this.size);g.addColorStop(0,`rgba(200,168,78,${this.alpha})`);g.addColorStop(0.5,`rgba(140,115,50,${this.alpha*0.5})`);g.addColorStop(1,'rgba(200,168,78,0)');x.fillStyle=g;x.beginPath();x.arc(0,0,this.size,0,Math.PI*2);x.fill();x.restore()}
    }
    const cnt=Math.min(35,Math.floor(window.innerWidth/35));
    for(let i=0;i<cnt;i++)p.push(new P);
    function an(){x.clearRect(0,0,c.width,c.height);p.forEach(q=>{q.update();q.draw()});id=requestAnimationFrame(an)}
    an();
    window.addEventListener('resize',()=>{p=[];const n=Math.min(35,Math.floor(window.innerWidth/35));for(let i=0;i<n;i++)p.push(new P)});
})();

(function(){
    const t=document.getElementById('hero-title'),ch=t.querySelectorAll('.dust-text');
    let d=false;
    ch.forEach(el=>{
        const tx=el.textContent;
        el.innerHTML='';
        tx.split('').forEach((c,i)=>{
            const s=document.createElement('span');
            s.className='dust-char';
            s.textContent=c===' '?'\u00A0':c;
            s.style.setProperty('--dx',(Math.random()-0.5)*100+'px');
            s.style.setProperty('--dy',-(40+Math.random()*80)+'px');
            s.style.setProperty('--dr',(Math.random()-0.5)*50+'deg');
            el.appendChild(s);
        });
    });
    const al=t.querySelectorAll('.dust-char');
    window.addEventListener('scroll',()=>{
        const s=window.scrollY,h=document.getElementById('hero').offsetHeight,p=Math.min(s/(h*0.5),1);
        if(p>0.12&&!d){d=true;al.forEach((c,i)=>{setTimeout(()=>c.classList.add('dispersing'),i*12)})}
        else if(p<=0.04&&d){d=false;al.forEach(c=>c.classList.remove('dispersing'))}
    });
})();

(function(){
    const o=new IntersectionObserver(e=>{e.forEach(en=>{if(en.isIntersecting)en.target.classList.add('active')})},{threshold:0.08});
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el=>o.observe(el));
})();

(function(){
    const r={
        transilvania:{name:'Transilvania',monument:'🏰 Castillo de Bran',dish:'🍲 Gulyás transilvano',desc:'Tierras altas bañadas por leyendas y bosques milenarios.',dot:'#c8a84e'},
        moldavia:{name:'Moldavia',monument:'⛪ Monasterios Pintados',dish:'🥟 Plăcinte (empanadas divinas)',desc:'Donde la fe ortodoxa y la cocina se encuentran.',dot:'#a83232'},
        muntenia:{name:'Muntenia',monument:'🎭 El Ateneo Rumano',dish:'🔥 Mititei (la esencia de la parrilla)',desc:'El corazón cultural de Rumanía.',dot:'#c8a84e'},
        dobrogea:{name:'Dobrogea',monument:'🌊 El Delta del Danubio',dish:'🐟 Saramură de pește (el alma del río)',desc:'Donde el Danubio se funde con el Mar Negro.',dot:'#a83232'}
    };
    const t=document.getElementById('map-tooltip'),ne=document.getElementById('region-name'),me=document.getElementById('region-monument'),de=document.getElementById('region-dish'),se=document.getElementById('region-desc'),de2=document.getElementById('region-dot'),rp=document.querySelectorAll('.map-region'),pi=document.querySelectorAll('.region-pill');
    function sh(id){
        const d=r[id];if(!d)return;
        ne.textContent=d.name;me.textContent=d.monument;de.textContent=d.dish;se.textContent=d.desc;
        t.classList.add('active');de2.style.background=d.dot;
        rp.forEach(p=>p.classList.toggle('map-region-dim',p.dataset.region!==id));
        pi.forEach(p=>{p.dataset.region===id?(p.classList.add('bg-gold','text-wood-dark'),p.classList.remove('bg-gold/10','text-gold','border-gold/20','bg-blood/10','text-blood-light','border-blood/20')):(p.classList.remove('bg-gold','text-wood-dark'),p.dataset.region==='transilvania'||p.dataset.region==='muntenia'?p.classList.add('bg-gold/10','text-gold','border-gold/20'):p.classList.add('bg-blood/10','text-blood-light','border-blood/20'))});
    }
    rp.forEach(p=>{p.addEventListener('mouseenter',()=>sh(p.dataset.region));p.addEventListener('click',()=>sh(p.dataset.region))});
    pi.forEach(p=>{p.addEventListener('click',()=>sh(p.dataset.region));p.addEventListener('mouseenter',()=>sh(p.dataset.region))});
    sh('transilvania');
    document.getElementById('map-container').addEventListener('mouseleave',()=>{rp.forEach(p=>p.classList.remove('map-region-dim'));sh('transilvania')});
})();

(function(){
    const n=document.getElementById('navbar');
    window.addEventListener('scroll',()=>{n.classList.toggle('scrolled',window.scrollY>80)});
})();
