import React, { useState } from 'react'
import { educationData, experienceData } from './Data'
import './qualification.css'
import TimeLine from './TimeLine';

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
      <section className="qualification section" ref={sectionRef} id="qualification">
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
            {/* -------- education -------- */}
            <div
              key={toggleQualification + '-' + contentKey + '-' + inView}
              className={toggleQualification === 1 ? "qualification__content qualification__content-active" : "qualification__content"}
            >
              {toggleQualification === 1 && data.map((item, idx) => (
                <TimeLine item={item} idx={idx} key={idx} inView={inView} data={data} />
                // <div className="qualification__data" key={idx}>
                //   <div>
                //     {item.left && (
                //       <div
                //         className={`qualification__animated${inView ? "" : " qualification__animated--reset"}`}
                //         style={{ animationDelay: `${idx * 0.6 + 0.7}s` }}
                //       >
                //         <TimelineItem title={item.left.title} subtitle={item.left.subtitle} calendar={item.left.calendar}></TimelineItem>
                //       </div>
                //     )}
                //   </div>
                //   <div>
                //     <span
                //       className={`qualification__rounder qualification__animated${inView ? "" : " qualification__animated--reset"}`}
                //       style={{ animationDelay: `${idx * 0.6 + 0.5}s` }}
                //     ></span>
                //     <span
                //         className={`qualification__line qualification__animated${inView ? "" : " qualification__animated--reset"}${idx === data.length - 1 ? " qualification__line--last" : ""}`}
                //         style={{ animationDelay: `${idx * 0.6 + 0.9}s` }}
                //     ></span>
                //   </div>
                //   <div>
                //     {item.right && (
                //       <div
                //         className={`qualification__animated${inView ? "" : " qualification__animated--reset"}`}
                //         style={{ animationDelay: `${idx * 0.6 + 0.2}s` }}
                //       >
                //         <TimelineItem title={item.right.title} subtitle={item.right.subtitle} calendar={item.right.calendar}></TimelineItem>
                //       </div>
                //     )}
                //   </div>
                // </div>
              ))}
            </div>
            
            {/* -------- experience -------- */}
            <div
              key={toggleQualification + 10 + '-' + contentKey + '-' + inView}
              className={toggleQualification === 2 ? "qualification__content qualification__content-active" : "qualification__content"}
            >
              {toggleQualification === 2 && data.map((item, idx) => (
                <TimeLine item={item} idx={idx} key={idx} inView={inView} data={data} />
                // <div className="qualification__data" key={idx}>
                //   <div>
                //     {item.left && (
                //       <div
                //         className={`qualification__animated${inView ? "" : " qualification__animated--reset"}`}
                //         style={{ animationDelay: `${idx * 0.6 + 0.7}s` }}
                //       >
                //         <TimelineItem title={item.left.title} subtitle={item.left.subtitle} calendar={item.left.calendar}></TimelineItem>
                //       </div>
                //     )}
                //   </div>
                //   <div>
                //     <span
                //       className={`qualification__rounder qualification__animated${inView ? "" : " qualification__animated--reset"}`}
                //       style={{ animationDelay: `${idx * 0.6 + 0.5}s` }}
                //     ></span>
                //     <span
                //       className={`qualification__line qualification__animated${inView ? "" : " qualification__animated--reset"}${idx === data.length - 1 ? " qualification__line--last" : ""}`}
                //       style={{ animationDelay: `${idx * 0.6 + 0.9}s` }}
                //     ></span>
                //   </div>
                //   <div>
                //     {item.right && (
                //       <div
                //         className={`qualification__animated${inView ? "" : " qualification__animated--reset"}`}
                //         style={{ animationDelay: `${idx * 0.6 + 0.2}s` }}
                //       >
                //         <TimelineItem title={item.right.title} subtitle={item.right.subtitle} calendar={item.right.calendar}></TimelineItem>
                //       </div>
                //     )}
                //   </div>
                // </div>
              ))}
            </div>
          
          </div>
        </div>
      </section>
    </>
  )
}

export default Qualification