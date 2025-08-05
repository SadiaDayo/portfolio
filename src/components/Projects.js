import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Tumor-Track FYP Project',
    image: '/images/tumortrack.png',
    description: 'AI-powered system for brain tumor Detection, Segmentation, and Classification using deep learning. Features Gemini LLM for treatment suggestions and a full-stack deployment.',
    tools: ['Python', 'CNN', 'U-Net', 'Flask', 'React.js', 'LLM', 'Node.js'],
    github: 'https://tumor-track.vercel.app/home',
    category: 'AI & Deep Learning'
  },
  {
    title: 'Social Media Dashboard',
    image: '/images/socialmediadashboard.png',
    description: 'Analytics-driven responsive dashboard for managing social media content. Built during CodeAlpha internship.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    github: 'https://code-alpha-media-dashboard.vercel.app/',
    category: 'Dashboard / Analytics'
  },
  {
    title: 'Weather Application',
    image: '/images/weatherapp.png',
    description: 'Real-time weather data fetching application built using REST APIs. Developed during Prodigy InfoTech internship.',
    tools: ['HTML', 'CSS', 'JavaScript', 'REST API', 'Bootstrap'],
    github: 'https://prodigy-wd-05-six.vercel.app/',
    category: 'API Integration'
  },
  {
    title: 'Personal Portfolio Website',
    image: '/images/profile.png',
    description: 'Fully responsive personal portfolio showcasing skills, resume, and projects.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    github: 'https://prodigy-wd-04-fawn.vercel.app/',
    category: 'Portfolio'
  },
  {
    title: 'Expense Tracker Application',
    image: '/images/expensetracker.png',
    description: 'Feature-rich expense tracker with add/edit/delete and localStorage integration.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://code-alpha-expense-tracker-five.vercel.app/',
    category: 'Productivity Tool'
  },
  {
    title: 'Tic-Tac-Toe Game',
    image: '/images/tictac.png',
    description: 'Classic interactive game with full game logic, winner detection, and reset functionality.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://prodigy-wd-03-ecru.vercel.app/',
    category: 'Game Development'
  },
  {
    title: 'Portfolio Website (CodeAlpha)',
    image: '/images/portfolio.png',
    description: 'Responsive portfolio website created during CodeAlpha internship.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://code-alpha-personal-portfolio-website.vercel.app/',
    category: 'Portfolio'
  },
  {
    title: 'Stopwatch Application',
    image: '/images/stopwatch.png',
    description: 'Functional stopwatch with Start, Stop, Lap, and Reset features.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://stopwatch-pied-six.vercel.app/',
    category: 'Utility Tool'
  },
  {
    title: 'Responsive Landing Page',
    image: '/images/website.png',
    description: 'Modern responsive landing page with animation, form, and service section.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://prodigy-wd-01-bay.vercel.app/',
    category: 'UI/UX Design'
  }
];

const categories = [
  'All',
  'AI & Deep Learning',
  'Dashboard / Analytics',
  'API Integration',
  'Portfolio',
  'Utility Tool',
  'Productivity Tool',
  'UI/UX Design',
  'Game Development'
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="filter-buttons">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="project-container">
        {filteredProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tools-list">
                {project.tools.map((tool, i) => (
                  <li key={i}>{tool}</li>
                ))}
              </ul>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
