import { RxExternalLink } from "react-icons/rx";

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="wrapper">
        <h3 className="section-title">PROJECTS</h3>
        <div className="project-list">
          <div className="project">
            <img
              src="https://source.unsplash.com/random/?website&size=400x300"
              alt=""
            />
            <div>
              <h4>Encode Academy</h4>
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
