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
            alt="avatar"
            width="512px"
            height="512px"
            loading="lazy"
          />
        </div>
        <div className="story">
          <p>
            When I was young, on my weekends I loved looking at Apple products
            in the iStore. I adored how beautiful and clean everything looked -
            right down to the boxes. That was my first introduction into the
            tech world.
          </p>

          <p>
            At university, I working on various projects related to internet
            security, artificial intelligence & video games while searching for
            what best fit my skills & interests.
          </p>

          <p>
            As the internet continued to grow and new web technologies started
            to become a part of our daily lives, I realised I had a good eye for
            what made products{' '}
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
            Now I'm an aspiring web developer focusing on front-end. My other
            interests are reading, listening to music, studying Japanese, and
            going on walks (usually to coffee shops or museums).
          </p>

          <p className="resume">
            If you want to learn more about me check out my{' '}
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
