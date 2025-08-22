import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Experience.css'
import pic from '../assets/icon.png';
import img from '../assets/img.png';
import img2 from '../assets/pic.png';
import cert1 from '../assets/cert6.png';
import cert2 from '../assets/cert2.png';
import cert3 from '../assets/cert3.png';
import cert4 from '../assets/cert1.png';
import cert5 from '../assets/cert4.png';
import cert6 from '../assets/cert5.png';
import {FaLaptopCode } from 'react-icons/fa';

const Experience = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const experiences = [
    {
      company: 'Motiventive Software Company, Karachi',
      role: 'Web Developer Intern',
      duration: 'Jun 2025 – Aug 2025 | Onsite',
      description:
        'Built and deployed responsive web applications with React.js, JavaScript, and CSS. Designed interactive dashboards using PowerBI, collaborated with designers in Figma, and deployed apps on Vercel with GitHub version control.',
      tools: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Figma', 'PowerBI', 'Github', 'Vercel'],
      image: pic,
    },
    {
      company: 'Prodigy InfoTech, India',
      role: 'Web Developer Intern',
      duration: 'Feb 2025 – Mar 2025 | Remote',
      description:
        'Developed responsive web applications using HTML, CSS, and JavaScript. Improved usability, optimized layouts, and integrated APIs while ensuring performance and cross-browser compatibility.',
      tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'APIs', 'Postman'],
      image: img,
    },
    {
      company: 'CodeAlpha, India',
      role: 'Web Developer Intern',
      duration: 'Jan 2025 – Feb 2025 | Remote',
      description:
        'Created interactive features and dashboards using JavaScript and React.js. Applied responsive design principles, contributed to portfolio projects, and collaborated via GitHub and Vercel.',
      tools: ['HTML', 'CSS', 'JavaScript', 'Github', 'Vercel'],
      image: img2,
    },
  ];

   const certificates = [
    {
      title: 'Web Development Internship',
      issuer: 'Motiventive | 2025',
      image: cert1,
      description: 'Completed intensive internship focused on building scalable web applications with React and Node.js.',
    },
    { 
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University | 2024',
      image: cert2,
      description: 'Certified in NoSQL database design, CRUD operations, and performance optimization.',
    },
    {
      title: 'Student Ambassador',
      issuer: 'Microsoft Learn | 2024',
      image: cert3,
      description: 'Selected for leadership program with specialized training in Large Language Models (LLMs).',
    },
    {
      title: 'Skills Development Certification',
      issuer: 'CodeAlpha | 2024',
      image: cert4,
      description: 'Recognized for problem-solving and technical skills in competitive programming quiz.',
    },
    {
      title: 'Web Development Internship',
      issuer: 'CodeAlpha | 2024',
      image: cert5,
      description: 'Contributed to cutting-edge projects while honing modern web development skills.',

    },
    {
      title: 'Web Development Internship',
      issuer: 'Prodigy InfoTech | 2024',
      image: cert6,
      description: 'Gained hands-on experience building modern web solutions and applications.',
    },
  ];


  return (
    <>
      {/* EXPERIENCE SECTION */}
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-heading">💼 Experience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div className="timeline-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="timeline-icon">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M160-200v-440 440-15 15Zm0 80q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v171q-18-13-38-22.5T800-508v-132H160v440h283q3 21 9 41t15 39H160Zm240-600h160v-80H400v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm20-208v-112h-40v128l86 86 28-28-74-74Z"/></svg>
                </div>
                <div className="timeline-content">
                  <h3>{exp.role}</h3>
                  <span className="company">{exp.company}</span>
                  <p className="duration">{exp.duration}</p>
                  <p className="description">{exp.description}</p>
                  <ul className="tools">
                    {exp.tools.map((tool, idx) => (
                      <li key={idx}>{tool}</li>
                    ))}
                  </ul>
                </div>
                <div className="timeline-image">
                  <img src={exp.image} alt={exp.company} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* CERTIFICATES SECTION */}
      <section id="certificates" className="certificates-section">
        <div className="container">
          <h2 className="section-heading">
            <span className="section-icon">🏆</span>
            Certifications & Achievements
          </h2>
          
          <p className="section-subtitle">Professional credentials and recognitions <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FCA311"><path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z"/></svg></p>
          
          <div className="cert-grid">
            {certificates.map((cert, idx) => (
              <div 
                className="cert-card" 
                key={idx} 
                data-aos="fade-up" 
                data-aos-delay={idx * 100}
              >
                <div className="cert-image-container">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="cert-image"
                    onClick={() => setLightboxImage(cert.image)}
                  />
                </div>
                
                <div className="cert-content">
                  <div className="cert-header">
                    <h4>{cert.title}</h4>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>
                  <p className="cert-description">{cert.description} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX OVERLAY */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage} alt="Certificate Fullscreen" />
        </div>
      )}
    </>
  );
};

export default Experience;
