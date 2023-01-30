import React, { useContext } from 'react'
import guy from '@/assets/lautarito.png'
import './About.css'
import { Button } from '@/components'
import { ThemeContext } from '@/App'

export interface AboutInterface {}

const About: React.FC<AboutInterface> = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)

  return (
    <section className={`About ${darkMode ? 'darkmode' : ''}`} id="about">
      <div className="about-container">
        <div className="text-container">
          <h1 className="title">About me</h1>
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
        <img className="image" src={guy} alt="" />
      </div>
    </section>
  )
}

export default About
