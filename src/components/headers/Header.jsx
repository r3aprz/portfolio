import React, { useState, useEffect } from 'react'
import './header.css'

const sections = ['home', 'about', 'skills', 'services', 'qualification', 'contact'];

const Header = () => {

  /* ========== Change Background Header ============= */
  window.addEventListener('scroll', function() {
      const header = document.querySelector('.header');

      if (this.scrollY >= 80) 
          header.classList.add('scroll-header');
      else 
          header.classList.remove('scroll-header');
  });


  /* ========== Toggle Menu ============= */
  const [toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');
  
  // const handleLinkClick = () => showMenu(false);

  /* ========== Dark mode ============= */
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved !== null) {
      if (saved === 'dark') document.body.classList.add('dark-theme');
      else document.body.classList.remove('dark-theme');
      return saved === 'dark';
    }
    document.body.classList.add('dark-theme');
    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prev => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      let current = '#home';

      sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop - 80; // offset for header
          const sectionHeight = section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = `#${id}`;
          }
        }
      });

      setActiveNav(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">Francesco</a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" onClick={() => {setActiveNav('#home'); showMenu(false);}} className={activeNav === '#home' ? "nav__link active-link" : "nav__link"} >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" onClick={() => {setActiveNav('#about'); showMenu(false);}} className={activeNav === '#about' ? "nav__link active-link" : "nav__link"} >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" onClick={() => {setActiveNav('#skills'); showMenu(false);}} className={activeNav === '#skills' ? "nav__link active-link" : "nav__link"} >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" onClick={() => {setActiveNav('#services'); showMenu(false);}} className={activeNav === '#services' ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>
            {/* <li className="nav__item">
              <a href="#portfolio" onClick={() => {setActiveNav('#portfolio'); showMenu(false);}} className={activeNav === '#portfolio' ? "nav__link active-link" : "nav__link"} >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li> */}
            <li className="nav__item">
              <a href="#qualification" onClick={() => {setActiveNav('#qualification'); showMenu(false);}} className={activeNav === '#qualification' ? "nav__link active-link" : "nav__link"} >
                <i className="uil uil-book-open nav__icon"></i> Qualification
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" onClick={() => {setActiveNav('#contact'); showMenu(false);}} className={activeNav === '#contact' ? "nav__link active-link" : "nav__link"}>
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(!toggle)}></i>
        </div>

        <i 
          className={`uil ${darkMode ? 'uil-sun' : 'uil-moon'} change-theme`} 
          id="theme-button" 
          onClick={toggleTheme}
          style={{ cursor: 'pointer' }}
        ></i>
        
        <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header