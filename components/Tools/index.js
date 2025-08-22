import { SKILLS } from 'lib/constants';
import ResumeSVG from 'public/resources/ui/cv.svg';

const Tools = () => {
  return (
    <section className="tools">
      <h2>
        My Tools{' '}
        <span role="img" alt="toolbox">
          🧰
        </span>
      </h2>
      <div className="info">
        <div className="skills">
          {SKILLS.map((skill) => {
            return (
              <div key={skill.src} className="skill">
                <img
                  src={skill.src}
                  alt={skill.alt}
                  width="48px"
                  height="48px"
                />
                <p>{skill.name}</p>
              </div>
            );
          })}
          <a
            href="https://drive.google.com/file/d/12aE7Z6JQOzLrjgR7T251Cmo-77n4EaDR/view?usp=sharing"
            title="Resume"
            className="skill"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ResumeSVG width="48px" height="48px" aria-label="Resume" />
            <p>See more</p>
          </a>
        </div>
      </div>
      <div className="scroller">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
        </svg>
      </div>
    </section>
  );
};

export default Tools;
