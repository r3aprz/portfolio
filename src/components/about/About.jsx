import React from 'react'
import './about.css'
import AboutImg from "../../assets/about.JPG"
import CV from "../../assets/De_Micco_CV_25_2.pdf"
import Info from './Info'
import Fileicon from './icons/Fileicon.jsx'

const About = () => {
  return (
    <section className="about section" id="about">
      <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" >
        <h2 className="section__title">About me</h2>
        <span className="section__subtitle">My introduction</span>
      </div>
      
      <div className="about__container container grid">
        <img src={AboutImg} alt="about-img" className="about__img" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" />

        <div className="about__data" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="750" >
          <Info></Info>

          <p className="about__description">
            Frontend and Backend developer. I have years of experience in creating responsive and fast web application.
          </p>

          <a download href={CV} className="button button--flex download-cv-btn">Download CV 
            <Fileicon></Fileicon>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About