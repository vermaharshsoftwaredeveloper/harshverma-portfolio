import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <p>*********************************This site is in under construction!!!</p>
      <h2 className="logo">Harsh Verma</h2>
      
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

      <ul className={isMobileMenuOpen ? "nav-links mobile" : "nav-links"}>
        <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/About" onClick={closeMenu}>About</NavLink></li>
        <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
        <li><NavLink to="/resume" onClick={closeMenu}>Resume</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
