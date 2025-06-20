import React, { useEffect, useRef } from 'react'
import Handicon from './icons/Handicon.jsx'
import Sendicon from './icons/Sendicon.jsx'
import Typed from 'typed.js';

const Data = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Web Developer", "Frontend Developer", "Backend Developer", "Database expert"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000
    });

    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <div className="home__data" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" >
        <h1 className="home__title">
          Francesco <Handicon></Handicon>
        </h1>
        <h3 className="home__subtitle"><span className="typedText" ref={typedRef}>Web Developer</span></h3>
        <p className='home__description'>
            I'm a web developer based in Naples. 22 yeras old with over one year of experience.
        </p>

        <a href="#contact" className="button button--flex">
          Say Hello
          <Sendicon></Sendicon>
        </a>
    </div>
  )
}

export default Data