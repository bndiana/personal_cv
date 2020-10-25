import React, { useEffect } from "react";
import "./AboutPage.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Timeline from "../utils/Timeline";
import ButtonReuse from "../utils/ButtonReuse";

export const AboutPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const downloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1hUKD5hMUeFl5GcCYWPMhG7xj2KVBLNdU/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className="about-page" id="about">
      <div className="about-page-title">About me</div>
      <div className="short-desc-container">
        <div className="profile-picture-container">
          <img
            data-aos="zoom-in"
            className="profile-picture"
            src={require("../imgs/profilepic.JPG")}
            alt="profilepic"
          />
        </div>

        <div className="short-desc" data-aos="zoom-out">
          <div>
            <span className="span1"> Hello.</span>{" "}
          </div>
          <div>
            My name is <span className="span2">Diana</span> and I'm a freshly
            new <span className="span3">junior front-end developer</span>.
          </div>
          <div>
            I'm currently a beginner, but I'm eager to learn new things everyday
            and develop my skills.
          </div>
          <div>
            I'm a sociable, hardworking, open-minded person who knows to work
            well against deadlines.
          </div>
        </div>
      </div>

      <div className="about-me">
        {/*using typical npm
         <h1 className="hobbies">
          My hobbies are{" "}
          <span className="hobbies-typical">
            {" "}
            <Typical
              className="auto-type"
              steps={[
                "travelling ",
                1500,
                "photography",
                1000,
                "going to the gym",
                1500,
                "baking",
                1000,
              ]}
              loop={Infinity}
              wrapper="b"
            />
          </span>
        </h1> */}
        <div className="education">
          <Timeline />
        </div>
        <div className="work-experience-wrapper">
          <div className="work-experience">
            <h2 data-aos="flip-left" className="work-experience-title">
              Work experience
            </h2>
            <div className="work-experience-1">
              <h3> Resident Pharmacist Spitalul Clinic Judetean </h3>
              <p>| Feb 2020 - present</p>
              <br />
              <p>
                Broadening my knowledge about pharmaceutic products Quality
                Control
              </p>
            </div>

            <div className="work-experience-2">
              <h3>Analyst Sandoz SA </h3>
              <p>| Nov 2019 - Feb 2020 </p>
              <br />
              <p> Product quality release testing by HPLC, UPLC +UV/VIS</p>
              <p>
                Ensuring completion of testing specifications and related
                documentation
              </p>
            </div>
          </div>
          <div className="work-resume">
            <ButtonReuse className="button-resume" action={downloadResume}>
              Download Resume
            </ButtonReuse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
