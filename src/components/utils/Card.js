import React, { useEffect } from "react";
import "./Card.css";
import Aos from "aos";
import "aos/dist/aos.css";

const goToUrl = (e, url) => {
  e.stopPropagation();
  window.open(url, "mywindow");
};

function Card(props) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="card-container">
        <div className="card-photo">
          <img id="img" src={props.projectBackground} alt="alt" />
          <div
            className="img-overlay image-overlay-blur"
            onClick={(e) => goToUrl(e, props.projectUrl)}
          >
            <p className="card-title">{props.projectTitle}</p>
            <div
              className="card-git-source"
              onClick={(e) => goToUrl(e, props.projectGitUrl)}
            >
              <i className="fab fa-github fa-3x"></i>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Card;
