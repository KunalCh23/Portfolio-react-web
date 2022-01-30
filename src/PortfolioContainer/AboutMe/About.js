import React from "react";
import './About.css';
import {FaArrowAltCircleRight} from 'react-icons/fa';
import {FiArrowRight} from 'react-icons/fi'

function About() {
    return (
      <div className="about-container" >
        <div className="about-parent">
            <div className="aboutme">
            <h1 >All About Me</h1>
            <p >
            Hello, visitors! My name is Kunal Chaudhary.
            I’m a front-end web developer and programmer. Developing cutting-edge, user-friendly websites and applications is a true passion, and I am confident that I would be an excellent addition to your organization.
            Along with my existing knowledge, I am constantly looking for new technologies and keeping up with industry trends and advancements.
            This has enabled me to stay ahead of the curve and provide superior work. As a front-end developer, I understand how to create a slick web application that assists users in accomplishing their goals. I possess a potent combination.
            </p>
            </div>
            <div className="skills" >
            <h4>My key skills are</h4>
                <section>
                <FaArrowAltCircleRight />Python<br></br>
                <FiArrowRight /> C++ programming language<br></br>
                <FaArrowAltCircleRight />Java<br></br>
                <FiArrowRight />Reactjs<br></br>
                <FaArrowAltCircleRight />HTML<br></br>
                <FiArrowRight />Javascript<br></br>
                <FaArrowAltCircleRight />CSS<br></br>
                </section>
                
                <br></br>
            </div>
        </div>
      </div>
    );
}

export default About;