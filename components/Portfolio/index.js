const Portfolio = () => {
  const projectsWebsites = [
    {
      name: 'motii',
      description: 'A motivational calendar built with React.js to help people form good habits with positive reinforcement.',
      sourceUrl: 'https://github.com/yougotwill/motii',
      actionText: 'Work in progress'
    },
    {
      name: 'Phonics ESL',
      description: 'A simple tool built in React.js with TailwindCSS to review English Phonics based on Jolly Phonics.',
      sourceUrl: 'https://github.com/yougotwill/phonics-esl',
      liveUrl: 'https://yougotwill.github.io/phonics-esl',
      actionText: 'View Online'
    },
    {
      name: 'Sortifiler Website',
      description: 'Sortifiler needed a landing page and I wanted to learn TailwindCSS and so this repo was born.',
      sourceUrl: 'https://github.com/yougotwill/sortifiler',
      liveUrl: 'https://yougotwill.github.io/sortifiler',
      actionText: 'View Online'
    },
    {
      name: 'Art Gallery',
      description: 'A free to use website template for artists to showcase their portfolio on the web.',
      sourceUrl: 'https://github.com/yougotwill/art-gallery',
      liveUrl: 'https://yougotwill.github.io/art-gallery',
      actionText: 'View Online'
    },
    {
      name: 'yougotwill.github.io',
      description: 'The source code for this website! Built for beginner developers and easy to use.',
      sourceUrl: 'https://github.com/yougotwill/yougotwill.github.io',
      actionText: 'You are here!'
    },
    {
      name: 'Todo Box',
      description: 'A minimalist todo list app designed for you to get stuff done!',
      sourceUrl: 'https://github.com/yougotwill/todo-box',
      liveUrl: 'https://yougotwill.github.io/todo-box',
      actionText: 'View Online'
    }
  ];
  const projectsApps = [
    {
      name: 'Sortifiler Desktop',
      description: 'The desktop application to get your files sorted!',
      sourceUrl: 'https://github.com/yougotwill/todo-box',
      liveUrl: 'https://yougotwill.github.io/todo-box',
      actionText: 'Coming Soon...'
    },
    {
      name: 'Eden\'s Odyssey',
      description: 'University Project: FPS & VR video game for use with Noitom Perception Neuron Motion Capture suit and Google Cardboard.',
      sourceUrl: 'https://github.com/yougotwill/Eden'
    }
  ];
  const projectsOpenSource = [
    {
      name: 'BoostNote',
      description: 'An open source markdown editor for Mac, Windows and Linux. The intuitive and stylish note taking tool for developers.',
      sourceUrl: 'https://github.com/yougotwill/Boostnote',
    },
    {
      name: 'Dracula',
      description: 'A dark theme for many editors, shells, and more. I have contributed the CotEditor theme.',
      sourceUrl: 'https://github.com/yougotwill/dracula-coteditor',
    }
  ];
  const projectsOther = [
    {
      name: 'Sortifiler CLI',
      description: 'An opinionated command line interface to sort your files and folders easily while feeling like Hackerman.',
      sourceUrl: 'https://github.com/yougotwill/sortifiler-cli',
    }
  ];
  return (
    <section id="portfolio" className="divide">
      <div className="projects">
        <h2 className="heading">Portfolio</h2>
        <h3 className="heading">Websites</h3>

      <div className="row">
        <div className="project-card col-2">
          <div className="avatar screenshot">
            <img src="https://raw.githubusercontent.com/yougotwill/motii/master/assets/desktop-light.png" alt="screenshot"/>
          </div>
          <div className="details">
            <h3>motii</h3>
            <p>A motivational calendar built with React.js to help people form good habits with positive reinforcement.</p>
            <a href="https://github.com/yougotwill/motii" target="_blank" rel="noopener noreferrer">Go to project</a> | <b> Work in progress</b>
          </div>
        </div>
        <div className="project-card col-2">
          <div className="avatar screenshot">
            <img src="https://raw.githubusercontent.com/yougotwill/phonics-esl/master/assets/desktop-light.png" alt="screenshot"/>
          </div>
          <div className="details">
            <h3>Phonics ESL</h3>
            <p>A simple tool built in React.js with TailwindCSS to review English Phonics based on <a href="http://jollyreading.com/introduction-to-jolly-phonics" target="_blank" rel="noopener noreferrer">Jolly Phonics</a>.</p>
            <a href="https://github.com/yougotwill/phonics-esl" target="_blank" rel="noopener noreferrer">Go to project</a>
            <a href="https://yougotwill.github.io/phonics-esl" target="_blank" rel="noopener noreferrer"> | View online</a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="project-card col-2">
          <div className="avatar screenshot">
            <img src="https://raw.githubusercontent.com/yougotwill/sortifiler/master/src/assets/screenshots/screenshot.png" alt="screenshot"/>
          </div>
          <div className="details">
            <h3>Sortifiler Website</h3>
            <p>Sortifiler needed a landing page and I wanted to learn TailwindCSS and so this repo was born.</p>
            <a href="https://github.com/yougotwill/sortifiler" target="_blank" rel="noopener noreferrer">Go to project</a>
            <a href="https://yougotwill.github.io/sortifiler" target="_blank" rel="noopener noreferrer"> | View online</a>
          </div>
        </div>
        <div className="project-card col-2">
          <div className="avatar screenshot">
            <img src="https://raw.githubusercontent.com/yougotwill/art-gallery/master/assets/screenshots/screenshot-light-1.jpg" alt="screenshot"/>
          </div>
          <div className="details">
            <h3>Art Gallery</h3>
            <p>A free to use website template for artists to showcase their portfolio on the web.</p>
            <a href="https://github.com/yougotwill/art-gallery" target="_blank" rel="noopener noreferrer">Go to project</a>
            <a href="https://yougotwill.github.io/art-gallery" target="_blank" rel="noopener noreferrer"> | View online</a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="project-card col-2">
          <div className="avatar screenshot">
            <img src='/resources/images/screenshot-dark.png' alt="screenshot"/>
          </div>
          <div className="details">
            <h3>yougotwill.github.io</h3>
            <p>The source code for this website! Built for beginner developers and easy to use.</p>
            <a href="https://github.com/yougotwill/yougotwill.github.io" target="_blank" rel="noopener noreferrer">Go to project</a>
            <span className="special"> | You are here!</span>
          </div>
        </div>
        <div className="project-card col-2">
          <div className="avatar">
            <img src="https://raw.githubusercontent.com/yougotwill/todo-box/master/src/resources/todobox.png" alt="screenshot"/>
          </div>
          <div className="details">
            <h3>Todo Box</h3>
            <p>A minimalist todo list app designed for you to get stuff done!</p>
            <a href="https://github.com/yougotwill/todo-box" target="_blank" rel="noopener noreferrer">Go to project</a>
            <a href="https://yougotwill.github.io/todo-box" target="_blank" rel="noopener noreferrer"> | View online</a>
          </div>
        </div>
      </div>

      <h3 className="heading">Apps / Games</h3>
      <div className="row">
        <div className="project-card col-2">
          <div className="avatar">
            <img src='/resources/ui/mystery.svg' alt="screenshot"/>
          </div>
          <div className="details">
            <h3>Sortifiler Desktop</h3>
            <p>The desktop application to get your files sorted!</p>
            <span className="special">Coming Soon...</span>
          </div>
        </div>
        <div className="project-card col-2">
          <div className="avatar screenshot">
            <img src="https://raw.githubusercontent.com/yougotwill/Eden/masterFix/Main%20Menu.png" alt="screenshot"/>
          </div>
          <div className="details">
            <h3>Eden's Odyssey</h3>
            <p>University Project: FPS & VR video game for use with Noitom Perception Neuron Motion Capture suit and Google Cardboard</p>
            <a href="https://github.com/yougotwill/Eden" target="_blank" rel="noopener noreferrer">Go to project</a>
          </div>
        </div>
      </div>

      <h3 className="heading">Open Source Contributions</h3>
      <div className="row">
        <div className="project-card col-2">
          <div className="avatar">
            <img src="https://raw.githubusercontent.com/BoostIO/Boostnote/master/resources/app.png" alt="screenshot"/>
          </div>
          <div className="details">
            <h3>BoostNote</h3>
            <p>An open source markdown editor for Mac, Windows and Linux. The intuitive and stylish note taking tool for developers.</p>
            <a href="https://github.com/yougotwill/Boostnote" target="_blank" rel="noopener noreferrer">Go to project</a>
          </div>
        </div>
        <div className="project-card col-2">
          <div className="avatar">
            <img src="https://raw.githubusercontent.com/dracula/coteditor/master/screenshot.png" alt="screenshot"/>
          </div>
          <div className="details">
            <h3>Dracula</h3>
            <p>A dark theme for many editors, shells, and more. I have contributed the <a href="https://coteditor.com" target="_blank" rel="noopener noreferrer">CotEditor</a> theme.</p>
            <a href="https://github.com/yougotwill/dracula-coteditor" target="_blank" rel="noopener noreferrer">Go to project</a>
          </div>
        </div>
      </div>

      <h3 className="heading">Other Projects</h3>
      <div className="project-card">
        <div className="details no-image">
          <h3>Sortifiler CLI</h3>
          <p>An opinionated command line interface to sort your files and folders easily while feeling like <a href="https://knowyourmeme.com/memes/hackerman" target="_blank" rel="noopener noreferrer">Hackerman</a>.</p>
          <a href="https://github.com/yougotwill/sortifiler-cli" target="_blank" rel="noopener noreferrer">Go to project</a>
        </div>
      </div>

    </div>
  </section>
  );
};

export default Portfolio;
