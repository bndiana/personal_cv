import React, { Component } from "react";
import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import AboutPage from "./components/pages/AboutPage";
import HomePage from "./components/pages/HomePage";
// import ContactPage from "./components/pages/ContactPage";
// import SkillsPage from "./components/pages/SkillsPage";
// import WorkPage from "./components/pages/WorkPage";
// import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HomePage />
      </React.Fragment>
    );
  }
}
export default App;
