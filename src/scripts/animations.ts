import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initMobileNav(): void {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  const panel = document.getElementById('mobile-menu-panel');
  const backdrop = document.getElementById('mobile-menu-backdrop');
  const closeBtn = document.getElementById('mobile-menu-close');

  if (!toggle || !menu || !panel || !backdrop || !closeBtn) return;

  const openMenu = (): void => {
    menu.classList.add('is-open');
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close menu');
    menu.setAttribute('aria-hidden', 'false');
    menu.removeAttribute('inert');
    document.body.classList.add('overflow-hidden');
  };

  const closeMenu = (): void => {
    menu.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
    menu.setAttribute('aria-hidden', 'true');
    menu.setAttribute('inert', '');
    document.body.classList.remove('overflow-hidden');
  };

  toggle.addEventListener('click', () => {
    menu.classList.contains('is-open') ? closeMenu() : openMenu();
  });
  closeBtn.addEventListener('click', closeMenu);
  backdrop.addEventListener('click', closeMenu);

  menu.querySelectorAll<HTMLAnchorElement>('[data-mobile-nav-link]').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024 && menu.classList.contains('is-open')) closeMenu();
  });
}

function initHeaderScroll(): void {
  const header = document.getElementById('site-header');
  if (!header) return;
  const onScroll = (): void => header.classList.toggle('scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function initHeroPoles(): void {
  if (prefersReducedMotion) return;
  const verticals = document.querySelectorAll<HTMLElement>('.hero-pole-v');
  const horizontals = document.querySelectorAll<HTMLElement>('.hero-pole-h');
  if (!verticals.length) return;

  gsap.from(verticals, {
    scaleY: 0,
    transformOrigin: '50% 100%',
    duration: 0.85,
    stagger: 0.07,
    ease: 'power2.out',
  });
  gsap.from(horizontals, {
    scaleX: 0,
    transformOrigin: '0% 50%',
    duration: 0.55,
    stagger: 0.05,
    delay: 0.35,
    ease: 'power2.out',
  });
}

function initStamp(): void {
  const tags = document.querySelectorAll<HTMLElement>('[data-stamp]');
  if (!tags.length) return;

  if (prefersReducedMotion) {
    tags.forEach((el) => el.classList.add('is-stamped'));
    return;
  }

  tags.forEach((el) => {
    gsap.fromTo(
      el,
      { scale: 1.35, rotate: -10, opacity: 0 },
      {
        scale: 1,
        rotate: -2,
        opacity: 1,
        duration: 0.45,
        ease: 'back.out(2.2)',
        scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none none' },
        onComplete: () => el.classList.add('is-stamped'),
      },
    );
  });
}

function initMotion(): void {
  document.documentElement.classList.add('js-ready');
  if (prefersReducedMotion) {
    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => el.classList.add('is-revealed'));
    initStamp();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.fromTo(
      el,
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        onComplete: () => el.classList.add('is-revealed'),
      },
    );
  });

  initHeroPoles();
  initStamp();
}

initMobileNav();
initHeaderScroll();
initMotion();

export {};
