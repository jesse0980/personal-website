import React, {useEffect} from "react"
import "./page_styles/about.css"
import TypeWriterEffect from 'react-typewriter-effect';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useRef} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function About() {
    useEffect(() => {
        AOS.init({duration: 2500});
        },
    []);

    const navRef = useRef();


    return (
        <div>
        <div className="container">
            <img className = "headshot" src={require('../images/headshot.jpg')} alt="Headshot" />
            <div className="info">
                <h1 className="this-title">Jesse Landis</h1>
                
            <span className="type-write"><TypeWriterEffect
                textStyle={{fontFamily: "Red Hat Display",
                            fontWeight: 500,
                            fontSize: "2em",
                }}
                startDelay={1500}
                cursorColor="#ffff"
                multiText={['I am a University of Florida graduate who has expertise in C++, Python, SQL, React, and Java. I have a passion for software engineering and economics.']}
                multiTextDelay={1000}
                typeSpeed={29}
            />
            </span>

            </div>
        </div>

        <nav ref = {navRef}><a style={{fontSize: '1.0rem'}}><Link to="/projects" className="proj-link">Click here to check out my work →</Link></a>
            </nav>
        {/* <hr
        style={{
          background: 'white',
          color: 'white',
          borderColor: 'white',
          height: '1px',
        }}
      /> */}
        <div className="pic">
            <div data-aos="fade-right" className="extra">
                {/* <div className="fstart"> */}
                    <h1 className="croom">Outside of the Classroom</h1>
                    <h1 className="moreinfo">You will find me playing pick-up basketball and soccer. I also love hiking and going on adventures in nature. Additionally, I enjoy learning about financial topics (Stocks, Cryptocurrency, investing in general).</h1>
                    <br/><br/><br/><br/>

        
            
            </div>
            

        <div data-aos="fade-left"><img  className = "nature" src={require('../images/jesse-soccer.JPG')} alt="Headshot" /></div>
        <div data-aos="fade-left" className="mygoals">
                <h1 className="goals">My Goals</h1>
                <h1 className="moreinfo">My current career goal is to find a full time software engineering position. Ideally this would be at a company that allowed me to also explore my love for economics.</h1>
        </div>
        <div data-aos="fade-right"><img  className = "grad" src={require('../images/grad-photo.JPG')} alt="Headshot" /></div>

        </div>
        </div>
    )
}