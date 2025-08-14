import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt} from "react-icons/fa";
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Column 1 - About */}
        <div className="footer-col">
          <h4 className="footer-title">Sadia Dayo</h4>
          <p>
            Software Engineer passionate about Web Development, Machine Learning, 
            and UI/UX design. Building innovative solutions with creativity 
            and efficiency.
          </p>
        </div>

        {/* Column 2 - Quick Links */}
        <div className="footer-col">
          <h4 className="footer-title">Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Get In Touch */}
        <div className="footer-col">
          <h4 className="footer-title">Get In Touch</h4>
          <p><FaEnvelope /> sadiadayo5@gmail.com</p>
          <p><FaMapMarkerAlt /> Shikarpur, Pakistan</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="footer-divider" />

      {/* Social Icons */}
      <div className="footer-social">
        <a href="https://linkedin.com/in/sadia-dayo" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/sadia-dayo" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="mailto:sadiadayo5@gmail.com"><FaEnvelope /></a>
      </div>

      {/* Bottom Copyright */}
      <p className="footer-bottom">© {new Date().getFullYear()} Sadia Dayo | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
