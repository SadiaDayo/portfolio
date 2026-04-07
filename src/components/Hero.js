import React from "react";
import { FaLinkedin, FaGithub, FaArrowRight, FaDownload ,FaEnvelope} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      {/* Wave Background */}
  <div className="wave">
        <span></span>
        <span></span>
        <span></span>
      </div>
{/* Glow Circle */}
  <div className="glow-circle"></div>
      {/* Overlay content */}
      <div className="hero-overlay">
        <h1 className="hero-title">
         Hi 👋 I’m <span className="highlight">Sadia Dayo</span>
        </h1>
        <h3 className="hero-subtitle">
          <TypeAnimation
            sequence={[
              "Innovative Software Engineer",
              2000,
              "Expert Web Developer",
              2000,
              "Creative Frontend Developer",
              2000,
              "UI/UX Design Specialist",
              2000,
              "MERN Stack Expert",
              2000,
              "Blockchain Enthusiast",
              2000,
              "Mobile App Innovator",
              2000,
            ]}
            speed={50}
            deletionSpeed={50}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="typewriter-text"
          />
        </h3>
        <p className="hero-description">
         I specialize in developing responsive and high-performance web applications using modern frameworks like React, Node.js, and Next.js. Passionate about problem-solving, I focus on delivering solutions that are not only functional but also user-friendly and impactful.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-btn">
            <FaArrowRight style={{ marginRight: "8px" }} />
            Explore My Work
          </a>
          <a
            href="/Sadia_Dayo_CV.pdf"
            download="Sadia_Dayo_Resume.pdf"
            className="hero-btn secondary-btn"
          >
            <FaDownload style={{ marginRight: "8px" }} />
            Download Resume
          </a>
        </div>

        <div className="hero-social mt-3">
          <a
            href="https://www.linkedin.com/in/sadia-dayo/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/SadiaDayo"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
          
            <a href="mailto:sadiadayo5@gmail.com">
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
