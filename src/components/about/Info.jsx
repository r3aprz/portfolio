import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="bx bx-credit-card about__icon"></i>
            <h3 className="about__title">Front-end</h3>
            <span className="about__subtitle">Clean & elegant UX</span>
        </div>

        <div className="about__box">
            <i className="bx bx-gear about__icon"></i>
            <h3 className="about__title">Back-end</h3>
            <span className="about__subtitle">High-speed logic</span>
        </div>

        <div className="about__box">
            <i className="bx bx-server about__icon"></i>
            <h3 className="about__title">Database</h3>
            <span className="about__subtitle">Optimized storage</span>
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