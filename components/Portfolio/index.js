const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="projects">
        <h2>Portfolio</h2>
        <h3 className="special">Websites</h3>

        <div className="row">
          <div className="project-card col-2">
            <div className="avatar screenshot">
              <img
                src="https://raw.githubusercontent.com/yougotwill/motii/master/assets/desktop-light.png"
                width="100px"
                height="100px"
                alt="screenshot"
              />
            </div>
            <div className="details">
              <h3>motii</h3>
              <p>
                A motivational calendar built with React.js to help people form
                good habits with positive reinforcement.
              </p>
              <a
                className="special"
                href="https://github.com/yougotwill/motii"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Project
              </a>
            </div>
          </div>
          <div className="project-card col-2">
            <div className="avatar screenshot">
              <img
                src="https://raw.githubusercontent.com/yougotwill/phonics-esl/master/assets/desktop-light.png"
                width="100px"
                height="100px"
                alt="screenshot"
              />
            </div>
            <div className="details">
              <h3>Phonics ESL</h3>
              <p>
                A simple tool built in React.js with TailwindCSS to review
                English Phonics based on{' '}
                <a
                  className="special"
                  href="http://jollyreading.com/introduction-to-jolly-phonics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jolly Phonics
                </a>
                .
              </p>
              <a
                className="special"
                href="https://github.com/yougotwill/phonics-esl"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Project
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="project-card col-2">
            <div className="avatar screenshot">
              <img
                src="https://raw.githubusercontent.com/yougotwill/sortifiler/master/src/assets/screenshots/screenshot.png"
                width="100px"
                height="100px"
                alt="screenshot"
              />
            </div>
            <div className="details">
              <h3>Sortifiler Website</h3>
              <p>
                Sortifiler needed a landing page and I wanted to learn
                TailwindCSS and so this repo was born.
              </p>
              <a
                className="special"
                href="https://github.com/yougotwill/sortifiler"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Project
              </a>
            </div>
          </div>
          <div className="project-card col-2">
            <div className="avatar screenshot">
              <img
                src="https://raw.githubusercontent.com/yougotwill/art-gallery/master/assets/screenshots/screenshot-light-1.jpg"
                width="100px"
                height="100px"
                alt="screenshot"
              />
            </div>
            <div className="details">
              <h3>Art Gallery</h3>
              <p>
                A free to use website template for artists to showcase their
                portfolio on the web.
              </p>
              <a
                className="special"
                href="https://github.com/yougotwill/art-gallery"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Project
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="project-card col-2">
            <div className="avatar screenshot">
              <img
                src="/resources/images/screenshot.png"
                alt="screenshot"
                width="100px"
                height="53px"
              />
            </div>
            <div className="details">
              <h3>yougotwill.github.io</h3>
              <p>
                The source code for this website! Built with Next.js and SASS.
              </p>
              <a
                className="special"
                href="https://github.com/yougotwill/yougotwill.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Project
              </a>
            </div>
          </div>
          <div className="project-card col-2">
            <div className="avatar">
              <img
                src="https://raw.githubusercontent.com/yougotwill/todo-box/master/src/resources/todobox.png"
                alt="screenshot"
                width="100px"
                height="100px"
              />
            </div>
            <div className="details">
              <h3>Todo Box</h3>
              <p>
                A minimalist todo list app designed for you to get stuff done!
              </p>
              <a
                className="special"
                href="https://github.com/yougotwill/todo-box"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Project
              </a>
            </div>
          </div>
        </div>

        <h3 className="special">Apps / Games</h3>
        <div className="row">
          <div className="project-card col-2">
            <div className="avatar">
              <img
                src="/resources/ui/mystery.svg"
                alt="screenshot"
                width="100px"
                height="100px"
              />
            </div>
            <div className="details">
              <h3>Sortifiler Desktop</h3>
              <p>The desktop application to get your files sorted!</p>
              <span className="special">Coming Soon...</span>
            </div>
          </div>
          <div className="project-card col-2">
            <div className="avatar screenshot">
              <img
                src="https://raw.githubusercontent.com/yougotwill/Eden/masterFix/Main%20Menu.png"
                alt="screenshot"
                width="100px"
                height="100px"
              />
            </div>
            <div className="details">
              <h3>Eden's Odyssey</h3>
              <p>
                University Project: FPS & VR video game for use with Noitom
                Perception Neuron Motion Capture suit and Google Cardboard
              </p>
              <a
                className="special"
                href="https://github.com/yougotwill/Eden"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Project
              </a>
            </div>
          </div>
        </div>

        <h3 className="special">Open Source Contributions</h3>
        <div className="row">
          <div className="project-card col-2">
            <div className="avatar">
              <img
                src="https://raw.githubusercontent.com/BoostIO/Boostnote/master/resources/app.png"
                alt="screenshot"
                width="100px"
                height="100px"
              />
            </div>
            <div className="details">
              <h3>BoostNote</h3>
              <p>
                An open source markdown editor for Mac, Windows and Linux. The
                intuitive and stylish note taking tool for developers.
              </p>
              <a
                className="special"
                href="https://github.com/yougotwill/Boostnote"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Project
              </a>
            </div>
          </div>
          <div className="project-card col-2">
            <div className="avatar">
              <img
                src="https://raw.githubusercontent.com/dracula/coteditor/master/screenshot.png"
                alt="screenshot"
                width="100px"
                height="100px"
              />
            </div>
            <div className="details">
              <h3>Dracula</h3>
              <p>
                A dark theme for many editors, shells, and more. I have
                contributed the{' '}
                <a
                  className="special"
                  href="https://coteditor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CotEditor
                </a>{' '}
                theme.
              </p>
              <a
                className="special"
                href="https://github.com/yougotwill/dracula-coteditor"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Project
              </a>
            </div>
          </div>
        </div>

        <h3 className="special">Other Projects</h3>
        <div className="project-card">
          <div className="details no-image">
            <h3>Sortifiler CLI</h3>
            <p>
              An opinionated command line interface to sort your files and
              folders easily while feeling like{' '}
              <a
                className="special"
                href="https://knowyourmeme.com/memes/hackerman"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hackerman
              </a>
              .
            </p>
            <a
              className="special"
              href="https://github.com/yougotwill/sortifiler-cli"
              target="_blank"
              rel="noopener noreferrer"
            >
              See Project
            </a>
          </div>
        </div>
      </div>
      <div className="scroller">
        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
        </svg>
      </div>
    </section>
  );
};

export default Portfolio;
