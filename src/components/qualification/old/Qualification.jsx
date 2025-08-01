import React, {useState} from 'react'
import './qualification.css'

const Qualification = () => {

    const [toggleQualification, setToggleQualification] = useState(1);

    const toggleQualiTab = (index) => {
        setToggleQualification(index);
    };

  return (
    <>
        <section className="qualification section">
            <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
                <h2 className="section__title">Qualification</h2>
                <span className="section__subtitle">My personal journey</span>
            </div>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleQualification === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleQualiTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                        Education
                    </div>

                    <div className={toggleQualification === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleQualiTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleQualification === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">AAAAAAA</h3>
                                <span className="qualification__subtitle">
                                    Naples - Institute
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">BBBBBBB</h3>
                                <span className="qualification__subtitle">
                                    Naples - Institute
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>

                            
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">AAAAAAA</h3>
                                <span className="qualification__subtitle">
                                    Naples - Institute
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">BBBBBBB</h3>
                                <span className="qualification__subtitle">
                                    Naples - Institute
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>

                            
                        </div>
                    </div>

                    <div className={toggleQualification === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">AAAAAAA</h3>
                                <span className="qualification__subtitle">
                                    Naples - Institute
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">BBBBBBB</h3>
                                <span className="qualification__subtitle">
                                    Naples - Institute
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>

                            
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">AAAAAAA</h3>
                                <span className="qualification__subtitle">
                                    Naples - Institute
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Qualification