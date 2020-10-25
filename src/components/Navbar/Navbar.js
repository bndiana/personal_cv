import React, { Component } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

export default class Navbar extends Component {
  state = {
    clicked: false,
    setNavbar: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.changeBackground);
    document.addEventListener("click", (e) => {
      if (e.y > 380 && window.innerWidth <= 768) {
        this.setState({ clicked: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeBackground);
  }

  changeBackground = () => {
    if (window.scrollY >= 80) {
      // this.setState({ setNavbar: !this.state.setNavbar });
      document.querySelector(".navbar-container").className =
        "navbar-container active";
    } else {
      document.querySelector(".navbar-container").className =
        "navbar-container";
    }
  };

  render() {
    const arrayOfTo = ["Home", "About", "Skills", "Work", "Contact"];

    return (
      <div
        className="navbar-container"
        // { to change navbar color using state 
        //   this.state.setNavbar ? "navbar-container active" : "navbar-container"
        // }
      >
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={200}
        >
          <img
            src={require("../imgs/logo3.png")}
            alt="img"
            className="logo-img"
          />
        </Link>

        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <div
          className={this.state.clicked ? "nav-menu active" : "nav-menu"}
        >
          {arrayOfTo.map((item) => {
            return (
              <div className="navbar-link">
                <Link
                  to={item.toLowerCase()}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={200}
                  onClick={this.handleClick}
                >
                  {item}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
