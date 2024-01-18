import aboutImg from "../assets/img/about-img.png";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="wrapper">
        <div className="shrink-wrapper">
          <img alt="crypto" src={aboutImg} />
          <div>
            <h3 className="section-title">ABOUT ME</h3>
            <h2 className="about__title">
              Front-end Developer with a knack for clean design
            </h2>

            <p className="about__content">
              As a front-end developer I excel at creating seamless and
              intuitive and user experiences.
            </p>

            <p className="about__content">
              I love learning about technology and coming up with creative
              solutions to challenging problems.
            </p>

            <p className="about__content">
              Other than programming, I also love hiking, reading, creating art
              and retro gaming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
