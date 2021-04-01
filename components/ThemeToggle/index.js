// TODO upgrade
const ThemeToggle = () => {
  const clickHandler = () => {
    localStorage.setItem('mode',
      (localStorage.getItem('mode') || 'dark-theme') === 'dark-theme'
      ? 'light-theme'
      : 'dark-theme');
    localStorage.getItem('mode') === 'dark-theme'
      ? document.querySelector('body').classList.add('dark-theme')
      : document.querySelector('body').classList.remove('dark-theme');
  };
  return (
    <div className="theme-toggle" onClick={clickHandler}>
      <img src='/resources/ui/theme-light.svg' alt='sun' className="light" />
      <img src='/resources/ui/theme-dark.svg' alt='moon' className="dark" />
    </div>
  );
};

export default ThemeToggle;
