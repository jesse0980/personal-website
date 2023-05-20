import React from "react";
import {useRef} from "react";
import {FaBars, FaTimes, FaLinkedin } from "react-icons/fa";
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from 'styled-components';


import "./navBar.css"
function Navbar() {
  const navRef = useRef();
  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header >
      {/* <a target="_blank" href="https://www.linkedin.com/in/jesse-landis-b9aa4818a/"><button  className="logo"><FaLinkedin size={35}/></button></a> */}
      <nav ref = {navRef}>
            <a onClick={showNav}><Link to="/" className="link">Jesse Landis</Link></a>
            <a style={{fontSize: '1.7rem'}}>|</a>
            <a onClick={showNav}><Link to="/projects" className="link">Projects</Link></a>
            <a style={{fontSize: '1.7rem'}}>|</a>
            <a onClick={showNav}><Link to="/contact" className="link">Contact</Link></a>
            <a style={{fontSize: '1.7rem'}}>|</a>
            <a onClick={showNav}><Link to="/resume" className="link">Resume</Link></a>
            <button className="nav-btn nav-close-btn" onClick={showNav}><FaTimes/></button>
      </nav>
      <button className="nav-btn" onClick={showNav}><FaBars/></button>
    </header>
  );
}

export default Navbar