import React from "react";
import "./Timeline.css";

export default function Timeline() {
  return (
    <div className="timeline-wrapper">
      <div className="timeline">
        <div className="timeline-body">
          <div class="timeline-item">
            <p className="time">2020-2020</p>
            <div className="content">
              <p className="title">Informal School of IT</p>
              <p className="study-location">Cluj Napoca</p>
              <p data-aos="fade-right">Front-end Developer Course</p>
            </div>
          </div>
          <div class="timeline-item">
            <p className="time">2014-2019 </p>
            <div className="content">
              <p className="title">
                University of Medicine, Pharmacy, Science and Tehnology G.E.
                Palade
              </p>
              <p className="study-location">Tg. Mures</p>
              <p data-aos="fade-right">Licensed in Pharmacy</p>
            </div>
          </div>
          <div class="timeline-item">
            <p className="time">2010-2014</p>
            <div className="content">
              <p className="title">Alexandru Papiu Ilarian Highschool</p>
              <p className="study-location">Tg. Mures</p>
              <p data-aos="fade-right">Nature's science profile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
