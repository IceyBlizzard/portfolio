import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index: React.SetStateAction<number>) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>
            </div>
            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                        <h3 className="qualification__title">Software Engineer II</h3>
                        <span className="qualification__subtitle">Longevity Intime - Delaware, U.S</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> Feb '21 - Present
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
                            <h3 className="qualification__title">Associate Software Engineer</h3>
                            <span className="qualification__subtitle">Rakuten - Bengaluru, India</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Mar '20 - Feb '21
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Data Scientist Intern</h3>
                            <span className="qualification__subtitle">Microsoft - Bengaluru, India</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> Jan '20 - Feb '20
                            </div>
                        </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Computer Science & Engineering (B.E)</h3>
                            <span className="qualification__subtitle">Dayananda Sagar Institution</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2015 - 2019
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
                        <h3 className="qualification__title">Pre-University</h3>
                        <span className="qualification__subtitle">Sri Aurobindo PU College</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2014 - 2015
                        </div>
                        </div>
                    </div>
                 <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">High School</h3>
                        <span className="qualification__subtitle">Highway English School</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> 2013 - 2014
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
  )
}

export default Qualification