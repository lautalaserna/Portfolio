import React from 'react'
import guy from '@/assets/lautarito.png'
import './About.css'
import { Button } from '@/components'

export interface AboutInterface {}

const About: React.FC<AboutInterface> = () => {
  return (
    <section className="About" id="about">
      <img className="image" src={guy} alt="" />
      <div className="container">
        <h1 className="title">About me</h1>
        <div className="container-info">
          <p>
            My name is Lautaro Laserna and I'm a passionate developer from Argentina. I truly enjoy designing things and
            bringing ideas to life. I'm always looking to learn new skills and become a better software engineer.
          </p>
          <p>
            Currently I'm working as a Java developer in Disytel Consulting SA and I'm finishing my degree as a software
            engineer.
          </p>
          <div className="btn-container">
            <Button content="Download CV" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
