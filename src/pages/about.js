import React, {useEffect, useState} from "react"
import "./page_styles/about.css"
import TypeWriterEffect from 'react-typewriter-effect';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useRef} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import headshot from '../images/headshot.jpg'
import soccer from '../images/jesse-soccer.JPG'
import grad from '../images/grad-photo.JPG'
import Footer from "../components/footer";


export default function About() {
    const navRef = useRef();
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
      AOS.init({ duration: 2500 });
  
      const images = [headshot, soccer, grad];
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
      return(
        <div className="loadBox">
        <h1 className="loadScreen">Loading...</h1>; 
        </div>
        )
    }
    


    return (
        <div>
        <div className="container">
            <img className = "headshot" src={headshot} alt="Headshot" />
            
            <div className="info">
                <h1 className="this-title">Jesse Landis</h1>
                
                <span className="type-write"><TypeWriterEffect
                    textStyle={{fontFamily: "Red Hat Display",
                                fontWeight: 500,
                                fontSize: "1.6em",
                    }}
                    startDelay={1500}
                    cursorColor="#ffff"
                    multiText={['I am a University of Florida graduate who has expertise in C++, Python, SQL, React, and R. I have a passion for software engineering and economics.']}
                    multiTextDelay={1000}
                    typeSpeed={20}
                />
                </span>
                <div className="nav-container">
                    <nav ref = {navRef}>
                        <a href="/projects" style={{fontSize: '1.0rem'}}>
                            <Link to="/projects" className="proj-link">Click here to check out my work →</Link>
                        </a>
                    </nav>
                </div>
            </div>
        </div>

        

        <div className="croom-align">
                <div data-aos="fade-right" className="extra">
                       <h1 className="croom">Outside of the Classroom</h1>
                        <h1 className="moreinfo">You will find me playing pick-up basketball and soccer. I also love hiking and going on adventures in nature. Additionally, I enjoy learning about financial topics (Stocks, Cryptocurrency, investing in general).</h1>
                </div>


                <div data-aos="fade-left"><img  className = "nature" src={soccer} alt="Headshot" /></div>
        </div>

        <div className="goal-align">
            <div data-aos="fade-up"><img  className = "grad" src={grad} alt="Headshot" /></div>

            <div data-aos="fade-up" className="mygoals">
                    <h1 className="goals">My Goals</h1>
                    <h1 className="moreinfo">My current career goal is to find a full time software engineering position. Ideally this would be at a company that allowed me to also explore my love for economics.</h1>
            </div>
        </div>
        <Footer/>

        </div>
    )
}