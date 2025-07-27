import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-dark text-white py-5">
      <div className="container" data-aos="fade-up">
        <h2 className="text-center fw-bold mb-5">Contact</h2>
        <form className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea className="form-control" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-warning w-100 fw-bold">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;