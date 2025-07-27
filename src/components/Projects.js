import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Tumor-Track FYP Project',
    image: '/images/tumortrack.png',
    description: 'AI-powered system for brain tumor Detection, Segmentation and Classification using deep learning. Features Gemini LLM for treatment suggestions and a full-stack deployment.',
    tools: ['Python', 'CNN', 'U-Net', 'Flask', 'React.js', 'LLM', 'Node.js'],
    github: 'https://tumor-track.vercel.app/home'
  },
  {
    title: 'Social Media Dashboard',
    image: '/images/socialmediadashboard.png',
    description:
      'A sleek and responsive dashboard built during my internship at CodeAlpha, enabling analytics-driven social media management with intuitive design and real-time insights.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    github: 'https://code-alpha-media-dashboard.vercel.app/'
  },
  {
  title: 'Weather Application',
  image: '/images/weatherapp.png', 
  description: 'A dynamic and responsive weather forecasting app using HTML, CSS, JavaScript, and APIs to fetch real-time weather data. Built during my Prodigy InfoTech internship.',
  tools: ['HTML', 'CSS', 'JavaScript', 'REST API', 'Bootstrap'],
  github: 'https://prodigy-wd-05-six.vercel.app/',
}
,
{
  title: 'Personal Portfolio Website',
  image: '/images/profile.png', 
  description: 'A fully redesigned portfolio website showcasing my skills, projects, and journey as a web developer. Built with responsive design, interactive sections, and easy CV download functionality during my internship at Prodigy InfoTech.',
  tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  github: 'https://prodigy-wd-04-fawn.vercel.app/',
}
,
{
  title: 'Expense Tracker Application',
  image: '/images/expensetracker.png', 
  description: 'Developed a fully functional Expense Tracker during my internship at CodeAlpha. Implemented features to add, edit, delete expenses, with localStorage integration and real-time total calculation.',
  tools: ['HTML', 'CSS', 'JavaScript'],
  github: 'https://code-alpha-expense-tracker-five.vercel.app/',
}
,
{
  title: 'Tic-Tac-Toe Game',
  image: '/images/tictac.png', 
  description: 'Built an interactive Tic-Tac-Toe game during my Prodigy InfoTech internship. Implemented user click handling, game logic, and win condition checks. Enhanced visuals with custom styling and animations.',
  tools: ['HTML', 'CSS', 'JavaScript'],
  github: 'https://prodigy-wd-03-ecru.vercel.app/',
}
,
{
  title: 'Personal Portfolio Website ',
  image: '/images/portfolio.png', 
  description: 'Successfully built a responsive and visually appealing personal portfolio during my internship at CodeAlpha. Gained hands-on experience in HTML, CSS, and JavaScript. The portfolio highlights my skills, projects, resume, and professional profile.',
  tools: ['HTML', 'CSS', 'JavaScript'],
  github: 'https://code-alpha-personal-portfolio-website.vercel.app/',
}
,{
  title: 'Stopwatch Application ',
  image: '/images/stopwatch.png', 
  description: 'Developed a fully functional stopwatch with Start, Stop, Lap, and Reset features using JavaScript, HTML, and CSS. Focused on intuitive UI and seamless performance across devices during my internship at Prodigy InfoTech.',
  tools: ['HTML', 'CSS', 'JavaScript'],
  github: 'https://stopwatch-pied-six.vercel.app/',
}
,{
  title: 'Responsive Landing Page',
  image: '/images/website.png', 
  description: 'Created a modern and responsive landing page using HTML, CSS, and JavaScript. Integrated a modal-based contact form, responsive navbar, dynamic service section, and styled service cards during my internship at Prodigy InfoTech.',
  tools: ['HTML', 'CSS', 'JavaScript'],
  github: 'https://prodigy-wd-01-bay.vercel.app/',
}

,
  
  

];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
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
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-btn">
               Project Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
