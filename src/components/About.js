import React from "react";
import "./About.css";
import webImg from "../assets/web.png";
import uiImg from "../assets/ui.png";
import mobImg from "../assets/mob.png";

const About = () => {
  return (
    <section
      id="about"
      className="about-section bg-E8EDDF text-333533 min-h-screen py-16 px-6"
    >
      <div className="container">
        {/* About Me Card */}
        <div className="about-card" data-aos="fade-up">
          <h2 className="section-title text-4xl font-bold text-14213D mb-8 border-b-2 border-FCA311 pb-2 inline-block">
           <span>👩🏻‍💻</span> About Me
          </h2>
          <p className="about-text text-lg leading-relaxed text-242423 mb-6 ">
            I am <strong>Sadia Dayo</strong>, a dedicated{" "}
            <strong>Software Engineer</strong> with a Bachelor’s degree in
            Software Engineering from <strong>Sukkur IBA University</strong>, an
            esteemed AACSB-accredited institution. Awarded the prestigious{" "}
            <strong>Sindh Endowment Scholarship</strong>, I graduated with a
            CGPA of 2.9, expected in 2025, reflecting my commitment to academic
            excellence and professional growth.
          </p>
          <br></br>
          <p className="about-text text-lg leading-relaxed text-242423 mb-6">
            My professional journey includes hands-on experience through
            internships at <strong>Prodigy InfoTech</strong>,{" "}
            <strong>CodeAlpha</strong>, and{" "}
            <strong>Motiventive Software Company</strong>. At Prodigy InfoTech
            and CodeAlpha, I developed responsive web applications such as
            e-commerce platforms, weather dashboards, and interactive games
            using{" "}
            <strong>React.js, JavaScript, and MERN stack technologies</strong>.
            At Motiventive, I deepened my expertise in{" "}
            <strong>frontend development with React</strong>, enhanced my{" "}
            <strong>UI/UX design skills with Figma and Canva</strong>, and
            gained proficiency in{" "}
            <strong>collaboration tools like Miro and Microsoft Word</strong>{" "}
            for project management and documentation.
          </p>{" "}
          <br></br>
          <p className="about-text text-lg leading-relaxed text-242423">
            With a robust skill set encompassing{" "}
            <strong>
              full-stack development (MERN), UI/UX design, mobile app
              development (Kotlin, SQLite)
            </strong>
            , and emerging technologies like blockchain with{" "}
            <strong>Solidity</strong>, I thrive on delivering end-to-end
            solutions. My approach integrates{" "}
            <strong>clean code practices</strong> with{" "}
            <strong>user-centered design</strong>, ensuring scalable,
            high-performance applications that meet modern industry standards.
          </p>
        </div>

        {/* General Services Card */}
        <div className="services-card " data-aos="fade-up" data-aos-delay="100">
          <h3 className="card-title text-2xl font-semibold text-14213D mb-6 border-b-2 border-FCA311 pb-2">
            💻 Services
          </h3>
          <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="service-item flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img src={webImg} alt="Full-Stack Development" />
              <div>
                <h4 className="service-title text-xl font-semibold text-14213D">
                  Full-Stack Development
                </h4>
                <p className="service-desc text-242423 text-sm">
                  Designing and developing scalable, responsive web applications
                  using the{" "}
                  <strong>
                    MERN stack (MongoDB, Express.js, React.js, Node.js)
                  </strong>
                  . Skilled in building RESTful APIs, integrating frontend and
                  backend seamlessly, and implementing Agile practices for
                  clean, maintainable, and high-performance codebases.
                </p>
              </div>
            </div>
            <div className="service-item flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img src={uiImg} alt="Product Design" />
              <div>
                <h4 className="service-title text-xl font-semibold text-14213D">
                  Product Design
                </h4>
                <p className="service-desc text-242423 text-sm">
                  Delivering user-centered UI/UX solutions through wireframing,
                  prototyping, and design thinking using tools like{" "}
                  <strong>Figma</strong> and <strong>Canva</strong>. Focused on
                  crafting intuitive, accessible, and visually consistent
                  designs that drive engagement and enhance user satisfaction.
                </p>
              </div>
            </div>
            <div className="service-item flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img src={mobImg} alt="Mobile & Emerging Tech" />
              <div>
                <h4 className="service-title text-xl font-semibold text-14213D">
                  Mobile & Emerging Tech
                </h4>
                <p className="service-desc text-242423 text-sm">
                  Specializing in mobile application development using{" "}
                  <strong>Kotlin</strong> and <strong>Flutter</strong> to build
                  sleek, high-performance Android and cross-platform apps.
                  Focused on clean architecture, intuitive UI, and smooth user
                  experiences, with strong integration of local storage using{" "}
                  <strong>SQLite</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education Card */}
        <div
          className="education-card "
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h3 className="card-title text-2xl font-semibold text-14213D mb-4 border-b-2 border-FCA311 pb-2">
            🎓 Education
          </h3>
          <ul className="education-list text-242423 space-y-4">
            <li>
              <strong>BS in Software Engineering</strong>
              <br />
              Sukkur IBA University (AACSB Accredited) –{" "}
              <em>CGPA: 2.9 | Expected 2025</em>
              <br />
              <span className="text-sm text-FCA311">
                Sindh Endowment Scholarship Awardee
              </span>
            </li>
            <li>
              <strong>Intermediate (Pre-Engineering)</strong>
              <br />
              Govt. Degree College, Shikarpur – <em>2020</em>
            </li>
            <li>
              <strong>Matriculation (Science)</strong>
              <br />
              IBA District Montessori School, Shikarpur – <em>2018</em>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
