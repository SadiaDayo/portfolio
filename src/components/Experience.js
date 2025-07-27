import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="bg-light py-5">
      <div className="container" data-aos="fade-up">
        <h2 className="text-center fw-bold mb-5">Experience</h2>
        <div className="row">
          <div className="col-md-6">
            <h5 className="text-warning">Web Developer Intern – Prodigy InfoTech</h5>
            <p>Built multiple apps: stopwatch, Tic-Tac-Toe, weather app, portfolio overhaul.</p>
            <p><strong>Tools:</strong> HTML, CSS, JavaScript, Bootstrap</p>
          </div>
          <div className="col-md-6">
            <h5 className="text-warning">Web Developer Intern – CodeAlpha</h5>
            <p>Contributed to live portfolio and dashboard projects in a collaborative environment.</p>
            <p><strong>Tools:</strong> HTML, CSS, JavaScript</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;