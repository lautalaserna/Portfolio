import { Button } from '@/components'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import './About.css'
import imgCV from './assets/cv.png'
import cv from './assets/Lautaro Laserna.pdf'

export interface AboutInterface {}

const About: React.FC<AboutInterface> = () => {
  const [img, setImg] = useState(imgCV)

  const handleClick = () => {
    console.log('Download CV')
  }

  const cvContainer = {
    offscreen: {
      opacity: 0,
      translateX: 120,
    },
    onscreen: {
      opacity: 1,
      translateX: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 400,
        duration: 0.5,
      },
    },
  }

  return (
    <section className={`About`} id="about">
      <div className="about-container">
        <div className="text-container">
          <motion.h1 className="title">Who am I.</motion.h1>
          <motion.p>
            Hi, I'm Lauti! A passionate developer from Argentina. I have a strong base in object oriented programming,
            design patterns, software architecture and database management. I'm always looking to learn new skills and
            become a better software engineer as well as a person.
          </motion.p>
          <motion.p>
            Currently I'm working as a Desktop Java Developer in Disytel Consulting S.A. and I'm finishing my degree as
            a Software Engineer.
          </motion.p>
        </div>
        <motion.div
          className="btn-container"
          variants={cvContainer}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.6 }}
        >
          <img src={img} className="image" alt="" />
          <a href={cv} download>
            <Button onClick={handleClick} content="Download CV" style="cv" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About
