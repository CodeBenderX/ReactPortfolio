//File Name: ReactPortfolio 
//Student’s Name: Angelo Tiquio 
//StudentID: 301343280
//Date: September 21, 2024

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "C:/Users/Angelo Tiquio/Desktop/ReactPortfolio2/ReactPortfolio/src/assets/logo.png";

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="navLayout">
        <img id="logo" src={logo} alt="My Logo" />
        <button className="burger-menu" onClick={toggleMenu}>
          &#9776;
        </button>
        <nav className={isMenuOpen ? "nav-menu show" : "nav-menu hidden"}>
          <Link to="/">Home</Link>  <Link to="/about">About</Link> {" "}
          <Link to="/project">Project</Link> {" "}
          <Link to="/services">Services</Link> {" "}
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </>
  );
}
