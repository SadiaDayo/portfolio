import React from 'react';
import { FaLinkedin, FaGithub, FaArrowRight, FaDownload } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="glow-circle"></div>
      <div className="hero-overlay">
        <div className="hero-content text-center animate__animated animate__fadeIn">
          <h1 className="hero-title animate__animated animate__slideInDown">
            Welcome, I’m <span className="highlight">Sadia Dayo</span>
          </h1>
          <h3 className="hero-subtitle animate__animated animate__fadeInUp">
            <TypeAnimation
              sequence={[
                'Innovative Software Engineer', 2000,
                'Expert Web Developer', 2000,
                'Creative Frontend Developer', 2000,
                'UI/UX Design Specialist', 2000,
                'MERN Stack Expert', 2000,
                'Blockchain Enthusiast', 2000,
                'Mobile App Innovator', 2000,
              ]}
              speed={50}
              deletionSpeed={50}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="typewriter-text"
            />
          </h3>
          <p className="hero-description animate__animated animate__fadeInUp delay-1s">
            Transforming visionary ideas into cutting-edge digital solutions with a passion for excellence, 
            I craft responsive and high-performance web applications using the latest technologies.
          </p>

          <div className="hero-buttons animate__animated animate__fadeInUp delay-2s">
            <a href="#projects" className="hero-btn">
              <FaArrowRight style={{ marginRight: '8px' }} />
              Explore My Work
            </a>
            <a href="/Sadia_Dayo_CV.pdf" download="Sadia_Dayo_Resume.pdf" className="hero-btn secondary-btn">
              <FaDownload style={{ marginRight: '8px' }} />
              
              Download Resume
            </a>
          </div>

          <div className="hero-social mt-4 animate__animated animate__fadeInUp delay-3s">
            <a href="https://www.linkedin.com/in/sadia-dayo/" target="_blank" rel="noreferrer" className="me-3 social-icon">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/SadiaDayo" target="_blank" rel="noreferrer" className="social-icon">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
