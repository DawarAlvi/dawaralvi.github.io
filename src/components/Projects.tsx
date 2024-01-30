import { RxExternalLink } from "react-icons/rx";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="wrapper">
        <h3 className="section-title">FEATURED PROJECTS</h3>
        <div className="project-list">
          <div className="project">
            <Carousel
              showArrows={true}
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
            >
              <div>
                <img src="./assets/img/projects/encode-academy-1.png" />
              </div>
              <div>
                <img src="./assets/img/projects/encode-academy-2.png" />
              </div>
            </Carousel>
            <div className="project__info">
              <h4 className="project__name">Encode Academy</h4>
              <p>
                Encode Academy is an online learning platform where the users
                can enroll in courses and learn from a variety of topics.
              </p>
              <div className="tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>Node.js</span>
              </div>
              <div className="links">
                <a href="https://encodeacademy.dev" target="_blank">
                  Live Demo <RxExternalLink />
                </a>
              </div>
            </div>
          </div>

          <div className="project">
            <Carousel
              showArrows={true}
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
            >
              <div>
                <img src="./assets/img/projects/ut-1.png" />
              </div>

            </Carousel>
            <div className="project__info">
              <h4 className="project__name">Ultratech Online Platform</h4>
              <p>
              Ultratech Online Platform, your gateway to a seamless digital experience. Elevate your online presence with cutting-edge technologies, robust security features, and a user-friendly interface.
              </p>
              <div className="tags">
                <span>React</span>
                <span>Node.js</span>
                <span>Tailwind</span>
              </div>
            </div>
          </div>

          <div className="project">
            <Carousel
              showArrows={true}
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
            >
              <div>
                <img src="./assets/img/projects/iijs-1.png" />
              </div>
              <div>
                <img src="./assets/img/projects/iijs-2.png" />
              </div>
              <div>
                <img src="./assets/img/projects/iijs-3.png" />
              </div>
              <div>
                <img src="./assets/img/projects/iijs-4.png" />
              </div>
            </Carousel>
            <div className="project__info">
              <h4 className="project__name">IIJS Virtual Exhibition</h4>
              <p>
                The virtual mega show- India International Jewellery Show (IIJS)
                Virtual 2020, organised by the Gem & Jewellery Export Promotion
                Council (GJEPC), apex body for the Gem & Jewellery Trade in
                India, sponsored by Ministry of Commerce & Industry, Government
                of India.
              </p>
              <div className="tags">
                <span>React</span>
                <span>Firebase</span>
                <span>ThreeJs</span>
              </div>
              <div className="links"></div>
            </div>
          </div>

          <div className="project">
            <Carousel
              showArrows={true}
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
            >
              <div>
                <img src="./assets/img/projects/hero-1.png" />
              </div>
              <div>
                <img src="./assets/img/projects/hero-2.png" />
              </div>
              <div>
                <img src="./assets/img/projects/hero-3.png" />
              </div>
            </Carousel>
            <div className="project__info">
              <h4 className="project__name">Hero AI Onboarding App</h4>
              <p>
                AI Onboarding App presented at showrooms that estimated user's
                age and gender from their photo by utilizing an AI service. And
                suggested a bike based on their preferences.
              </p>

              <div className="tags">
                <span>Unity</span>
                <span>Microsoft Azure Cloud</span>
              </div>
              <div className="links"></div>
            </div>
          </div>

          <div className="project">
            <Carousel
              showArrows={true}
              autoPlay={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
            >
              <div>
                <img src="./assets/img/projects/amiga-1.jpeg" />
              </div>
              <div>
                <img src="./assets/img/projects/amiga-2.png" />
              </div>
              <div>
                <img src="./assets/img/projects/amiga-3.png" />
              </div>
            </Carousel>
            <div className="project__info">
              <h4 className="project__name">Amiga Montessori Learning AR/VR</h4>
              <p>
                Educational Games for Amiga Montessori Australia. Mobile, AR/VR,
                and WebGL
              </p>
              <p>
                Bringing real life, physical games that are taught and played at
                Animga Montessori Australia, into the digital world.
              </p>

              <div className="tags">
                <span>Unity</span>
                <span>Socket.io</span>
                <span>React</span>
              </div>
              <div className="links"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
