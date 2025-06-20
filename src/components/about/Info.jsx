import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="bx bxs-medal-star-alt about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">2 + years</span>
        </div>

        <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">10 + project</span>
        </div>

        <div className="about__box">
            <i className="bx bx-headphone-mic about__icon"></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>

        {/* <div className="about__box">
            <i className="bx bx-headphone-mic about__icon"></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div> */}
    </div>
  )
}

export default Info