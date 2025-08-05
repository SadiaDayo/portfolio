import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';
import icon from "../assets/profile.png";
const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience','skills', 'projects', 'contact'];
      const scrollY = window.scrollY;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 80;
          const bottom = top + el.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveLink(section);
            break;
          }
        }
      }

      if (scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-black fixed-top shadow ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <img width={30}height={30} src={icon} alt="Full-Stack Development" />
        <a className="navbar-brand text-warning fw-bold" href="#home">Sadia Dayo</a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center text-uppercase gap-2">
            {['home', 'about', 'experience','skills', 'projects', 'contact'].map((item) => (
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