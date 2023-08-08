import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import "../index.css";
import picture from "../assets/picture.jpg";
// import { ThemeContext } from "./ThemeContext";

export default function Header() {
  //to set attribute to body
  const setDarkMode = () => {
    //data-theme get theme state here
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    //will get theme state here
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  // setDarkMode();
  const ToggleTheme = (e) => {
    // debugger;
    e.target.checked ? setDarkMode() : setLightMode();
  };
  const myStyle = {
    width: "150px",
    height: "150px",
  };

  return (
    <>
      <header>
        <div className="container py-5">
          <div className="row">
            <div className="col-xs-3 col-lg-2 text-center">
              <img
                src={picture}
                alt="Person - Avatar Placeholder@seekpng.com"
                className="border border-5 rounded-circle img-fluid"
                style={myStyle}
              />
            </div>
            <div className="col text-center text-lg-start">
              <h1>Ansharah Qasim</h1>
              <div className="dark_mode">
                <input
                  className="dark_mode_input"
                  type="checkbox"
                  id="darkmode-toggle"
                  onChange={ToggleTheme}
                />
                <label className="dark_mode_label" htmlFor="darkmode-toggle">
                  <Sun />
                  <Moon />
                </label>
              </div>
              <p className="lead">
                Software development student at SAIT (Southern Alberta Institute
                of Technology).
              </p>

              <ul className="list-inline">
                <li className="list-inline-item my-2">
                  <a
                    href="mailto:ansharahmir@gmail.com"
                    className="fs-5 text-decoration-none"
                  >
                    <i className="bi bi-envelope pe-1"></i>
                    <span>E-mail</span>
                  </a>
                </li>
                <li className="list-inline-item my-2">
                  <a
                    href="https://www.linkedin.com/in/ansharah-qasim-software-developer"
                    className="fs-5 text-decoration-none"
                    target="_blank"
                  >
                    <i className="bi bi-linkedin pe-1"></i>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li className="list-inline-item my-2">
                  <a
                    href="https://github.com/ansharah-gs"
                    className="fs-5 text-decoration-none"
                    target="_blank"
                  >
                    <i className="bi bi-github pe-1"></i>
                    <span>GitHub</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
