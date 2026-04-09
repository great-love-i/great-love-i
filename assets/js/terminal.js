/* Terminal Typewriter Effect */

const ABOUT_DATA = [
  { key: 'Name',        val: 'Sumit Sharma' },
  { key: 'Location',    val: 'Kathmandu, Nepal' },
  { key: 'Institution', val: 'Lincoln International College' },
  { key: 'Degree',      val: 'BCs. (Hons) Cyber Security & Networking' },
  { key: 'Semester',    val: '1st Semester' },
  { key: 'Goal',        val: 'Cybersecurity Professional' },
  { key: 'Stack',       val: 'C++   Python   C' },
  { key: 'Interests',   val: 'Anime   Manga   Trading' },
];

export function initTerminal() {
  const container = document.getElementById('terminal-rows');
  const cursor    = document.getElementById('terminal-cursor');
  if (!container) return;

  let rowIndex = 0;
  let charIndex = 0;

  function typeNextRow() {
    if (rowIndex >= ABOUT_DATA.length) {
      // Done — blink cursor forever
      if (cursor) cursor.style.display = 'inline-block';
      return;
    }

    const { key, val } = ABOUT_DATA[rowIndex];
    const row = document.createElement('div');
    row.classList.add('terminal__row');

    // Key element
    const keyEl = document.createElement('span');
    keyEl.classList.add('terminal__key');
    keyEl.textContent = key;
    row.appendChild(keyEl);

    // Value element — typed char by char
    const valEl = document.createElement('span');
    valEl.classList.add('terminal__val');
    row.appendChild(valEl);

    container.appendChild(row);

    charIndex = 0;

    function typeChar() {
      if (charIndex < val.length) {
        valEl.textContent += val[charIndex];
        charIndex++;
        setTimeout(typeChar, 18);
      } else {
        // Move to next row after a short pause
        rowIndex++;
        setTimeout(typeNextRow, 120);
      }
    }

    typeChar();
  }

  // Start typing when terminal enters viewport
  const terminalEl = document.getElementById('terminal-block');
  if (!terminalEl) { typeNextRow(); return; }

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        typeNextRow();
        observer.disconnect();
      }
    },
    { threshold: 0.4 }
  );

  observer.observe(terminalEl);
}
