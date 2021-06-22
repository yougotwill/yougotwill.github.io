import EmailSVG from 'public/resources/ui/email.svg';
import LinkedinSVG from 'public/resources/ui/linkedin.svg'; 

const CallToAction = () => {
  return (
    <section id="cta" className="divide">
      <div className="call-to-action">
        <h2>Want to have a chat?</h2>
        <p>Feel free to contact me for any kind of inquiries.</p>
        <a className='special' href="mailto:yougotwill94@gmail.com" title="Email" target="_blank" rel="noopener noreferrer">
          Send an <EmailSVG className="icon" aria-label="Email" />
        </a>
        <a className='special' href="https://www.linkedin.com/in/yougotwill/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
          Connect on <LinkedinSVG className="icon" aria-label="LinkedIn" />
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
