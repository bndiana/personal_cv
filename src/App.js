import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import Skills from "./components/pages/Skills";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage
        title="Home"
        dark={true}
        id="home"
      />
      <AboutPage
        title="About"
        dark={false}
        id="about"
      />
      <Skills
        title="Skills"
        dark={true}
        id="skills"
      />
      <Work
        title="Work"
        dark={false}
        id="work"
      />
      <Contact
        title="Contact"
        dark={true}
        id="contact"
      />
      <Footer/>
    </div>
  );
}

export default App;
