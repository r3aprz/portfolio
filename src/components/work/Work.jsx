import React from 'react'
import './work.css'
import Works from './Works'

const Work = () => {
  return (
    <>
      <section className="work section" id="portfolio">
        <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
          <h2 className="section__title">Projects</h2>
          <span className="section__subtitle">Most recent works</span>
        </div>

        <Works></Works>
      </section>
    </>
  )
}

export default Work