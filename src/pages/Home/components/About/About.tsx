import { Button } from '@/components'
import { ThemeContext } from '@/context'
import React, { useContext, useState } from 'react'
import './About.css'
import happyGuy from './assets/lautarito-feliz.png'
import guy from './assets/lautarito.png'

export interface AboutInterface {}

const About: React.FC<AboutInterface> = () => {
  const [img, setImg] = useState(guy)
  const { darkMode } = useContext(ThemeContext)

  const handleClick = () => {
    console.log('Hola');
  }

  return (
    <section className={`About ${darkMode ? 'darkmode' : ''}`} id="about">
      <div className="about-container">
        <div className="text-container">
          <h1 className="title">Who am I?</h1>
          <p>
            Hi, I'm Lauti! A passionate developer from Argentina. I have a strong base in object
            oriented programming, design patterns, software architecture and database management. I'm always looking to
            learn new skills and become a better software engineer as well as a person.
          </p>
          <p>
            Currently I'm working as a Desktop Java Developer in Disytel Consulting S.A. and I'm finishing my degree as a
            Software Engineer.
          </p>
        </div>
        <div className="btn-container">
          <img
            className="image"
            src={img}
            alt=""
            onMouseOver={() => {
              setImg(happyGuy)
            }}
            onMouseLeave={() => {
              setImg(guy)
            }}
          />
          <Button onClick={handleClick} content="Download CV" />
        </div>
      </div>
      <div className="divider-bottom"></div>
    </section>
  )
}

export default About
