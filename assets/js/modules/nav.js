/* Navigation Logic */

export function initNav() {
  const nav          = document.getElementById('nav');
  const hamburger    = document.getElementById('hamburger');
  const mobileMenu   = document.getElementById('mobile-menu');
  const mobileLinks  = document.querySelectorAll('.nav__mobile-link');
  const navLinks     = document.querySelectorAll('.nav__link');
  const progressBar  = document.getElementById('nav-progress');
  const sections     = document.querySelectorAll('section[id]');
  let lastFocusedElement = null;

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
      const href = link.getAttribute('href').substring(1);
      const isActive = href === current;
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  setTimeout(onScroll, 100); // Small delay to ensure offsets are ready

  function getMenuFocusableElements() {
    return mobileMenu ? Array.from(mobileMenu.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')) : [];
  }

  function handleMenuKeydown(event) {
    if (event.key !== 'Tab') return;
    const focusable = getMenuFocusableElements();
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    }

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function handleDocumentKeydown(event) {
    if (!mobileMenu.classList.contains('open')) return;
    if (event.key === 'Escape') {
      toggleMenu(false);
    }
  }

  function toggleMenu(open) {
    hamburger.classList.toggle('open', open);
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    hamburger.setAttribute('aria-expanded', String(open));

    if (open) {
      lastFocusedElement = document.activeElement;
      const focusable = getMenuFocusableElements();
      if (focusable.length) focusable[0].focus();
      document.addEventListener('keydown', handleDocumentKeydown);
      mobileMenu.addEventListener('keydown', handleMenuKeydown);
    } else {
      document.removeEventListener('keydown', handleDocumentKeydown);
      mobileMenu.removeEventListener('keydown', handleMenuKeydown);
      if (lastFocusedElement instanceof HTMLElement) {
        lastFocusedElement.focus();
      }
      lastFocusedElement = null;
    }
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
  }
}
