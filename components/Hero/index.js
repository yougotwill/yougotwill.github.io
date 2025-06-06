const Hero = () => {
  return (
    <section id="#" className="hero">
      <div className="intro">
        <h1>
          Hello there{' '}
          <span role="img" alt="waving hand">
            👋
          </span>
        </h1>
        <h2>
          My name is <span className="special">William Grant</span> .
        </h2>
        <h2>
          The{' '}
          <span className="special">
            Ramen Enthusiast{' '}
            <span className="icon" role="img" aria-label="ramen bowl">
              🍜
            </span>
          </span>{' '}
          ,
        </h2>
        <h2>
          <span className="special">
            Web Developer{' '}
            <span className="icon" role="img" aria-label="programmer">
              👨‍💻
            </span>
          </span>{' '}
          ,
        </h2>
        <h2>
          <span className="special">
            Music Lover{' '}
            <span className="icon" role="img" aria-label="headphones">
              🎧
            </span>
          </span>{' '}
          ,
        </h2>
        <h3>... in no particular order .</h3>
      </div>
      <div id="about" className="scroller">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
