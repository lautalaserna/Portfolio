import { ThemeContext } from '@/App'
import guy from '@/assets/lautarito.png'
import happyGuy from '@/assets/lautarito-feliz.png'
import test from '@/assets/test.png'
import { Button } from '@/components'
import React, { useContext, useState } from 'react'
import './About.css'

export interface AboutInterface {}

const About: React.FC<AboutInterface> = () => {
  const [img, setImg] = useState(guy)
  const { darkMode } = useContext(ThemeContext)

  return (
    <section className={`About ${darkMode ? 'darkmode' : ''}`} id="about">
      <div className="divider-top"></div>
      <div className="about-container">
        <div className="text-container">
          {/* <h1 className="title">About me</h1> */}
          <h1 className="title">Who am I?</h1>
          <p>
            My name is Lautaro Laserna and I'm a passionate developer from Argentina. I have a strong base in object
            oriented programming, design patterns, clean architecture and database management. I'm always looking to
            learn new skills and become a better software engineer as well as a person.
          </p>
          <p>
            Currently I'm working as a desktop Java developer in Disytel Consulting SA and I'm finishing my degree as a
            software engineer.
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
          <Button content="Download CV" />
        </div>
      </div>
      <div className="divider-bottom"></div>
    </section>
  )
}

export default About
