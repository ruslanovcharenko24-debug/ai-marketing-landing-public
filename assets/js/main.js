/**
 * AI Marketing Intelligence Core — Public Landing Page
 * Minimal vanilla JS. No analytics, no tracking, no external scripts.
 * This file may be served from a public GitHub Pages repository.
 * It must never contain API keys, credentials, or private logic.
 */

// ============================================================
// TALLY FORM URL — public CTA destination
// ============================================================
var FORM_URL = 'https://tally.so/r/D4Xa25';

// ============================================================
// NAV SHADOW ON SCROLL
// ============================================================
(function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', function () {
    nav.style.boxShadow = window.scrollY > 12
      ? '0 2px 20px rgba(0,0,0,.4)'
      : 'none';
  }, { passive: true });
})();

// ============================================================
// INTERSECTION OBSERVER — FADE-IN SECTIONS
// ============================================================
(function () {
  if (!window.IntersectionObserver) return;

  var targets = document.querySelectorAll(
    '.card, .solution__item, .step, .analysis-item, .notice, .cta-block'
  );

  targets.forEach(function (el) { el.classList.add('fade-in'); });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(function (el) { observer.observe(el); });
})();

// ============================================================
// SMOOTH SCROLL — anchor links only
// ============================================================
document.addEventListener('click', function (e) {
  var link = e.target.closest('a[href^="#"]');
  if (!link) return;
  var target = document.querySelector(link.getAttribute('href'));
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});
