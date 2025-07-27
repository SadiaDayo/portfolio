import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    // Set active link based on scroll position or initial hash
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      const scrollY = window.scrollY;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 80; // adjust offset
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    handleScroll(); // on load
    window.addEventListener('scroll', handleScroll); // on scroll

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top shadow border-bottom border-warning">
      <div className="container">
        <a className="navbar-brand text-warning fw-bold" href="#home">Sadia Dayo</a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center text-uppercase gap-2">
            {['home', 'about', 'projects', 'experience', 'contact'].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  href={`#${item}`}
                  className={`nav-link ${activeLink === item ? 'text-warning fw-bold' : 'text-light'}`}
                  onClick={() => setActiveLink(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
