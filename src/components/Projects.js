import React, { useState } from 'react';
import { FaCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';
import './Projects.css';

const projects = [
 {
  title: 'Personal Portfolio Website (2025)',
  image: '/images/portfoliowebsite.png',
  description: 'A fully responsive and visually engaging personal portfolio built using modern front-end technologies. Developed with a focus on clean UI/UX design, component reusability, and performance optimization. Features dynamic project filtering, animated skill indicators, interactive timelines, and section-based navigation for a seamless user experience. Deployed using modern DevOps tools with continuous integration support.',
  tools:  [
    'React.js',
    'React-Bootstrap',
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'Responsive Design',
    'UI/UX Design',
    'React Icons',
    'Vercel',
    'Git & GitHub'
  ],
  github: 'https://sadia-portfolio-six.vercel.app/',
  category: 'Web Development'
},
  {
    title: 'Tumor-Track FYP Project',
    image: '/images/tumortrack.png',
    description: 'AI-powered system for brain tumor Detection, Segmentation, and Classification using deep learning. Features Gemini LLM for treatment suggestions and a full-stack deployment.',
    tools: ['Python', 'CNN', 'U-Net', 'Flask', 'React.js', 'LLM', 'Node.js','Github','Vercel'],
    github: 'https://tumor-track.vercel.app/home',
    category: 'Web Development'
  },
  {
    title: 'Social Media Dashboard',
    image: '/images/socialmediadashboard.png',
    description: 'Analytics-driven responsive dashboard for managing social media content. Built during CodeAlpha internship.',
    tools: ['HTML', 'CSS', 'JavaScript', 'REST API', 'Responsive Design','Github','Vercel'],
    github: 'https://code-alpha-media-dashboard.vercel.app/',
    category: 'Web Development'
  },
  {
    title: 'Weather Application',
    image: '/images/weatherapp.png',
    description: 'Real-time weather data fetching application built using REST APIs. Developed during Prodigy InfoTech internship.',
    tools: ['HTML', 'CSS', 'JavaScript', 'REST API', 'Bootstrap','Github','Vercel'],
    github: 'https://prodigy-wd-05-six.vercel.app/',
    category: 'Mobile Applications'
  },
  {
    title: 'Portfolio Website Prodigy',
    image: '/images/profile.png',
    description: 'Fully responsive personal portfolio showcasing skills, resume, and projects.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap','Github','Vercel'],
    github: 'https://prodigy-wd-04-fawn.vercel.app/',
    category: 'UI/UX Design'
  },
  {
    title: 'Expense Tracker Application',
    image: '/images/expensetracker.png',
    description: 'Feature-rich expense tracker with add/edit/delete and localStorage integration.',
    tools: ['HTML', 'CSS', 'JavaScript','Github','Vercel'],
    github: 'https://code-alpha-expense-tracker-five.vercel.app/',
    category: 'Mobile Applications'
  },
  {
    title: 'Tic-Tac-Toe Game',
    image: '/images/tictac.png',
    description: 'Classic interactive game with full game logic, winner detection, and reset functionality.',
    tools: ['HTML', 'CSS', 'JavaScript','Github','Vercel'],
    github: 'https://prodigy-wd-03-ecru.vercel.app/',
    category: 'Mobile Applications'
  },
  {
    title: 'Portfolio Website (CodeAlpha)',
    image: '/images/portfolio.png',
    description: 'Responsive portfolio website created during CodeAlpha internship.',
    tools: ['HTML', 'CSS', 'JavaScript','Github','Vercel'],
    github: 'https://code-alpha-personal-portfolio-website.vercel.app/',
    category: 'UI/UX Design'
  },
  {
    title: 'Stopwatch Application',
    image: '/images/stopwatch.png',
    description: 'Functional stopwatch with Start, Stop, Lap, and Reset features.',
    tools: ['HTML', 'CSS', 'JavaScript','Github','Vercel'],
    github: 'https://stopwatch-pied-six.vercel.app/',
    category: 'Mobile Applications'
  },
  {
    title: 'Responsive Landing Page',
    image: '/images/website.png',
    description: 'Modern responsive landing page with animation, form, and service section.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://prodigy-wd-01-bay.vercel.app/',
    category: 'UI/UX Design'
  },
  {
  title: 'Bakery Website Redesign',
  image: '/images/bakeryui.png', 
  description: 'A modern redesign of a bakery website showcasing improved UI/UX, responsive layout, and customer-friendly interaction. Reflects 3 years of design growth and Figma mastery.',
  tools: ['Figma'],
  github: 'https://www.figma.com/proto/okJQgq9RVsFYyHj17vQkF3/BakeryUI?node-id=201-2&t=7AKJ4sAWc7F4h68q-1&scaling=scale-down&content-scaling=fixed',
  category: 'UI/UX Design'
},
{
  title: 'Bykea App UI Redesign',
  image: '/images/bykeaui.png', 
  description: 'A complete UI/UX redesign of the Bykea ride-hailing and parcel delivery app. The redesign focuses on modern visuals, smoother navigation, improved user journey for ride booking and parcel delivery, and enhanced accessibility. The project highlights skills in user-centered design and Figma prototyping.',
  tools: ['Figma', 'UI/UX Design'],
  github: 'https://www.figma.com/proto/HLBJTHmuq3nzVLKf4oBMli/BYKEA?node-id=106-1266&p=f&t=qRv2s4ghQ6QNI4fZ-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=106%3A1266',
  category: 'UI/UX Design'
}



];

const categories = [
  { name: 'All', icon: null },
  { name: 'Web Development', icon: <FaCode /> },
  { name: 'Mobile Applications', icon: <FaMobileAlt /> },
  { name: 'UI/UX Design', icon: <FaPaintBrush /> }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">🗂️ Projects </h2> 

      <div className="filter-buttons">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`filter-btn ${selectedCategory === cat.name ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.name)}
          >
            {cat.icon && <span className="filter-icon">{cat.icon}</span>} {cat.name}
          </button>
        ))}
      </div>

      <div className="projects-list">
        {filteredProjects.map((project, index) => (
          <div className={`project-row ${index % 2 === 0 ? 'row-normal' : 'row-reverse'}`} key={index}>
            <div className="project-img-wrapper">
              <img src={project.image} alt={project.title} className="project-img" />
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tools-list">
                {project.tools.map((tool, i) => (
                  <li key={i}>{tool}</li>
                ))}
              </ul>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn">
                View Project ⌞⌝
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
