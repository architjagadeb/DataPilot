// mode-toggle.js: Modular, non-intrusive light/dark mode toggle
(function() {
  // Create toggle button if not present
  if (!document.getElementById('mode-toggle-btn')) {
    const btn = document.createElement('button');
    btn.id = 'mode-toggle-btn';
    btn.type = 'button';
    btn.title = 'Toggle light/dark mode';
    btn.setAttribute('aria-label', 'Toggle light/dark mode');
    btn.innerHTML = '<span class="mode-icon">🌙</span>';
    document.body.appendChild(btn);
  }
  const btn = document.getElementById('mode-toggle-btn');
  const icon = btn.querySelector('.mode-icon');

  function setMode(mode) {
    if (mode === 'light') {
      document.body.classList.add('light-mode');
      icon.textContent = '☀️';
    } else {
      document.body.classList.remove('light-mode');
      icon.textContent = '🌙';
    }
  }
  function getSavedMode() {
    return localStorage.getItem('dp-color-mode');
  }
  function saveMode(mode) {
    localStorage.setItem('dp-color-mode', mode);
  }
  btn.addEventListener('click', function() {
    const isLight = !document.body.classList.contains('light-mode');
    setMode(isLight ? 'light' : 'dark');
    saveMode(isLight ? 'light' : 'dark');
  });
  // On load, set mode from localStorage
  const saved = getSavedMode();
  if (saved === 'light') setMode('light');
  else setMode('dark');
})(); 