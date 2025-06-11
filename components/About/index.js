const About = () => {
  return (
    <section className="about">
      <h2>
        My Story{' '}
        <span role="img" alt="open book">
          📖
        </span>
      </h2>
      <div className="details">
        <div className="avatar">
          <img
            src="/resources/images/avatar.png"
            alt="man with a brown beard in an 8bit art style"
            width="512px"
            height="512px"
            loading="lazy"
          />
        </div>
        <div className="story">
          <p>
            When I was young, over the weekend I loved to visit the Apple Store.
            I adored how beautiful and clean everything looked - right down to
            the packaging. That was my first introduction into the tech world.
          </p>

          <p>
            At university, I working on various projects related to internet
            security, artificial intelligence & video games while searching for
            what best fit my skills & interests.
          </p>

          <p>
            As web technologies evolved and became integral to daily life, I
            realised I had a good eye for what made products{' '}
            <a
              className="special"
              href="https://giphy.com/gifs/handsome-will-smith-men-in-black-jUr6ul7c26FYA/fullscreen"
              target="_blank"
            >
              "look good"
            </a>{' '}
            and my obsession with front-end development was born!
          </p>

          <p>
            Now, I am a Senior Frontend Engineer experienced in Next.js,
            React.js, Electron.js, and TypeScript. Most recently I played a key
            role on the{' '}
            <a
              className="special bordered"
              href="https://getsession.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Session Messenger
            </a>{' '}
            Desktop Team. My work covers messaging and web3 applications,
            company websites, and full-stack solutions.
          </p>

          <p className="resume">
            Beyond coding, I enjoy listening to music, reading, studying
            Japanese and trying out new coffee shops. If you'd like to learn
            more about my journey and skills, please check out my full{' '}
            <a
              className="special bordered"
              href="https://drive.proton.me/urls/38K0G4YCJM#JgBW2n9dtE8X"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>
            .
          </p>
        </div>
      </div>
      <div id="tools" className="scroller">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
        </svg>
      </div>
    </section>
  );
};

export default About;
