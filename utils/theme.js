if (typeof window !== "undefined") {
  document.addEventListener('DOMContentLoaded', function () {
    localStorage.getItem('theme')
      ? document.querySelector('body').classList.add('dark-theme')
      : document.querySelector('body').classList.remove('dark-theme');
  });
};
