import React from 'react';
import "./page_styles/resume.css"
const Resume = () => {
  return (
    <div className="Res">
      <h1>JESSE LANDIS</h1>
      <p>Gainesville, FL | (352)-562-2284 | jesse.landis@ufl.edu | <a href="https://www.linkedin.com/in/jesse-landis-b9aa4818a/">https://www.linkedin.com/in/jesse-landis-b9aa4818a/</a></p>

      <h2>EDUCATION</h2>
      <p>University of Florida Gainesville, FL</p>
      <p>Bachelor of Arts in Economics, GPA: 3.71/4.0 May 2023</p>
      <p>Minors: Computer Science: GPA: 3.8/4.0, Philosophy: GPA: 3.9/4.0</p>

      <h2>WORK EXPERIENCE</h2>
      <p>Emerging Tech Gainesville, FL</p>
      <p>Cyber Security Analyst Intern June 2022-August 2022</p>
      <ul>
        <li>Collaborated with client engineers to make sure their software and hardware adhered to the CSfC guidelines.</li>
        <li>Assisted in the development of a Google Chrome extension for over 100 clients to quickly be able to search for all cybersecurity terms and their definitions.</li>
        <li>Involved using HTML, JavaScript, along with CSS.</li>
      </ul>

      <p>Bento Café Gainesville, FL</p>
      <p>Sushi Chef May 2021-Present</p>
      <ul>
        <li>Quickly learned the culinary skills associated with the job while being a full-time student.</li>
        <li>Trained and managed new employees in a restaurant bringing in 10,000 dollars in revenue daily.</li>
      </ul>

      <h2>SKILLS</h2>
      <p>Software: C++, Java, R, Python (Pandas, NumPy, Scikit-Learn, Seaborn), ARM, React, MS Office: Certified in Excel, SQL, Git, PHP</p>

      <h2>RELEVANT COURSEWORK</h2>
      <p>Computer Science: Computer Programming 1 + 2, Data Structures and Algorithms, Operating Systems, Databases</p>
      <p>Economics: Econometrics using R, Business Analytics using Machine Learning, Statistical Programming with R</p>

      <h2>PROJECTS</h2>
      <p>Minesweeper</p>
      <ul>
        <li>Built the classic Minesweeper game using C++, more specifically the SFML library.</li>
        <li>Involved using concepts such as inheritance, recursion, and polymorphism.</li>
      </ul>

      <p>Facial Recognition Software</p>
      <ul>
        <li>Used NumPy, Pandas, and Scikit-learn to train and create an algorithm that could recognize faces in a digital photo based off pixel data.</li>
      </ul>

      <p>Personal Website</p>
      <ul>
        <li>Developed own personal website using CSS, HTML, JavaScript, and the Flask module from Python.</li>
      </ul>

      <h2>ORGANIZATIONS</h2>
      <p>Seventh Generation Environmental Club Gainesville, FL</p>
      <p>Treasurer</p>
      <ul>
        <li>Managed budget for the entire club.</li>
        <li>Distributed budget throughout the year to fund multiple local clean-ups, events relating to raising environmental awareness, and donating to non-profits supporting the environment.</li>
      </ul>

      <p>SwampHacks (University of Florida Hackathon) Gainesville, FL</p>
      <p>Participant February 2022-Present</p>
      <ul>
        <li>Worked with and led a team of inexperienced programmers to complete complex coding challenges.</li>
        <li>Developed Full Stack Web Application using React, Firebase, and the Google Maps API.</li>
        <li>Allowed users to annotate the map of their local areas and add fun things to do in their community.</li>
      </ul>

      <p>University Economics Society Gainesville, FL</p>
      <p>Member June 2019-Present</p>
      <ul>
        <li>Participated in weekly discussions/debates regarding a wide range of Economic topics.</li>
      </ul>
    </div>
  );
};

export default Resume;