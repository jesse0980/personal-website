import React, {useEffect, useState} from "react"
import "./page_styles/contact.css"
import fam from '../images/more-grad.JPG'
import {FaBars, FaTimes, FaLinkedin, FaGithub, FaPhoneAlt} from "react-icons/fa";
import { CiMail } from "react-icons/ci"

export default function Contact() {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {  
      const images = [fam];
      let loadedCount = 0;
  
      const checkAllImagesLoaded = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setImagesLoaded(true);
        }
      };
  
      images.forEach((image) => {
        const img = new Image();
        img.src = image;
        img.onload = checkAllImagesLoaded;
      });
    }, []);
  
    // Render a loading state or the content based on the imagesLoaded state
    if (!imagesLoaded) {
      return <h1>Loading...</h1>; // Replace this with your desired loading state
    }


    return (
        <div className="contact">
            <h2 className="contact-title">Contact</h2>
            <div className="pic-ele">
                <div className="con">
                    <a target="_blank" className="con-logo" href="https://www.linkedin.com/in/jesse-landis-b9aa4818a/"><FaLinkedin size={60}/></a>
                    <p className="link-ele-linked">https://www.linkedin.com/in/jesse-landis-b9aa4818a/</p>
                </div>
                <div className="con">
                    <a target="_blank" className="link-ele-phone"><FaPhoneAlt size={60}/></a>
                    <p >352-562-2284</p>
                </div>
                <div className="con">
                    <a target="_blank" className="con-logo" href="mailto:jesselandis05@gmail.com"><CiMail size={60}/></a>
                    <p className="link-ele-email">jesselandis05@gmail.com</p>
                </div>
                <div className="con">
                <a target="_blank" className="con-logo"href="https://github.com/jesse0980"><FaGithub size={60}/></a>
                    <p className="link-ele-git">https://github.com/jesse0980</p>
                </div>

            </div>
                <h5 className="thanks">Thanks for checking out my page!</h5>
                <img className = "final" src={fam} alt="Headshot" />
        </div>

    )
}

// require('../images/more-grad.JPG')