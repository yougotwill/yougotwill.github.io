const loadTheme = () => {
  localStorage.getItem('theme')
    ? document.querySelector('body').classList.add('dark-theme')
    : document.querySelector('body').classList.remove('dark-theme');
};
if (typeof window !== 'undefined') {
  if (document.readyState !== 'loading') {
    loadTheme();
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      loadTheme();
    });
  }
}
