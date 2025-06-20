import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {
  return (
    <>
      <section className="skills section" id="skills">
        <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My tecnical level</span>
        </div>
        

        <div className="skills__container container grid">
          <Frontend></Frontend>
          <Backend></Backend>
        </div>
      </section>
    </>
  )
}

export default Skills