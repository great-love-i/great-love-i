/* Navigation Logic */

export function initNav() {
  const nav          = document.getElementById('nav');
  const hamburger    = document.getElementById('hamburger');
  const mobileMenu   = document.getElementById('mobile-menu');
  const mobileLinks  = document.querySelectorAll('.nav__mobile-link');
  const navLinks     = document.querySelectorAll('.nav__link');
  const progressBar  = document.getElementById('nav-progress');
  const sections     = document.querySelectorAll('section[id]');

  if (!nav) return;

  /* Scroll/Sticky/Progress */
  function onScroll() {
    const scrollY   = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress  = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

    nav.classList.toggle('scrolled', scrollY > 10);

    if (progressBar) {
      progressBar.style.width = `${Math.min(progress, 100)}%`;
    }

    // Active section highlight
    let current = '';
    const threshold = window.innerHeight / 3;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - threshold) {
        current = section.getAttribute('id');
      }
    });

    // Special case for scrolling back to the very top (Hero)
    if (scrollY < 100) current = 'home';

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href').substring(1);
      if (href === current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  setTimeout(onScroll, 100); // Small delay to ensure offsets are ready

  /* Mobile Menu Toggle */
  function toggleMenu(open) {
    hamburger.classList.toggle('open', open);
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    hamburger.setAttribute('aria-expanded', open);
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.contains('open');
      toggleMenu(!isOpen);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close on outside click
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) toggleMenu(false);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') toggleMenu(false);
    });
  }
}
