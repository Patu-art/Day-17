'use strict';

// SITEPRO demo: progressive enhancement only. Content, contact links and navigation
// remain usable if JavaScript fails. No tracking or data collection occurs here.
document.documentElement.classList.add('js');

const header = document.querySelector('#site-header');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#mobile-menu');
const stickyContact = document.querySelector('.mobile-contact');
const quoteSection = document.querySelector('#quote');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let menuOpen = false;
let lastFocused = null;

function setMenu(open, restoreFocus = false) {
  menuOpen = open;
  document.body.classList.toggle('menu-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menu.inert = !open;
  if (open) {
    lastFocused = document.activeElement;
    menu.querySelector('a')?.focus({ preventScroll: true });
  } else if (restoreFocus) {
    (lastFocused || menuButton).focus({ preventScroll: true });
  }
}

menuButton.addEventListener('click', () => setMenu(!menuOpen, menuOpen));
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenu(false));
});
document.addEventListener('keydown', event => {
  if (!menuOpen) return;
  if (event.key === 'Escape') {
    setMenu(false, true);
    return;
  }
  if (event.key !== 'Tab') return;
  const focusable = [...menu.querySelectorAll('a')].filter(link => link.getClientRects().length);
  focusable.unshift(menuButton);
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault(); last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault(); first.focus();
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 900 && menuOpen) setMenu(false);
}, { passive: true });

function updateScrollState() {
  const scrolled = window.scrollY > 30;
  header.classList.toggle('scrolled', scrolled);
  if (!stickyContact) return;
  const quoteVisible = quoteSection.getBoundingClientRect().top < innerHeight * .8 &&
    quoteSection.getBoundingClientRect().bottom > 0;
  stickyContact.classList.toggle('visible', window.scrollY > 480 && !quoteVisible);
}
updateScrollState();
window.addEventListener('scroll', updateScrollState, { passive: true });

if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    });
  }, { threshold: .07, rootMargin: '0px 0px -35px 0px' });
  document.querySelectorAll('.reveal').forEach(node => revealObserver.observe(node));
} else {
  document.querySelectorAll('.reveal').forEach(node => node.classList.add('in-view'));
}

const compareRange = document.querySelector('#compare-range');
const compare = document.querySelector('#compare');
compareRange.addEventListener('input', () => {
  compare.style.setProperty('--position', `${compareRange.value}%`);
});

// Selecting a service in the editorial list carries the choice into the enquiry.
document.querySelectorAll('.service-row').forEach(row => {
  row.querySelector('.service-arrow')?.addEventListener('click', () => {
    const wanted = row.dataset.service;
    const option = [...document.querySelectorAll('input[name="service"]')]
      .find(input => input.value === wanted);
    if (option) option.checked = true;
    // Clearance wording differs between display and form; map explicitly.
    if (!option && wanted.includes('Clearance')) {
      document.querySelector('input[value="Clearance & cleaning"]').checked = true;
    }
  });
});

const form = document.querySelector('#quote-form');
const feedback = document.querySelector('#form-feedback');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const service = String(values.get('service') || '').trim();
  const name = String(values.get('name') || '').trim();
  const postcode = String(values.get('postcode') || '').trim().toUpperCase().replace(/\s+/g, ' ');
  const detail = String(values.get('details') || '').trim();
  if (!service || name.length < 2) {
    feedback.textContent = 'Please enter your name and select a service.';
    return;
  }
  const message = [
    'Hello Mow N Go, I found your garden services and would like to ask for a quote.',
    '', `Name: ${name}`, `Postcode: ${postcode}`, `Service: ${service}`,
    detail ? `Project details: ${detail}` : '', '', 'Please let me know what information you need. Thank you.'
  ].filter((line, index, all) => line || all[index - 1] !== '').join('\n');
  const url = `https://wa.me/447460284744?text=${encodeURIComponent(message)}`;
  feedback.textContent = 'WhatsApp is opening with your message. Please press Send there to contact the business.';
  // A direct navigation is less likely to be blocked on mobile than a new tab.
  window.location.assign(url);
});

// Very restrained pointer depth on the hero artwork. Never enabled for touch or reduced motion.
const heroArt = document.querySelector('.hero-art');
if (heroArt && window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reducedMotion.matches) {
  heroArt.addEventListener('pointermove', event => {
    const rect = heroArt.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - .5) * 8;
    const y = ((event.clientY - rect.top) / rect.height - .5) * 8;
    heroArt.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
  }, { passive: true });
  heroArt.addEventListener('pointerleave', () => { heroArt.style.transform = ''; });
}
