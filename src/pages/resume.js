import React from 'react';
import "./page_styles/resume.css"
const Resume = () => {
  return (
    <div className="Res">
      <div className='title-info'>
        <h1>JESSE LANDIS</h1>
        <p>Gainesville, FL | (352)-562-2284 | jesselandis05@gmail.com | <a href="https://www.linkedin.com/in/jesse-landis-b9aa4818a/">https://www.linkedin.com/in/jesse-landis-b9aa4818a/</a></p>
      </div>
      <div className='education'>
        <h2>EDUCATION</h2>
        <p className='UF'>University of Florida</p>
        <div className='school-info'><p>Bachelor of Arts in Economics,</p> <p className='gpa'>GPA: 3.89/4.0</p> <p>May 2023</p></div>
        <div className='minors'><p>Minors:</p> <p className='comp-sci'>Computer Science: GPA: 3.8/4.0,</p><p> Philosophy: GPA: 3.9/4.0</p></div>
      </div>
      <div className='work-experience'>
        <h2 className='work-title'>WORK EXPERIENCE</h2>
        <p className='company'>Emerging Tech | Gainesville, FL</p>
        <p className='job-title'>Cyber Security Analyst Intern | June 2022-August 2022</p>
        <ul className='emerge-list'>
          <li>Collaborated with client engineers to make sure their software and hardware adhered to the CSfC guidelines.</li>
          <li>Assisted in the development of a Google Chrome extension for over 100 clients to quickly be able to search for all cybersecurity terms and their definitions.</li>
          <li>Involved using HTML, JavaScript, along with CSS to allow clients to find definitions 200% faster than the previous method</li>
        </ul>
      
        <p className='company'>Bento Café | Gainesville, FL</p>
        <p className='job-title'>Sushi Chef | May 2021-Present</p>
        <ul className='bot'>
          <li>Quickly learned the culinary skills associated with the job while being a full-time student.</li>
          <li>Trained and managed new employees in a restaurant bringing in 10,000 dollars in revenue daily.</li>
        </ul>
      </div>
      <div className='skills'>
        <h2>SKILLS</h2>
        <div className='software'>
          <p>Software:</p> <p className='major-ones'>C++, R, Python (Pandas, NumPy, Scikit-Learn, Seaborn), React,</p> <p>ARM, Java, MS Office: Certified in Excel, SQL, Git, PHP</p>
        </div>
      </div>

      <div className='coursework'>
        <h2>RELEVANT COURSEWORK</h2>
        <div className='classes'>
          <p className='comp-class'>Computer Science</p>: Computer Programming 1 + 2, <p className='DSA'>Data Structures and Algorithms,</p> <p>Operating Systems, Databases</p>
        </div>
        <p>Economics: Econometrics using R, Business Analytics using Machine Learning, Statistical Programming with R</p>       

      </div>
      {/* <h2>PROJECTS</h2>
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
      </ul> */}
      <div className='organizations'>
        <h2>ORGANIZATIONS</h2>
        <p className='org-name'>Seventh Generation Environmental Club</p>
        <p className='org-job'>Treasurer | August 2020-August 2022</p>
        <ul>
          <li>• Managed a budget of over 10,000 dollars for the entire club</li>
          <li>Distributed budget throughout the year to fund multiple local clean-ups, events relating to raising environmental awareness, and donating to non-profits supporting the environment.</li>
        </ul>

        <p className='org-name'>SwampHacks (University of Florida Hackathon)</p>
        <p className='org-job'>Participant February | 2022-Present</p>
        <ul>
          <li>Worked with and led a team of inexperienced programmers to complete complex coding challenges.</li>
          <li>Developed Full Stack Web Application using React, Firebase, and the Google Maps API.</li>
          <li>Allowed users to annotate the map of their local areas and add fun things to do in their community.</li>
        </ul>

        <p className='org-name'>University Economics Society</p>
        <p className='org-job'>Member | June 2019-Present</p>
        <ul>
          <li>Participated in weekly discussions/debates regarding a wide range of Economic topics.</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;