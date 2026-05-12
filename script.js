/* ░ Eruri Kiriku — site script ░ */

(() => {
  'use strict';

  /* current year in footer */
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  /* nav shrink on scroll */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 30);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* reveal on scroll — IntersectionObserver */
  const revealTargets = document.querySelectorAll(
    '.section-head, .stat, .car, .about__grid, .service, .quote blockquote, .contact__grid'
  );
  revealTargets.forEach((el) => el.classList.add('reveal'));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );
  revealTargets.forEach((el) => io.observe(el));

  /* smooth-scroll anchor offset for fixed nav */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (ev) => {
      const id = a.getAttribute('href');
      if (id && id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          ev.preventDefault();
          const y = target.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    });
  });
})();

/* enquiry form — local handler (no backend) */
function handleEnquiry(form) {
  const note = document.getElementById('formNote');
  if (!note) return;
  note.hidden = false;
  note.textContent =
    '✓ Thank you. A reply will follow within 24 hours from eruri@kiriku.auto.';
  form.reset();
  setTimeout(() => {
    note.hidden = true;
  }, 7000);
}
