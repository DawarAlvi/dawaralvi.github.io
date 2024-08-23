import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiSolid,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPython,
  SiUnity,
  SiGodotengine
} from "react-icons/si";
export const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__intro">
        <div className="hero__info">
          <div className="hero__name">Dawar Alvi</div>
          <div className="hero__title">Software Engineer</div>
          <div className="cta">
            <a className="cta-1" href="mailto:contact.dawaralvi@gmail.com">
              Contact Me
            </a>
            <a
              className="cta-2"
              href="https://github.com/dawaralvi"
              target="_blank"
            >
              Github
            </a>
          </div>
        </div>
        <div className="hero__blurb">
          Hi, I'm Dawar Alvi. A passionate Developer with expertise in making
          interactive Web Apps with MERN stack and Realtime Graphics.
        </div>
      </div>
      <div className="hero__stack">
        <h2>My Tech Stack</h2>
        <div className="shrink-wrapper">
          <span><SiHtml5 />HTML</span>
          <span><SiCss3 />CSS</span>
          <span><SiJavascript />JavaScript</span>
          <span><SiTypescript />TypeScript</span>
          <span><SiReact />React</span>
          <span><SiSolid />Solid</span>
          <span><SiNodedotjs />Node</span>
          <span><SiExpress />Express</span>
          <span><SiMongodb />MongoDB</span>
          <span><SiPython />Python</span>
          <span><SiUnity />Unity</span>
          <span><SiGodotengine />Godot</span>
        </div>
      </div>
    </section>
  );
};
