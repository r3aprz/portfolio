import React from 'react'
import Handicon from './icons/Handicon.jsx'
import Sendicon from './icons/Sendicon.jsx'

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">
          Francesco <Handicon></Handicon>
        </h1>
        <h3 className="home__subtitle"><span className="typedText">Web Developer</span></h3>
        <p className='home__description'>
            I'm a web developer based in Naples. 22 yeras old.
        </p>

        <a href="#contact" className="button button--flex">
          Say Hello
          <Sendicon></Sendicon>
        </a>
    </div>
  )
}

export default Data