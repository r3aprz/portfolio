import React, { useState } from 'react'
import './qualification.css'

// Hook per Intersection Observer
function useInView(options = {}) {
  const ref = React.useRef();
  const [inView, setInView] = useState(false);

  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

const educationData = [
  {
    left: {
      title: "High School Diploma",
      subtitle: "Naples - ITI Enrico Medi",
      calendar: "2016 - 2021"
    },
    right: null
  },
  {
    left: null,
    right: {
      title: "Cibersecurity Foundamentals",
      subtitle: "Naples - Cisco",
      calendar: "2021 - 2021"
    }
  },
  {
    left: {
      title: "IOs Foundation (Base)",
      subtitle: "Naples - UniNa",
      calendar: "2022 - 2022"
    },
    right: null
  },
  {
    left: null,
    right: {
      title: "IOs Foundation (Advanced)",
      subtitle: "Naples - UniNa",
      calendar: "2023 - 2023"
    }
  },
  {
    left: {
      title: "Computer Sience Bachelor's Degree",
      subtitle: "Naples - UniParthenope",
      calendar: "2021 - 2025"
    },
    right: null
  },
  {
    left: null,
    right: {
      title: "Cybersecurtity Master's Degree",
      subtitle: "Salerno - UniSa",
      calendar: "2025 - Present"
    }
  },
];

const experienceData = [
  {
    left: {
      title: "Full Stack Web Developer",
      subtitle: "Naples - Freelance",
      calendar: "2021 - Present"
    },
    right: null
  },
  {
    left: null,
    right: {
      title: "Swift Full Stack Developer",
      subtitle: "Naples - UniNa",
      calendar: "2022 - 2023"
    }
  },
  {
    left: {
      title: "C# Full Stack Developer",
      subtitle: "Naples - 081Lab",
      calendar: "2024 - 2025"
    },
    right: null
  }
];

const Qualification = () => {
  const [toggleQualification, setToggleQualification] = useState(1);
  const [contentKey, setContentKey] = useState(0);
  const [sectionRef, inView] = useInView({ threshold: 0.2 });

  const toggleQualiTab = (index) => {
    setToggleQualification(index);
    setContentKey(prev => prev + 1);
  };

  const data = toggleQualification === 1 ? educationData : experienceData;

  return (
    <>
      <section className="qualification section" ref={sectionRef}>
        <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
          <h2 className="section__title">Qualification</h2>
          <span className="section__subtitle">My personal journey</span>
        </div>

        <div className="qualification__container container">
          <div className="qualification__tabs" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
            <div
              className={toggleQualification === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
              onClick={() => toggleQualiTab(1)}>
              <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
              Education
            </div>

            <div
              className={toggleQualification === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
              onClick={() => toggleQualiTab(2)}>
              <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
              Experience
            </div>
          </div>

          <div className="qualification__sections">
            <div
              key={toggleQualification + '-' + contentKey + '-' + inView}
              className={toggleQualification === 1 ? "qualification__content qualification__content-active" : "qualification__content"}
            >
              {toggleQualification === 1 && data.map((item, idx) => (
                <div className="qualification__data" key={idx}>
                  <div>
                    {item.left && (
                      <div
                        className={`qualification__animated${inView ? "" : " qualification__animated--reset"}`}
                        style={{ animationDelay: `${idx * 0.6 + 0.7}s` }}
                      >
                        <h3 className="qualification__title">{item.left.title}</h3>
                        <span className="qualification__subtitle">{item.left.subtitle}</span>
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i> {item.left.calendar}
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <span
                      className={`qualification__rounder qualification__animated${inView ? "" : " qualification__animated--reset"}`}
                      style={{ animationDelay: `${idx * 0.6 + 0.5}s` }}
                    ></span>
                    <span
                        className={`qualification__line qualification__animated${inView ? "" : " qualification__animated--reset"}${idx === data.length - 1 ? " qualification__line--last" : ""}`}
                        style={{ animationDelay: `${idx * 0.6 + 0.9}s` }}
                    ></span>
                  </div>
                  <div>
                    {item.right && (
                      <div
                        className={`qualification__animated${inView ? "" : " qualification__animated--reset"}`}
                        style={{ animationDelay: `${idx * 0.6 + 0.2}s` }}
                      >
                        <h3 className="qualification__title">{item.right.title}</h3>
                        <span className="qualification__subtitle">{item.right.subtitle}</span>
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i> {item.right.calendar}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div
              key={toggleQualification + 10 + '-' + contentKey + '-' + inView}
              className={toggleQualification === 2 ? "qualification__content qualification__content-active" : "qualification__content"}
            >
              {toggleQualification === 2 && data.map((item, idx) => (
                <div className="qualification__data" key={idx}>
                  <div>
                    {item.left && (
                      <div
                        className={`qualification__animated${inView ? "" : " qualification__animated--reset"}`}
                        style={{ animationDelay: `${idx * 0.6 + 0.7}s` }}
                      >
                        <h3 className="qualification__title">{item.left.title}</h3>
                        <span className="qualification__subtitle">{item.left.subtitle}</span>
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i> {item.left.calendar}
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <span
                      className={`qualification__rounder qualification__animated${inView ? "" : " qualification__animated--reset"}`}
                      style={{ animationDelay: `${idx * 0.6 + 0.5}s` }}
                    ></span>
                    <span
                      className={`qualification__line qualification__animated${inView ? "" : " qualification__animated--reset"}${idx === data.length - 1 ? " qualification__line--last" : ""}`}
                      style={{ animationDelay: `${idx * 0.6 + 0.9}s` }}
                    ></span>
                  </div>
                  <div>
                    {item.right && (
                      <div
                        className={`qualification__animated${inView ? "" : " qualification__animated--reset"}`}
                        style={{ animationDelay: `${idx * 0.6 + 0.2}s` }}
                      >
                        <h3 className="qualification__title">{item.right.title}</h3>
                        <span className="qualification__subtitle">{item.right.subtitle}</span>
                        <div className="qualification__calendar">
                          <i className="uil uil-calendar-alt"></i> {item.right.calendar}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Qualification