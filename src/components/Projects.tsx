import { RxExternalLink } from "react-icons/rx";

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="wrapper">
        <h3 className="section-title">FEATURED PROJECTS</h3>
        <div className="project-list">
          <div className="project">
            <img src="./assets/img/encode-academy.png" alt="" />
            <div className="project__info">
              <h4 className="project__name">Encode Academy</h4>
              <p>
                Encode Academy is an online learning platform where the users
                can enroll in courses and learn from a variety of topics.
              </p>
              <div className="tags">
                <span>React</span>
                <span>JavaScript</span>
              </div>
              <div className="links">
                <a href="https://encodeacademy.dev" target="_blank">
                  Live Demo <RxExternalLink />
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <img src="./assets/img/encode-academy.png" alt="" />
            <div className="project__info">
              <h4 className="project__name">Encode Academy</h4>
              <p>
                Encode Academy is an online learning platform where the users
                can enroll in courses and learn from a variety of topics.
              </p>
              <div className="tags">
                <span>React</span>
                <span>JavaScript</span>
              </div>
              <div className="links">
                <a href="https://encodeacademy.dev" target="_blank">
                  Live Demo <RxExternalLink />
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <img src="./assets/img/encode-academy.png" alt="" />
            <div className="project__info">
              <h4 className="project__name">Encode Academy</h4>
              <p>
                Encode Academy is an online learning platform where the users
                can enroll in courses and learn from a variety of topics.
              </p>
              <div className="tags">
                <span>React</span>
              </div>
              <div className="links">
                <a href="https://encodeacademy.dev" target="_blank">
                  Live Demo <RxExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
