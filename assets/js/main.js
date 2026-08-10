/* Main JS Entry */

import { initNav }        from './nav.js';
import { initAnimations } from './animations.js';
import { initTerminal }   from './terminal.js';

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

  root.setAttribute('data-theme', defaultTheme);

  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', nextTheme);
      localStorage.setItem('theme', nextTheme);
    });
  });
}

function initBackToTop() {
  const backBtn = document.getElementById('back-to-top');
  if (!backBtn) return;

  function updateVisibility() {
    backBtn.classList.toggle('visible', window.scrollY > 400);
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
