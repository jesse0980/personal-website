import React, {useEffect} from "react"
import "./page_styles/projects.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Project() {
    useEffect(() => {
        AOS.init({duration: 2500});
        },
    []);

    return (
        <div className="projects">
           <h1 className="title">Projects</h1>
            <div className="proj-ele-beg">
            <a target="_blank" href="https://remarkable-salmiakki-a011fc.netlify.app/"><h3 className="proj_title">Peoples Map</h3></a>
                <p className="proj_desc">Used React, Firebase, and the Google Maps API to create an Interactive Map that allows anyone to add their own places. Goal is to create a community map that has local things to do that you wouldn't find in a simple Google Search.</p>
                <a target="_blank" href="https://remarkable-salmiakki-a011fc.netlify.app/"><img className = "proj" src={require('../images/people_map.png')} alt="Headshot" /></a>
            </div>

            <div data-aos="fade-up" className="proj-ele">
            <a target="_blank" href="https://golden-cupcake-d1b9a9.netlify.app/"><h3 className="proj_title">Meme Generator</h3></a>
                <p className="proj_desc">Used React and the imgflip API to develop a web app that allows users to create funny memes by typing in the top and the bottom text and then getting a random meme when the button is clicked. They can then screenShot and download the meme.</p>
                <a target="_blank" href="https://golden-cupcake-d1b9a9.netlify.app/"><img className = "proj" src={require('../images/meme.png')} alt="Headshot" /></a>
            </div>
            <div data-aos="fade-up" className="proj-ele">
            <a target="_blank" href="https://github.com/jesse0980/Sentimnent-Reader"><h3 className="proj_title">Sentiment Reader</h3></a>
                <p className="proj_desc">Used SNS Scrape python module to create an application that scrapes posts(Twitter/Reddit) containing a key word such as “Bitcoin”. It then uses Vader Sentiment AI to analyze sentiment of posts and recommend buying/selling the asset</p>
                <a target="_blank" href="https://github.com/jesse0980/Sentimnent-Reader"><img className = "proj" src={require('../images/sentiment-reader.png')} alt="Headshot" /></a>
            </div>

            <div data-aos="fade-up" className="proj-ele">
            <a target="_blank" href="https://github.com/jesse0980/FBI-Crime-Website"><h3 className="proj_title">FBI Crime Website </h3></a>
                <p className="proj_desc">Developed web application that allowed users to visualize/analyze 500,000 FBI crime data points. Utilized the Oracle SQL developer, HTML, PHP, and CSS to create a seamless user experience</p>
                <a target="_blank" href="https://github.com/jesse0980/FBI-Crime-Website"><img className = "proj" src={require('../images/fbi.png')} alt="Headshot" /></a>
            </div>

            <div data-aos="fade-up" className="proj-ele">
            <a target="_blank" href="https://github.com/jesse0980/SmartEats"><h3 className="proj_title">SmartEats</h3></a>
                <p className="proj_desc">Desktop Application to help you make dietary choices based on the nutritional content of different foods. Implemented two sorting algorithms, shell and bucket, from scratch and compared the efficiency of the two with each sort. This project was developed entirely in C++ including the UI.</p>
                <a target="_blank" href="https://github.com/jesse0980/SmartEats"><img className = "proj" src={require('../images/SmartEats1.png')} alt="Headshot" /></a>
            </div>

           
           
        </div>

    )
}