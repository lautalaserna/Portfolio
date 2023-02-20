import React from 'react'
import { motion } from 'framer-motion'
import './Card.css'

export interface CardInterface {
  icon: string
  title: string
  desc: string
  skillsList: string[]
  color?: string
  darkMode?: boolean
}

const Card: React.FC<CardInterface> = ({ icon, title, desc, skillsList, color, darkMode }) => {
  const card = {
    offscreen: {
      opacity: 0,
      y: 150,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.1,
        type: 'spring',
        damping: 20,
        stiffness: 500,
        duration: 0.4,
      },
    },
  }

  const cardTop = {
    offscreen: {},
    onscreen: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
    hovered: {
      y: -20,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 600,
        duration: 0.4,
      },
    },
  }

  const cardBack = {
    offscreen: {
      rotate: -5,
    },
    onscreen: {
      rotate: -5,
    },
    hovered: {
      y: -20,
      rotate: -10,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 600,
        duration: 0.4,
      },
    },
  }

  const skillIcon = {
    offscreen: {
      scale: 0,
    },
    onscreen: {
      scale: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 300,
        duration: 0.4,
      },
    },
  }

  return (
    <motion.div
      className={`Card ${darkMode ? 'darkmode' : ''}`}
      variants={card}
      initial="offscreen"
      whileInView="onscreen"
      whileHover="hovered"
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.div className="card-back" variants={cardBack}></motion.div>
      <motion.div className="card-top" variants={cardTop}>
        <div className="card-icon-container">
          <img className="card-icon" src={icon} alt="" />
        </div>
        <div className="card-content">
          <h1 className="card-title">{title}</h1>
          <h4 className="card-desc">{desc}</h4>
          <div className="card-footer">
            {skillsList.map(path => (
              <motion.div className="footer-image-container"/*  variants={skillIcon} */>
                <img className="footer-icon" src={path} alt="" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Card
