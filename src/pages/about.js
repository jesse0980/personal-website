import React, {useEffect} from "react"
import "./page_styles/about.css"
import TypeWriterEffect from 'react-typewriter-effect';
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function About() {
    useEffect(() => {
        AOS.init({duration: 2500});
        },
    []);

    return (
        <div>
        <div className="container">
            <img className = "headshot" src={require('../images/headshot.jpg')} alt="Headshot" />
            <div className="info">
                <h1>Jesse Landis</h1>
                
            <span><TypeWriterEffect
                textStyle={{fontFamily: "Red Hat Display",
                            fontWeight: 500,
                            fontSize: "2em",
                }}
                startDelay={1500}
                cursorColor="#ffff"
                multiText={['I am an alum of the University of Florida who has a passion for Software Engineering and Economics']}
                multiTextDelay={1000}
                typeSpeed={25}
            />
            </span>
            </div>
        </div>
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
                    <h1 className="moreinfo">You will find me playing pick-up basketball and soccer. I also love hiking and going on adventures in nature. Additionally, I enjoy learning about Financial topics (Stocks, Cryptocurrency, Investing in general).</h1>
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