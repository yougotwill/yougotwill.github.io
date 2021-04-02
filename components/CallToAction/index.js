const CallToAction = () => {
  return (
    <section id="cta" className="divide">
      <div className="call-to-action">
        <h2>Want to have a chat?</h2>
        <p>Feel free to contact me for any kind of inquiries.</p>
        <a href="mailto:yougotwill94@gmail.com" target="_blank" rel="noopener noreferrer">Send an email <img src='/resources/ui/email.svg' width='24px' height='24px' className="icon" alt="Email" /></a>
        <a href="https://www.linkedin.com/in/yougotwill/" target="_blank" rel="noopener noreferrer">Connect on <img src='/resources/ui/linkedin.svg' width='24px' height='24px' className="icon" alt="LinkedIn" /></a>
      </div>
    </section>
  );
};

export default CallToAction;
