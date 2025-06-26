document.getElementById('themeToggle').addEventListener('click', () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);
  document.getElementById('themeToggle').textContent = newTheme === 'dark' ? '☀️' : '🌙';
});
