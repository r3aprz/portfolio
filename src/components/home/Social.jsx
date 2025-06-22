import React from 'react'

const Social = () => {
  return (
    <div className="home__social" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200" >
        <a 
          href="https://www.linkedin.com/in/francesco-de-micco-b55034210/" 
          className="home__social-icon" target='_blank'>
            <i className="uil uil-linkedin-alt"></i>
        </a>

        <a 
          href="https://github.com/r3aprz" 
          className="home__social-icon" target='_blank'>
            <i className="uil uil-github-alt"></i>
        </a>

        <a 
          href="https://t.me/fdm182" 
          className="home__social-icon" target='_blank'>
            <i className="uil uil-telegram-alt"></i>
        </a>

        <a 
          href="https://www.instagram.com/fraachakra/" 
          className="home__social-icon" target='_blank'>
            <i className="uil uil-instagram"></i>
        </a>

    </div>
  )
}

export default Social