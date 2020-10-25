import React from "react";
import "./Contact.css";
import ContactForm from "../utils/ContactForm";
import { IoMdPaperPlane } from "react-icons/io";
import Particles from "react-particles-js";

export const Contact = () => {
  return (
    <div className="contact-page" id="contact">
      <Particles
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <div className="contact-section">
        <div className="main-title-container">
          <h1 data-aos="fade-up" className="main-title">
            <IoMdPaperPlane className="fIoMdPaperPlane" />
            Contact Me
          </h1>
        </div>

        <div className="location-container">
          <div className="h-left">
            <div data-aos="fade-left" className="name-container">
              <h1>
                <i class="fas fa-user"></i> Name
              </h1>
              <h2>Brihan Diana</h2>
            </div>
            <div data-aos="fade-left" className="address-container">
              <h1>
                {" "}
                <i class="fas fa-map-marker-alt"></i> Address
              </h1>
              <h2>Cluj-Napoca, Romania</h2>
            </div>
          </div>
          <div className="h-right">
            <div data-aos="fade-right" className="email-container">
              <h1>
                <i class="fas fa-envelope"></i> Email
              </h1>
              <h2>brihan.diana@yahoo.ro</h2>
            </div>
            <div data-aos="fade-right" className="telephone-container">
              <h1>
                <i class="fas fa-phone"></i> Phone
              </h1>
              <h2>+40 748635730</h2>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
     
    </div>
  );
};
export default Contact;
