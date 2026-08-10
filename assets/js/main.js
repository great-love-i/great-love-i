/* Main JS Entry */

import { initNav }        from './modules/nav.js';
import { initAnimations } from './modules/animations.js';
import { initTerminal }   from './modules/terminal.js';

function initPageUI() {
  initYear();
  initTheme();
  initBackToTop();
}

function initYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function initTheme() {
  const root = document.documentElement;
  const toggles = document.querySelectorAll('.theme-toggle');
  const stored = localStorage.getItem('theme');
  const defaultTheme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const themeLabel = theme => theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  root.setAttribute('data-theme', defaultTheme);

  toggles.forEach(btn => {
    btn.setAttribute('aria-pressed', String(defaultTheme === 'dark'));
    btn.setAttribute('aria-label', themeLabel(defaultTheme));

    btn.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', nextTheme);
      localStorage.setItem('theme', nextTheme);
      btn.setAttribute('aria-pressed', String(nextTheme === 'dark'));
      btn.setAttribute('aria-label', themeLabel(nextTheme));
    });
  });
}

function initBackToTop() {
  const backBtn = document.getElementById('back-to-top');
  if (!backBtn) return;

  function updateVisibility() {
    const isVisible = window.scrollY > 400;
    backBtn.classList.toggle('visible', isVisible);
    backBtn.setAttribute('aria-hidden', String(!isVisible));
    backBtn.setAttribute('tabindex', isVisible ? '0' : '-1');
  }

  window.addEventListener('scroll', updateVisibility, { passive: true });
  updateVisibility();

  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initAnimations();
  initTerminal();
  initPageUI();
});
