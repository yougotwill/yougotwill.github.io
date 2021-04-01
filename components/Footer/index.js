const Footer = () => {
  return (
    <footer>
        <span className="built-with">Built with <span role='img' aria-label='coffee cup'>☕️</span> and <span role='img' aria-label='heart'>❤️</span></span>
        <span className="banner">Project of the Day: <a href="https://motii.netlify.app" target="_blank" rel="noopener noreferrer">motii</a></span>
        <div>
          <a href="https://drive.google.com/file/d/1FpGmgjNU0zxcZ6B9JhdeffmCqU2iaPLv/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="tooltip"><span className="tooltip-contents bounce">See my resume</span><img src='/resources/ui/cv.svg' className="icon" alt="CV" /></a>
          <a href="mailto:yougotwill94@gmail.com" target="_blank" rel="noopener noreferrer"><img src='/resources/ui/email.svg' className="icon" alt="Email" /></a>
          <a href="https://instagram.com/yougotwill" target="_blank" rel="noopener noreferrer"><img src='/resources/ui/instagram.svg' className="icon" alt="Instagram" /></a>
          <a href="https://github.com/yougotwill" target="_blank" rel="noopener noreferrer"><img src='/resources/ui/github.svg' className="icon" alt="GitHub" /></a>
          <a href="https://www.linkedin.com/in/yougotwill/" target="_blank" rel="noopener noreferrer"><img src='/resources/ui/linkedin.svg' className="icon" alt="LinkedIn" /></a>
          <a href="https://dev.to/yougotwill/" target="_blank" rel="noopener noreferrer"><img src='/resources/ui/devto.svg' className="icon" alt="DevTo" /></a>
        </div>
      </footer>
  );
};

export default Footer;
