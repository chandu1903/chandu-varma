import React, { useEffect } from "react";
import "./eg.css";
import LOGO from "./1.png";
import Computer from "./hero.png";
import Profile1 from './profile1.JPG';
import a from './html.png';
import react from './react.png';
import b from './css.png';
import c from './js.png';
import d from './react1.png';
import e from './dj.png';
import f from './python.png';
import g from './java.png';
import h from './mysql.png';
import Card from './card';
import img from "./Project1.png";
import wheather from './Project2.png';
import Task from './Project3.jpg';

const Home = ({title,description}) => {

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.nav');
      const barHeight = document.querySelector('.bar').offsetHeight;
      
      if (window.scrollY > barHeight) {
        nav.classList.add('fixed');
      } else {
        nav.classList.remove('fixed');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <p className="bar">🚀 Looking to hire a Full Stack Developer? Please review my resume and projects. 🚀</p>
      </div>
      <div className="nav">
        <nav className="nav-bar">
          <div className="logo">
            <img src={LOGO} alt="logo"/>
            <span>WEB_DEV</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#project">PROJECTS</a></li>
            <li><a href="#experience">EXPERIENCE</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>
      <div className="background-img">
        <div className="start-page">
      <div className="main">
        <div id="home" className="section text">
          <h1>Hey, <span>I'm Chandu</span></h1>
          <p>
            Full-Stack Web Developer with extensive project experience. As a recent college graduate, 
            I am eager to apply my skills in a developer role, where I can contribute to building innovative software solutions and web applications.
          </p>
          <div className="buttons">
            <button className="project-btn">PROJECTS &lt;/&gt;</button>
            <button className="contact-btn">CONTACT &nbsp;&#x2709;</button>
          </div>
        </div>
        <div className="lab2">
          <img src={Computer} alt="lab"/>
        </div>
        </div>
      </div>
      </div>
      <div id="about" className="section about-me-section">
        <h1 className="about-me-heading">About Me</h1>
        <div className="about-me-content">
          <img src={Profile1} alt="Profile" className="about-me-image" />
          <div className="about-me-text">
            <p>I'm <strong>Prasad Varma</strong>, a 22-year-old <strong>Computer Science Engineering (CSE) graduate</strong> with a strong academic record and a passion for technology. Throughout my academic journey, I've cultivated a deep understanding of both theoretical concepts and practical applications, consistently achieving a good CGPA.</p>
            <p>Occasionally, I work as a <strong>Freelancer in Web Development</strong>, where I specialize in creating optimized, high-performance websites for my clients. My freelance work has allowed me to apply my skills in real-world projects, helping businesses establish a strong online presence and achieve their digital goals.</p>
            <p>In my free time, I dedicate myself to continuous learning and improvement by coding on <strong>Coding Ninjas</strong>. I enjoy solving complex problems and frequently post optimized solutions, contributing to the developer community. When I’m not immersed in coding, I love to unwind by playing cricket, a sport that helps me stay active and focused.</p>
          </div>
        </div>
        <div className="my-stack">
          <div className="stack-heading">
            <span className="stack-line"></span>
            <h2 className="stack-title">MY STACK</h2>
            <span className="stack-line"></span>
          </div>
          <div className="stack-icons">
            <img src={a} alt="HTML" />
            <img src={b} alt="CSS" />
            <img src={c} alt="JavaScript" />
            <img src={f} alt="JavaScript" />
            <img src={g} alt="JavaScript" />
            <img src={d} alt="JavaScript" />
            <img src={e} alt="JavaScript" />
            <img src={h} alt="JavaScript" />
          </div>
        </div>
      </div>
      <div id="project" className="section projects-section">
        <h1 className="projects-heading">Projects</h1>
      </div>
      <div className="card-container">
            <Card
                image={img}
                title="School Portfolio"
                description="I developed a website for MLBT School to share its activities,
                 news, and achievements. It has sections for news, events, and celebrating 
                 student successes. I worked closely with the school to ensure the website 
                 shows its values and mission. The site is user-friendly, 
                helping visitors stay informed and connected with the school community."
                l1="React.js"
                l2="CSS"
                l3="BootStrap"
            />
            <Card
                image={wheather}
                title="Wheather Dashboard"
                description="I created a weather dashboard where users can enter a city name to see 
                its temperature, wind speed, and humidity. It uses a weather API to give real-time data. 
                The interface is simple and easy to use, making it quick for users to check the weather 
                conditions for any city they choose."
                l1="React.js"
                l2="CSS"
                l3="Django"

            />
            <Card
                image={Task}
                title="Task Manager"
                description="I built a Task Manager web app using ReactJS and 
                Django to help users manage tasks. It allows users to create, 
                view, and delete tasks easily. Users can quickly add new tasks, 
                see a list of tasks, and remove finished ones. This app improves 
                productivity by making task management simple for individuals and teams."
                l1="React.js"
                l2="CSS"
                l3="Django"
            />
        </div>
        <div id="experience" className="section experience-section">
          <h1 className="experience-heading">Experience</h1>
          <div className="experience-container">
            <div className="experience-box">
              <h2 className="experience-time">May2023 - July2023</h2>
              <h3 className="experience-role">Web Developer Intern</h3>
              <h3 className="experience-company">APPLINES SOLUTIONS</h3>
              <p className="company-desc">Applines is a company with a product called *Speech Pundit* that helps students develop their communication skills. It also offers services for developing business and portfolio websites.</p>
              <ul className="experience-list">
                <li>In my internship at Applines Solutions, worked as Full Stack Web Developer using React.js and Django. 
                    Additionally, I learned to utilize tools like Postman for API testing and valentine studio for database 
                    management.
                </li> 
                <li> Developed a web page on SpeechPundit with modules on diverse topics to enhance communication skills 
                      through practice.
                </li>
              </ul>
          </div>

          <div className="experience-box">
          <h2 className="experience-time">May2023 - July2023</h2>
              <h3 className="experience-role">Web Developer Intern</h3>
              <h3 className="experience-company">APPLINES SOLUTIONS</h3>
              <p className="company-desc">Applines is a company with a product called *Speech Pundit* that helps students develop their communication skills. It also offers services for developing business and portfolio websites.</p>
              <ul className="experience-list">
                <li>In my internship at Applines Solutions, worked as Full Stack Web Developer using React.js and Django. 
                    Additionally, I learned to utilize tools like Postman for API testing and valentine studio for database 
                    management.
                </li> 
                <li> Developed a web page on SpeechPundit with modules on diverse topics to enhance communication skills 
                      through practice.
                </li>
              </ul>
          </div>

          </div>
        </div>
        <div>
        <footer className="footer">
  <div className="footer-top">
    <div className="footer-content">
      <h2>Get In Touch</h2>
      <p>Have a project you'd like to discuss? Just leave me a message and </p>
      <p>I'll get back to you within 24 hours.</p>
      <button className="send-details-btn">
         SEND DETAILS <span role="img" aria-label="rocket"><img src="https://img.icons8.com/?size=100&id=86822&format=png&color=FFFFFF" className="send-logo"/></span>
      </button>
    </div>
    <div className="link-texts">
      <div className="social-text">      
        <h3>Social Links</h3>
      </div>
    <div className="social-links">
      <a href="mailto:your-email@gmail.com"><img src="https://img.icons8.com/color/48/000000/gmail--v1.png" alt="Gmail" /></a>
      <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" /></a>
      <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color/48/000000/youtube-play.png" alt="YouTube" /></a>
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" /></a>
      <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/material-outlined/48/000000/github.png" alt="GitHub" /></a>
    </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p className="a">Find an issue with this page? <a href="https://github.com/yourrepo" target="_blank" rel="noopener noreferrer">Fix it on GitHub</a></p>
    <p className="b">Created with &nbsp;<span role="img" aria-label="heart"> <img src={react} className="footer-bottom-logo"/> </span> &nbsp; by &nbsp;<a href="https://yourprofile.com" target="_blank" rel="noopener noreferrer">  Chandu</a></p>
  </div>
</footer>
        </div>
    </>
  );
};

export default Home;
