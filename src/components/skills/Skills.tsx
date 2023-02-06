import React from 'react'
import "./skills.css"
import MachineLearning from './MachineLearning'
import Backend from './Backend'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>
        <div className="skills__container container grid">
            <MachineLearning />
            <Backend />
        </div>
    </section>
  )
}

export default Skills