import React from 'react'
import './skills.css'
import Lenguages from './Lenguages'
import IDE_OS from './IDE_OS'

const Skills = () => {
  return (
    <>
      <section className="skills section" id="skills">
        <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My tecnical level</span>
        </div>
        
        <div className="skills__container container grid">
          <Lenguages></Lenguages>
          <IDE_OS></IDE_OS>
        </div>
      </section>
    </>
  )
}

export default Skills