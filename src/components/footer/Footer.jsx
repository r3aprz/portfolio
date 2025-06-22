import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Francesco</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
                <a 
                    href="https://www.linkedin.com/in/francesco-de-micco-b55034210/" 
                    className="footer__social-link" target='_blank'>
                    <i className="uil uil-linkedin-alt"></i>
                </a>

                <a 
                    href="https://github.com/r3aprz" 
                    className="footer__social-link" target='_blank'>
                    <i className="uil uil-github-alt"></i>
                </a>

                <a 
                    href="https://t.me/fdm182" 
                    className="footer__social-link" target='_blank'>
                    <i className="uil uil-telegram-alt"></i>
                </a>

                <a 
                    href="https://www.instagram.com/fraachakra/" 
                    className="footer__social-link" target='_blank'>
                    <i className="uil uil-instagram"></i>
                </a>
            </div>

            <span className='footer__copy'>
                &#169; {new Date().getFullYear()} - Francesco De Micco - All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer