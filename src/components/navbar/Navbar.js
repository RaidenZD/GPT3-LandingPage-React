import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => {
    return (
      <>
        <p className="nav-link">
          <a href="#home">Home</a>
        </p>
        <p className="nav-link">
          <a href="#wgpt3">What is GPT3?</a>
        </p>
        <p className="nav-link">
          <a href="#possibility">Open AI</a>
        </p>
        <p className="nav-link">
          <a href="#features">Case Studies</a>
        </p>
        <p className="nav-link">
          <a href="#blog">Library</a>
        </p>
      </>
    );
  };

  return (
    <nav className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
