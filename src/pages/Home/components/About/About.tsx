import { Button } from '@/components'
import { ThemeContext } from '@/context'
import { motion } from 'framer-motion'
import React, { useContext, useState } from 'react'
import './About.css'
import happyGuy from './assets/lautarito-feliz.png'
import guy from './assets/lautarito.png'
import cv from './assets/Lautaro Laserna.pdf'
import imgCV from './assets/cv.png'

export interface AboutInterface {}

const About: React.FC<AboutInterface> = () => {
  const [img, setImg] = useState(imgCV)
  const { darkMode } = useContext(ThemeContext)

  const handleClick = () => {
    console.log('TODO: Descargar el CV')
  }

  const aboutContainer = {
    onscreen: {
      transition: {
        staggerChildren: 0.3,
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
        duration: 0.4,
      },
    },
  }

  return (
    <section className={`About ${darkMode ? 'darkmode' : ''}`} id="about">
      <motion.div
        className="about-container"
        variants={aboutContainer}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="text-container">
          <motion.h1 className="title" variants={aboutItem}>
            Who am I.
          </motion.h1>
          <motion.p variants={aboutItem}>
            Hi, I'm Lauti! A passionate developer from Argentina. I have a strong base in object oriented programming,
            design patterns, software architecture and database management. I'm always looking to learn new skills and
            become a better software engineer as well as a person.
          </motion.p>
          <motion.p variants={aboutItem}>
            Currently I'm working as a Desktop Java Developer in Disytel Consulting S.A. and I'm finishing my degree as
            a Software Engineer.
          </motion.p>
        </div>
        <motion.div className="btn-container" variants={aboutItem}>
          <img src={img} className="image" alt="" />
{/*           <img
            className="image"
            src={img}
            alt=""
            onMouseOver={() => {
              setImg(happyGuy)
            }}
            onMouseLeave={() => {
              setImg(guy)
            }}
          /> */}
          <a href={cv} download>
            <Button onClick={handleClick} content="Download CV" />
          </a>
        </motion.div>
      </motion.div>
      <div className="divider-bottom"></div>
    </section>
  )
}

export default About
