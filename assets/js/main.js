/* Main JS Entry */

import { initNav }        from './nav.js';
import { initAnimations } from './animations.js';
import { initTerminal }   from './terminal.js';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initAnimations();
  initTerminal();
});
