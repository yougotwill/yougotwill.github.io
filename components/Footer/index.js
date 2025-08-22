import ResumeSVG from 'public/resources/ui/cv.svg';
import DevtoSVG from 'public/resources/ui/devto.svg';
import EmailSVG from 'public/resources/ui/email.svg';
import GithubSVG from 'public/resources/ui/github.svg';
import InstagramSVG from 'public/resources/ui/instagram.svg';
import LinkedinSVG from 'public/resources/ui/linkedin.svg';
import TwitterSVG from 'public/resources/ui/twitter.svg';

const Footer = () => {
  return (
    <footer>
      <span className="built-with">
        Built with{' '}
        <span role="img" aria-label="coffee cup">
          ☕️
        </span>{' '}
        and{' '}
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </span>
      <div>
        <a
          href="mailto:hi@yougotwill.com"
          title="Email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailSVG className="icon" aria-label="Email" />
        </a>
        <a
          href="https://instagram.com/yougotwill"
          title="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramSVG className="icon" aria-label="Instagram" />
        </a>
        <a
          href="https://twitter.com/yougotwill"
          title="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterSVG className="icon" aria-label="Twitter" />
        </a>
        <a
          href="https://github.com/yougotwill"
          title="GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubSVG className="icon" aria-label="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/yougotwill/"
          title="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinSVG className="icon" aria-label="LinkedIn" />
        </a>
        <a
          href="https://dev.to/yougotwill/"
          title="DevTo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DevtoSVG className="icon" aria-label="DevTo" />
        </a>
        <a
          href="https://drive.google.com/file/d/12aE7Z6JQOzLrjgR7T251Cmo-77n4EaDR/view?usp=sharing"
          title="Resume"
          className="skill"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ResumeSVG className="icon" aria-label="Resume" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
