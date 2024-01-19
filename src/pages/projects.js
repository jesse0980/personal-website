import React, {useEffect, useState} from "react"
import "./page_styles/projects.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import peopleMap from '../images/people_map.png'
import memeGen from '../images/meme.png'
import sentRead from '../images/sentiment-reader.png'
import fbi from '../images/fbi.png'
import chess from '../images/ChessAI.png'
import Footer from "../components/footer";

export default function Project() {

    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
      AOS.init({ duration: 2500 });
  
      const images = [peopleMap, memeGen];
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
        <div className="projects">
           <h1 className="title">Projects</h1>
            <div className="proj-ele-beg">
              <a target="_blank" href="https://remarkable-salmiakki-a011fc.netlify.app/"><h3 className="proj_title">Peoples Map</h3></a>
                  <p className="proj_desc">Utilized React, Firebase, and the Google Maps API to create an Interactive Map that allows anyone to add their own places. Goal is to create a community map that has local things to do that you wouldn't find in a simple Google Search.</p>
                  <a target="_blank" href="https://remarkable-salmiakki-a011fc.netlify.app/"><img className = "proj" src={peopleMap} alt="Headshot" /></a>
            </div>
            <div data-aos="fade-up" className="proj-ele">
              <a target="_blank" href="https://github.com/jesse0980/Chess-AI"><h3 className="proj_title">Chess AI</h3></a>
                  <p className="proj_desc">I created a chess desktop game, with a custom computer AI, only utilizing C++ and the SFML library. The AI is able to change and update its behavior based on the individual play of the user.</p>
                  <a target="_blank" href="https://github.com/jesse0980/Chess-AI"><img className = "proj" src={chess} alt="Headshot" /></a>
            </div>
            <div data-aos="fade-up" className="proj-ele">
              <a target="_blank" href="https://golden-cupcake-d1b9a9.netlify.app/"><h3 className="proj_title">Meme Generator</h3></a>
                  <p className="proj_desc">Used React and the imgflip API to develop a web app that allows users to create funny memes by typing in the top and the bottom text and then getting a random meme when the button is clicked. They can then screenShot and download the meme.</p>
                  <a target="_blank" href="https://golden-cupcake-d1b9a9.netlify.app/"><img className = "proj" src={memeGen} alt="Headshot" /></a>
            </div>
            <div data-aos="fade-up" className="proj-ele">
              <a target="_blank" href="https://github.com/jesse0980/Sentimnent-Reader"><h3 className="proj_title">Sentiment Reader</h3></a>
                  <p className="proj_desc">Used SNS Scrape python module to create an application that scrapes posts(Twitter/Reddit) containing a key word such as “Bitcoin”. It then deploys Vader Sentiment AI to analyze sentiment of posts and recommend buying/selling the asset</p>
                  <a target="_blank" href="https://github.com/jesse0980/Sentimnent-Reader"><img className = "proj" src={sentRead} alt="Headshot" /></a>
            </div>

            <div data-aos="fade-up" className="proj-ele">
              <a target="_blank" href="https://github.com/jesse0980/FBI-Crime-Website"><h3 className="proj_title">FBI Crime Website </h3></a>
                  <p className="proj_desc">Developed web application that allowed users to visualize/analyze 500,000 FBI crime data points. Utilized the Oracle SQL developer, HTML, PHP, and CSS to create a seamless user experience</p>
                  <a target="_blank" href="https://github.com/jesse0980/FBI-Crime-Website"><img className = "proj" src={fbi} alt="Headshot" /></a>
            </div>
        
        <Footer/>

        </div>

    )
}