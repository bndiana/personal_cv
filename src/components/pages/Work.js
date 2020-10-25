import React from "react";
import "./Work.css";
import backgroundProject from "../imgs/project.png";
import comingSoon from "../imgs/comingsoon.jpg";
import Card from "../utils/Card";

export const Work = () => {
  return (
    <div data-aos="fade-up" className="work-page" id="work">
      <div className="work-page-title">My Work</div>
      <Card
        projectBackground={backgroundProject}
        projectTitle="Movie and Chill"
        projectGitUrl="https://github.com/bndiana/movieandchill"
        projectUrl="http://movie-and-chill.s3-website.eu-central-1.amazonaws.com/"
      />
      <Card
        projectBackground={comingSoon}
        projectTitle="New app"
        projectGitUrl="https://github.com/bndiana"
        projectUrl="https://www.google.com"
      />
    </div>
  );
};
export default Work;
