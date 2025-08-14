import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaEnvelope,FaHandPointDown } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [successMsg, setSuccessMsg] = useState(false); // ✅ New state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    const recipient = "sadiadayo5@gmail.com";
    const subject = encodeURIComponent(`Message from ${formData.name} (${formData.email})`);
    const body = encodeURIComponent(formData.message);

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`,
      "_blank"
    );

    setShowModal(false);
    setFormData({ name: "", email: "", message: "" });

    // ✅ Show popup message
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-overlay">
        <div className="contact-content">
          <div className="contact-left">
            <h2 className="fw-bold mb-3 text-primary-custom">Get in Touch</h2>
            <p className="contact-intro">
              I’d love to hear from you! Whether you have a question, want to collaborate, 
              or just say hello - drop me a message below. <FaHandPointDown/>
            </p>

            <div className="contact-info mb-4">
              <p><FaMapMarkerAlt /> Shikarpur, Pakistan</p>
              <p><FaEnvelope /> Click the button below to send me an email</p>
            </div>

            <div className="social-icons mt-3">
              <a href="https://linkedin.com/in/sadia-dayo" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/sadia-dayo" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>

            <button className="btn-outline-custom mt-4" onClick={() => setShowModal(true)}>
              Send an Email
            </button>

            {/* ✅ Success Popup */}
            {successMsg && (
              <div className="success-popup">
                ✅ Your Gmail is ready to send!
              </div>
            )}

            {/* Modal */}
            {showModal && (
              <div className="modal-overlay" onClick={() => setShowModal(false)}>
                <div className="modal-card fade-in" onClick={(e) => e.stopPropagation()}>
                  <h3>Send a Message</h3>
                  <form onSubmit={handleSend}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>

                    <button type="submit" className="btn-outline-custom w-100">
                      Send via Gmail
                    </button>
                    <button
                      type="button"
                      className="btn-cancel"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
