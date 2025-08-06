import React from 'react';
import './Skills.css';
import { FaCode, FaDatabase, FaPaintBrush, FaTools, FaProjectDiagram,FaLaptopCode } from 'react-icons/fa';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const SkillItem = ({ name, level, isHovered, isMobile }) => {
  const [filledIndices, setFilledIndices] = React.useState([]);
  const [animatedOnce, setAnimatedOnce] = React.useState(false);

  useEffect(() => {
    if (isMobile && !animatedOnce) {
      const fillDots = async () => {
        for (let i = 0; i < level; i++) {
          await new Promise((res) => setTimeout(res, 200));
          setFilledIndices((prev) => [...prev, i]);
        }
        setAnimatedOnce(true);
      };

      fillDots();
    }
  }, [isMobile, level, animatedOnce]);

  const dots = Array.from({ length: 5 }, (_, i) => (
    <motion.span
      key={i}
      className="dot"
      animate={
        isMobile
          ? filledIndices.includes(i)
            ? { scale: 1.2, opacity: 1, backgroundColor: '#FCA311' }
            : { scale: 0.8, opacity: 0.3, backgroundColor: '#555' }
          : isHovered && i < level
          ? { scale: 1.2, opacity: 1, backgroundColor: '#FCA311' }
          : { scale: 0.8, opacity: 0.3, backgroundColor: '#555' }
      }
      transition={{ duration: 0.3 }}
    />
  ));

  return (
    <li className="skill-item">
      <span>{name}</span>
      <div className="skill-dots">{dots}</div>
    </li>
  );
};



const SkillCard = ({ title, icon, skills, delay }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      className="skills-card"
      data-aos="fade-up"
      data-aos-delay={delay}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      <h3>{icon} {title}</h3>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            name={skill.name}
            level={skill.level}
            isHovered={isHovered}
            isMobile={isMobile}
          />
        ))}
      </ul>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="skills-title">Skills & Expertise</h2>
        <p className="skills-subtitle">Proficient in full-stack development, UI/UX design, and modern tools
             <br></br>blending creativity with technical expertise to build responsive, scalable, and user-friendly solutions.</p>

        <div className="skills-grid">
          {/* 1. Programming Languages */}
          <SkillCard
            title="Programming Languages"
            icon={<FaCode className="skills-icon" />}
            delay="100"
            skills={[
              { name: "JavaScript", level: 5 },
              { name: "Python", level: 5 },
              { name: "Java", level: 5 },
              { name: "C++", level: 4 },
              { name: "C", level: 4 },
              { name: "Kotlin", level: 3 },
              { name: "Solidity", level: 3 },
            ]}
          />
            {/* 2. Frontend Development */}
            <SkillCard
            title="Frontend Development"
            icon={<FaLaptopCode className="skills-icon" />}
            delay="200"
            skills={[
              { name: "React.js", level: 5 },
              { name: "Redux", level: 4 },
              { name: "HTML5 / CSS3", level: 5 },
              { name: "Bootstrap", level: 5 },
              { name: "Tailwind CSS", level: 3 },
              { name: "Flutter", level: 4 },
            ]}
          />

          

          {/* 4. UI/UX & Design Tools */}
          <SkillCard
            title="UI/UX & Design Tools"
            icon={<FaPaintBrush className="skills-icon" />}
            delay="400"
            skills={[
              { name: "Figma", level: 5 },
              { name: "Canva", level: 5 },
              { name: "Adobe XD", level: 4 },
              { name: "Wireframing", level: 5 },
              { name: "User Flow Mapping", level: 4 },
              { name: "Prototyping", level: 5 },
              { name: "Design Systems", level: 4 },
            ]}
          />
          {/* 3. Backend & Databases */}
          <SkillCard
            title="Backend & Databases"
            icon={<FaDatabase className="skills-icon" />}
            delay="300"
            skills={[
              { name: "Node.js", level: 4 },
              { name: "MongoDB", level: 4 },
              { name: "PostgreSQL", level: 3 },
              { name: "MySQL", level: 3 },
              { name: "REST APIs", level: 4 },
            ]}
          />
            {/* 6. Project & Collaboration Tools */}
          <SkillCard
            title="Project & Collaboration"
            icon={<FaProjectDiagram className="skills-icon" />}
            delay="600"
            skills={[
              { name: "Notion", level: 5 },
              { name: "Miro", level: 3 },
            ]}
          />
          {/* 5. Dev Tools & Platforms */}
          <SkillCard
            title="Dev Tools & Platforms"
            icon={<FaTools className="skills-icon" />}
            delay="500"
            skills={[
              { name: "Git / GitHub", level: 5 },
              { name: "Postman", level: 5 },
              { name: "Power BI", level: 5 },
              { name: "Tableau", level: 5 },
              { name: "Vercel", level: 5 },
            ]}
          />

         
        </div>
      </div>
    </section>
  );
};

export default Skills;
