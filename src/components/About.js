import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section bg-black text-white min-h-screen py-16 px-6">
          <div className="glow-circle"></div>
      <div className="container" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10 border-b-2 pb-2 inline-block">
          About Me
        </h2>

        <div className="max-w-5xl mx-auto">
          <p className="text-lg leading-loose text-gray-300 mb-10">
            I’m <strong>Sadia Dayo</strong>, a passionate and creative <strong>Software Engineer</strong> dedicated to building innovative and user-centric digital experiences. With a strong foundation in <strong>frontend development</strong>, <strong>UI/UX design</strong>, and modern web technologies, I specialize in translating complex ideas into clean, functional, and responsive web solutions.
            <br /><br />
            I thrive in dynamic environments where I can apply my problem-solving mindset to real-world challenges. Whether it’s designing intuitive interfaces or optimizing performance, my goal is to deliver seamless and impactful user experiences. I am constantly exploring new technologies, enhancing my skills, and collaborating on projects that push the boundaries of what’s possible on the web.
          </p>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  {/* Technical Skills */}
  <div data-aos="fade-right" data-aos-delay="200">
    <h5 className="text-xl font-semibold text-yellow-400 mb-4">🔧 Technical Skills</h5>
    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li><strong>Languages:</strong> Flutter, JavaScript, Python, Java, C++</li>
      <li><strong>Web Development:</strong> React.js, Redux, Node.js, MongoDB</li>
      <li><strong>Styling:</strong> HTML5, CSS3, Bootstrap, Tailwind CSS</li>
      <li><strong>Tools:</strong> Git, GitHub, Miro, PowerBI, Tableau, Postman, REST APIs</li>
      <li><strong>Design:</strong> Figma, Adobe XD, UI/UX Prototyping</li>
    </ul>
  </div>

  {/* Education */}
  <div data-aos="fade-left" data-aos-delay="300">
    <h5 className="text-xl font-semibold text-yellow-400 mb-4">🎓 Education</h5>
    <ul className="text-gray-300 space-y-4">
      <li>
        <strong>BS in Software Engineering</strong><br />
        Sukkur IBA University – <em>Expected 2025</em>
      </li>
      <li>
        <strong>Intermediate (Pre-Engineering)</strong><br />
        Govt. Degree College, Shikarpur – <em>2020</em>
      </li>
      <li>
        <strong>Matriculation (Science)</strong><br />
        IBA District Montessori School, Shikarpur – <em>2018</em>
      </li>
    </ul>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default About;
