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
                <p className="proj_desc">An Interactive Map that allows anyone to add their own places. Goal is to create a community map that has local things to do that you wouldn't find in a simple Google Search.</p>
                <a target="_blank" href="https://remarkable-salmiakki-a011fc.netlify.app/"><img className = "proj" src={require('../images/people_map.png')} alt="Headshot" /></a>
            </div>

            <div data-aos="fade-right" className="proj-ele">
            <a target="_blank" href="https://github.com/jesse0980/FBI-Crime-Website"><h3 className="proj_title">FBI Crime Website </h3></a>
                <p className="proj_desc">Developed web application that allowed users to visualize/analyze 500,000 FBI crime data points. Utilized the Oracle SQL developer, HTML, PHP, and CSS to create a seamless user experience</p>
                <a target="_blank" href="https://github.com/jesse0980/FBI-Crime-Website"><img className = "proj" src={require('../images/fbi.png')} alt="Headshot" /></a>
            </div>
           
        </div>

    )
}