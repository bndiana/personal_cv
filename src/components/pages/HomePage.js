import React from "react";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="home-page" id="home">
      <div className="home-page-wrapper">
        <div className="title-wrapper">
          <h2 data-aos="fade-down" className="title1">
            Hi, my name is
          </h2>
          <h1 data-aos="zoom-in-up" className="title2">
            Diana Brihan
          </h1>
        </div>
        <div className="media-items-home-page">
          <div className="home-icons">
            <a
              href="https://github.com/bndiana?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-3x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/diana-brihan-65617819b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
            <a
              href="https://www.facebook.com/brihan.diana"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook fa-3x"></i>
            </a>
            <a
              href="https://www.instagram.com/brihandiana/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram fa-3x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
