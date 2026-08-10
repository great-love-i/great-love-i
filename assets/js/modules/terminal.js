/* Terminal Typewriter Effect */

const ABOUT_DATA = [
  { key: 'Name',        val: 'Sumit Sharma' },
  { key: 'Location',    val: 'Kathmandu, Nepal' },
  { key: 'Institution', val: 'Lincoln International College' },
  { key: 'Degree',      val: 'BSc. (Hons) Cyber Security & Networking' },
  { key: 'Semester',    val: '1st Semester' },
  { key: 'Goal',        val: 'Cybersecurity Professional' },
  { key: 'Stack',       val: 'C++   Python   C' },
  { key: 'Interests',   val: 'Anime   Manga   Trading' },
];

export function initTerminal() {
  const container = document.getElementById('terminal-rows');
  const cursor    = document.getElementById('terminal-cursor');
  if (!container) return;

  // Cleanup potential previous runs
  container.innerHTML = '';

  const BOOT_LOGS = [
    '[ OK ] Initializing Secure Kernel...',
    '[ OK ] Loading Networking Protocols...',
    '[ OK ] Accessing Port 80/443...',
    '[ OK ] Authorization Verified...'
  ];

  let rowIndex = 0;
  let bootIndex = 0;

  function typeBootLogs() {
    if (bootIndex < BOOT_LOGS.length) {
      const row = document.createElement('div');
      row.classList.add('terminal__row');
      row.style.fontSize = 'var(--text-xs)';
      row.style.opacity = '0.5';
      row.textContent = BOOT_LOGS[bootIndex];
      container.appendChild(row);
      bootIndex++;
      setTimeout(typeBootLogs, 200);
    } else {
      setTimeout(showProgressBar, 400);
    }
  }

  function showProgressBar() {
    const row = document.createElement('div');
    row.classList.add('terminal__row');
    row.innerHTML = '<span class="terminal__key">PROG: [</span><span id="prog-bar"></span><span class="terminal__key">]</span>';
    container.appendChild(row);

    const bar = document.getElementById('prog-bar');
    let width = 0;
    const interval = setInterval(() => {
      if (width >= 20) {
        clearInterval(interval);
        setTimeout(() => {
          // Instead of disappearing, keep it as a 'completed' log
          row.style.opacity = '0.5';
          typeNextRow();
        }, 200);
      } else {
        bar.textContent += '#';
        width++;
      }
    }, 30);
  }

  function typeNextRow() {
    if (rowIndex >= ABOUT_DATA.length) {
      if (cursor) cursor.classList.add('visible');
      return;
    }

    const { key, val } = ABOUT_DATA[rowIndex];
    const row = document.createElement('div');
    row.classList.add('terminal__row');

    const keyEl = document.createElement('span');
    keyEl.classList.add('terminal__key');
    keyEl.textContent = key;
    row.appendChild(keyEl);

    const valEl = document.createElement('span');
    valEl.classList.add('terminal__val');
    row.appendChild(valEl);

    container.appendChild(row);

    let charIndex = 0;
    function typeChar() {
      if (charIndex < val.length) {
        valEl.textContent += val[charIndex];
        charIndex++;
        setTimeout(typeChar, 18);
      } else {
        rowIndex++;
        setTimeout(typeNextRow, 120);
      }
    }
    typeChar();
  }

  const terminalEl = document.getElementById('terminal-block');
  if (!terminalEl) { typeBootLogs(); return; }

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        typeBootLogs();
        observer.disconnect();
      }
    },
    { threshold: 0.4 }
  );

  observer.observe(terminalEl);
}
