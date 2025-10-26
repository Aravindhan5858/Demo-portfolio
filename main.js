// main.js - small navigator and Swiper init

function Navigate(index) {
  const links = document.querySelectorAll('.Links li');
  links.forEach((li, i) => li.classList.toggle('activeLink', i === index));

  // show/hide sections (single-page view)
  const sections = Array.from(document.querySelectorAll('.swiper-slide'));
  sections.forEach((sec, i)=>{
    sec.classList.toggle('active', i === index);
  });
  // close mobile menu after navigation (if open)
  setTimeout(closeMobileMenu, 100);
  // update URL hash for deep-linking
  const names = ['home','about','services','certificates','contact'];
  if(names[index]){
    history.replaceState(null, '', '#'+names[index]);
  }
  // animate the newly active section
  animateSectionByIndex(index);
}

// Animate elements inside a section when it becomes active
function animateSectionByIndex(index){
  const sections = Array.from(document.querySelectorAll('.swiper-slide'));
  const section = sections[index];
  if(!section) return;
  // elements to animate: headings, leads, cards, thumbs, labels, inputs, buttons, social links
  const els = section.querySelectorAll('h1,h2,h3,h4,.headline,.lead,p,.card,.thumb,.project-card,.project-body,label,input,textarea,.social-list a,.btn');
  // remove previous animate classes in this section
  els.forEach(el=> el.classList.remove('animate'));
  // add with small stagger
  els.forEach((el,i)=> setTimeout(()=> el.classList.add('animate'), i*60));
}

// Mobile menu helpers
function closeMobileMenu(){
  const linksEl = document.querySelector('.Links');
  const overlay = document.querySelector('.overlay');
  if(linksEl && linksEl.classList.contains('show')){
    linksEl.classList.remove('show');
    overlay && overlay.classList.remove('show');
  }
}

function openMobileMenu(){
  const linksEl = document.querySelector('.Links');
  const overlay = document.querySelector('.overlay');
  linksEl && linksEl.classList.add('show');
  overlay && overlay.classList.add('show');
}

window.addEventListener('load', () => {
  // create overlay dynamically
  if(!document.querySelector('.overlay')){
    const ov = document.createElement('div'); ov.className = 'overlay'; document.body.appendChild(ov);
  }
  const menuToggle = document.getElementById('menuToggle');
  const linksEl = document.querySelector('.Links');
  const overlay = document.querySelector('.overlay');
  if(menuToggle){
    menuToggle.addEventListener('click', ()=>{
      if(linksEl.classList.contains('show')) closeMobileMenu(); else openMobileMenu();
    })
  }
  if(overlay) overlay.addEventListener('click', closeMobileMenu);
  // bind navigation to nav items; clicking will navigate in-page and update the hash
  const navItems = Array.from(document.querySelectorAll('.Links li'));
  const names = ['home','about','projects','certificates','contact'];
  navItems.forEach((li, i)=> li.addEventListener('click', ()=>{
    Navigate(i);
    if(names[i]) history.replaceState(null, '', '#'+names[i]);
  }));

  // Show initial section based on hash (or default to 0)
  const sections = Array.from(document.querySelectorAll('.swiper-slide'));
  const mapping = {home:0, about:1, projects:2, certificates:3, contact:4};
  const hash = location.hash.replace('#','');
  const startIndex = (hash && mapping[hash] !== undefined) ? mapping[hash] : 0;
  sections.forEach(s=> s.classList.remove('active'));
  if(sections[startIndex]) sections[startIndex].classList.add('active');
  // set active nav item
  const links = document.querySelectorAll('.Links li');
  links.forEach((li,i)=> li.classList.toggle('activeLink', i===startIndex));

  // animate the start section
  setTimeout(()=> animateSectionByIndex(startIndex), 120);
});
