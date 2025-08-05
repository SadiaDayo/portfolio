import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills.js';
import CustomCursor from "./components/CustomCursor";
import 'animate.css';
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
     <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
