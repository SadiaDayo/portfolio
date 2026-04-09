import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const recipient = "sadiadayo5@gmail.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (!showModal) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showModal]);

  const handleSend = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setShowModal(false);
    setSuccessMsg(true);

    setTimeout(() => {
      setSuccessMsg(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact-section" aria-label="Contact section">
      <div className="contact-overlay">
        <div className="contact-content">
          <div className="contact-left">
            <h2 className="text-primary-custom">
  <span className="heading-icon">✉</span>
  Get In Touch
</h2>

            <p className="contact-intro">
              I’d love to hear from you. Whether you have a project idea, a job
              opportunity, or want to collaborate, feel free to reach out.
            </p>

           <div className="contact-info">
  <div className="info-item">
    <span className="info-icon">📍</span>
    <span>Shikarpur, Pakistan</span>
  </div>

  <div className="info-item">
    <span className="info-icon">✉️</span>
    <span>sadiadayo5@gmail.com</span>
  </div>
</div>

<div className="social-icons" aria-label="Social links">
  <a
    href="https://linkedin.com/in/sadia-dayo"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn profile"
  >
    <FaLinkedin size={22} />
  </a>

  <a
    href="https://github.com/SadiaDayo"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub profile"
  >
    <FaGithub size={22} />
  </a>
</div>

<button
  className="btn-outline-custom"
  onClick={() => setShowModal(true)}
  type="button"
>
  Send Me a Message
</button>

            {successMsg && (
              <div className="success-popup" role="status" aria-live="polite">
                ✅ Your email app is ready to send your message.
              </div>
            )}

            {showModal && (
              <div
                className="modal-overlay"
                onClick={closeModal}
                role="dialog"
                aria-modal="true"
                aria-labelledby="contact-modal-title"
              >
                <div
                  className="modal-card fade-in"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3 id="contact-modal-title">Send a Message</h3>

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
                      rows="5"
                    ></textarea>

                    <button type="submit" className="btn-outline-custom w-100">
                      Send via Email
                    </button>

                    <button
                      type="button"
                      className="btn-cancel"
                      onClick={closeModal}
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
