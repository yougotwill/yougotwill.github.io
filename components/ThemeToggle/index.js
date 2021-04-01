// TODO upgrade
const ThemeToggle = () => {
  const toggleTheme = () => {
    localStorage.getItem('theme') ? localStorage.removeItem('theme') : localStorage.setItem('theme', 'dark');
    document.querySelector('body').classList.toggle('dark-theme')
  };
  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <img src='/resources/ui/theme-light.svg' alt='sun' className="light" />
      <img src='/resources/ui/theme-dark.svg' alt='moon' className="dark" />
    </div>
  );
};

export default ThemeToggle;
