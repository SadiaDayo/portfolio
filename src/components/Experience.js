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
                  👩🏻‍💻 
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
          
          <p className="section-subtitle">Professional credentials and recognitions</p>
          
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
                  <p className="cert-description">{cert.description}</p>
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
