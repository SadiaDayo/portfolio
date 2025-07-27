import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section text-white">
      <div className="glow-circle"></div>

      <div className="hero-overlay">
        <div className="hero-content text-center">
          <h1 className="hero-title">Hi, I'm <span className="highlight">Sadia Dayo</span></h1>
          {/* 👇 Typewriter animation starts here */}
          <h3 className="hero-subtitle">
            <TypeAnimation
  sequence={[
    'Software Engineer', 2000,
    'Web Developer', 2000,
    'Frontend Developer', 2000,
    'UI/UX Designer', 2000,
    'MERN Stack Developer', 2000,
    'Blockchain Developer', 2000,
    'Mobile App Developer', 2000,
  ]}
  speed={50} 
  deletionSpeed={50} 
  wrapper="span"
  cursor={true}
  repeat={Infinity}
/>
          </h3>

         <p className="hero-description">
  Passionate about transforming ideas into intuitive digital experiences, 
  I design and develop responsive, high-performing web solutions using the latest technologies.
</p>


          <div className="hero-buttons">
            <a href="#projects" className="hero-btn">View Projects</a>
            <a href="/Sadia_Dayo_CV.pdf" download="Sadia_Dayo_Resume.pdf" className="hero-btn">Download CV</a>
          </div>

          <div className="hero-social mt-4">
            <a href="https://www.linkedin.com/in/sadia-dayo/" target="_blank" rel="noreferrer" className="me-3">
              <FaLinkedin size={28} />
            </a>
            <a href="https://github.com/SadiaDayo" target="_blank" rel="noreferrer">
              <FaGithub size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
