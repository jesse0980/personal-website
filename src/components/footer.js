import React from "react";
import {useRef} from "react";
import {FaBars, FaTimes, FaLinkedin, FaGithub} from "react-icons/fa";
import { CiMail } from "react-icons/ci"
import { BrowserRouter, Route, Link } from "react-router-dom";
import styled from 'styled-components';


import "./footer.css"
function Footer() {
  const navRef = useRef();
  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header className="footer">
        <a target="_blank" href="https://www.linkedin.com/in/jesse-landis-b9aa4818a/"><button  className="logo"><FaLinkedin size={35}/></button></a>
        <a target="_blank" href="mailto:jesselandis05@gmail.com"><button  className="logo"><CiMail size={35}/></button></a>
        <a target="_blank" href="https://github.com/jesse0980"><button  className="logo"><FaGithub size={35}/></button></a>
        <p>© Jesse Landis</p>

    </header>
  );
}

export default Footer