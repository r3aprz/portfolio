import React from 'react'
import Scrollicon from './icons/Scrollicon.jsx'

const ScrollDown = () => {
  return (
    <div className="home__scroll" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" >
        <a href="#about" className="home__scroll-button button--flex">
            <Scrollicon></Scrollicon>
            <span className="home_scroll-name">Scroll Down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
        </a>
    </div>
  )
}

export default ScrollDown