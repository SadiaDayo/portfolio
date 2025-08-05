import React from 'react';
import './Experience.css';
import { FaLaptopCode } from 'react-icons/fa';
import pic from '../assets/icon.png';
import img from '../assets/img.png';
import img2 from '../assets/pic.png';
const Experience = () => {
  const experiences = [
    {
      company: 'Motiventive Software Company, Karachi',
      role: 'Web Developer Intern',
      duration: 'Jun 2025 – Aug 2025',
      jobtype:'Onsite',
      description: 'Ongoing internship with focus on building responsive web apps and hands-on collaboration with teams.',
      tools: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Figma', 'PowerBI', 'Github', 'Vercel'],
      image: pic, 
    },
    {
      company: 'Prodigy InfoTech, India',
      role: 'Web Developer Intern',
      duration: 'Feb 2025 – Mar 2025',
      jobtype:'Remote',
      description: 'Built interactive apps including stopwatch, Tic-Tac-Toe, weather app, and a portfolio website.',
      tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'APIs', 'Postman'],
      image: img,
    },
    {
      company: 'CodeAlpha, India',
      role: 'Web Developer Intern',
      duration: 'Jan 2025 – Feb 2025',
      jobtype:'Remote',
      description: 'Contributed to a portfolio website, an expense tracker, and a responsive social media dashboard.',
      tools: ['HTML', 'CSS', 'JavaScript', 'Github', 'Vercel'],
      image: img2, 
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-heading">💼 Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
             <div className="timeline-icon">
                <FaLaptopCode/>
              </div>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <span className="company">{exp.company}</span>
                <p className="duration">{exp.duration}</p>
                <p className="duration">{exp.jobtype}</p>
                <p className="description">{exp.description}</p>
                <ul className="tools">
                  {exp.tools.map((tool, idx) => (
                    <li key={idx}>{tool}</li>
                  ))}
                </ul>
              </div>
              <div className="timeline-image">
                <img
                  src={exp.image}
                  alt={exp.company}
                  onError={(e) => console.error(`Image failed to load for ${exp.company}:`, e)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;