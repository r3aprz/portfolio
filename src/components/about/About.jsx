import React from 'react'
import './about.css'
import AboutImg from "../../assets/about.JPG"
import CV from "../../assets/De_Micco_CV_25_2.pdf"
import Info from './Info'
import Fileicon from './icons/Fileicon.jsx'

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About me</h2>
      <span className="section__subtitle">My introduction</span>
        
      <div className="about__container container grid">
        <img src={AboutImg} alt="about-img" className="about__img" />

        <div className="about__data">
          <Info></Info>

          <p className="about__description">
            Frontend and Backend developer. I have years of experience in creating responsive and fast web application.
          </p>

          <a download="" href={CV} className="button button--flex">Download CV 
            <Fileicon></Fileicon>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About