import { Button } from '@/components'
import { ThemeContext } from '@/context'
import { motion } from 'framer-motion'
import React, { useContext, useState } from 'react'
import './About.css'
import happyGuy from './assets/lautarito-feliz.png'
import guy from './assets/lautarito.png'

export interface AboutInterface {}

const About: React.FC<AboutInterface> = () => {
  const [img, setImg] = useState(guy)
  const { darkMode } = useContext(ThemeContext)

  const handleClick = () => {
    console.log('Hola')
  }

  const aboutContainer = {
    show: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.5,
      },
    },
  }

  const aboutItem = {
    offscreen: {
      opacity: 0,
      y: 150,
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 0.8,
      },
    },
  }

  return (
    <section className={`About ${darkMode ? 'darkmode' : ''}`} id="about">
      <div className="about-container">
        <div className="text-container">
          <motion.h1 className="title" variants={aboutItem} initial="offscreen" whileInView="onscreen">
            Who am I?
          </motion.h1>
          <motion.p variants={aboutItem} initial="offscreen" whileInView="onscreen">
            Hi, I'm Lauti! A passionate developer from Argentina. I have a strong base in object oriented programming,
            design patterns, software architecture and database management. I'm always looking to learn new skills and
            become a better software engineer as well as a person.
          </motion.p>
          <motion.p variants={aboutItem} initial="offscreen" whileInView="onscreen">
            Currently I'm working as a Desktop Java Developer in Disytel Consulting S.A. and I'm finishing my degree as
            a Software Engineer.
          </motion.p>
        </div>
        <motion.div className="btn-container" variants={aboutItem} initial="offscreen" whileInView="onscreen">
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
        </motion.div>
      </div>
      <div className="divider-bottom"></div>
    </section>
  )
}

export default About
