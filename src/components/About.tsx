export const About = () => {
  return (
    <section className="about">
      <div className="wrapper">
        <div className="shrink-wrapper">
          <img
            alt="crypto"
            src="https://source.unsplash.com/random/?computer&1"
          />
          <div>
            <span className="about__about-me">ABOUT ME</span>
            <h2 className="about__title">
              Front-end Developer with a knack for design
            </h2>

            <p className="about__content">
              I love learning about technology and coming up with creative
              solutions to difficult problems.
            </p>

            <p className="about__content">
              My hobbies include hiking, reading, art and gaming. Story driven
              games that inspire and appeal to one's innate curiosity like Outer
              Wilds, Journey and The Witness are my favourite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
