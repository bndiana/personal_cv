import React, { useEffect } from "react";
import "./Skills.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Typical from "react-typical";

export const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="skills-page" id="skills">
      <div className="skills-title-container">
        <h1 data-aos="fade-up" className="skills-main-title">
          My Knowledge
        </h1>
      </div>

      <div data-aos="zoom-in" className="skills-icons-container">
        <ul id="skill-icons">
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
              <i className="fab fa-html5 fa-5x"></i>
            </a>
          </li>
          <li>
            <a class="navtext" href="https://www.w3schools.com/css/">
              <i className="fab fa-css3 fa-5x"></i>
            </a>
          </li>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
              <i className="fab fa-js-square fa-5x"></i>
            </a>
          </li>
          <li>
            <a href="https://reactjs.org/">
              <i class="fab fa-react fa-5x"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/">
              <i className="fab fa-github-square fa-5x"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="skills-typical-container">
        <Typical
          className="auto-type-skills"
          steps={["HTML 5", 1000]}
          loop={Infinity}
          wrapper="p"
        />
        <Typical
          className="auto-type-skills"
          steps={["CSS", 1000]}
          loop={Infinity}
          wrapper="p"
        />
        <Typical
          className="auto-type-skills"
          steps={["JavaScript", 1000]}
          loop={Infinity}
          wrapper="p"
        />
        <Typical
          className="auto-type-skills"
          steps={["REACT", 1000]}
          loop={Infinity}
          wrapper="p"
        />
        <Typical
          className="auto-type-skills"
          steps={["Git", 1000]}
          loop={Infinity}
          wrapper="p"
        />
      </div>
    </div>
  );
};
export default Skills;
