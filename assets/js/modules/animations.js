/* UI Animations */

export function initAnimations() {
  initReveal();
  initCountUp();
  initGridParallax();
}

/* Grid Parallax Effect */
function initGridParallax() {
  const grid = document.querySelector('.hero__grid-lines');
  if (!grid || window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        grid.style.transform = `translateY(${scrollY * 0.2}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* Scroll Reveal */
function initReveal() {
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px' }
  );

  revealEls.forEach(el => observer.observe(el));
}

/* Numerical Count-Up Animation */
function initCountUp() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.8 }
  );

  counters.forEach(el => observer.observe(el));
}

function animateCount(el) {
  const target   = parseInt(el.getAttribute('data-count'), 10);
  const suffix   = el.getAttribute('data-suffix') || '';
  const duration = 1200;
  const start    = performance.now();

  function step(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const value = Math.round(easeOutCubic(progress) * target);
    el.textContent  = value + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}
