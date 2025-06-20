import React, { useState } from 'react'
import "./services.css"

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="services section" id="services">
      <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i can do for you</span>
      </div>

      <div className="services__container container grid">
        <div className="services__content" >
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title"> Frontend <br/> Developer</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

              <h3 className="services__modal-title">Frontend Developer</h3>
              <p className="services__modal-description">
                I build modern, responsive, and intuitive web interfaces using HTML, CSS, and JavaScript, along with frameworks like React or tailwindcss, to deliver engaging digital experiences.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Custom, responsive websites that look great on all devices, from desktop to mobile.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    User-friendly interfaces designed with usability and accessibility in mind.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Performance-optimized front-ends using clean code and modern frameworks like React or Vue.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Pixel-perfect implementations based on Figma, Adobe XD, or Sketch design files.
                  </p>
                </li>
              </ul>

            </div>
          </div>
        </div>

        <div className="services__content" >
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
            <i className="uil uil-setting services__icon"></i>
            <h3 className="services__title"> Backend <br/> Developer</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

              <h3 className="services__modal-title">Backend Developer</h3>
              <p className="services__modal-description">
                I develop server-side logic, RESTful APIs, and scalable systems using technologies like Node.js, Python, or PHP, ensuring performance, security, and reliability.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Robust APIs and server-side logic built with Node.js, Express, or Flask.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Secure authentication systems and role-based access control for user management.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Integration with third-party services such as payment gateways, email, and cloud storage APIs.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Scalable back-end architectures ready to handle growth and increased traffic.
                  </p>
                </li>
              </ul>

            </div>
          </div>
        </div>

        <div className="services__content" >
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
            <i className="uil uil-database services__icon"></i>
            <h3 className="services__title"> Database <br/> Expert</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
            View More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>

              <h3 className="services__modal-title">Database Expert</h3>
              <p className="services__modal-description">
                I design and manage relational (MySQL, PostgreSQL) and NoSQL (MongoDB) databases, optimizing queries and structures for high performance and data integrity.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Efficient database schema design tailored to the application’s data model.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Optimization of queries and indexing to boost performance and reduce load times.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Data migration and transformation from legacy systems or different platforms.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Backup strategies and data integrity checks to ensure long-term reliability.
                  </p>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
