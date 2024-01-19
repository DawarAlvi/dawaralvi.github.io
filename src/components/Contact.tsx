import { FiLinkedin } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="wrapper">
        <div className="shrink-wrapper">
          <a href="https://linkedin.com/in/dawaralvi" target="_blank">
            <FiLinkedin />
            LinkedIn
          </a>
          <a href="mailto:contact.dawaralvi@gmail.com">
            <FiMail />
            Email
          </a>
          <a href="https://github.com/dawaralvi" target="_blank">
            <FiGithub />
            Github
          </a>
        </div>
      </div>
    </section>
  );
};
