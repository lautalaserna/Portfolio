import React from 'react'
import { motion } from 'framer-motion'
import './AnimatedTitle.css'

export interface AnimatedTitleInterface {
  content: string
  darkMode?: boolean
  style?: string
  delay?: number
  once?: boolean
}

const AnimatedTitle: React.FC<AnimatedTitleInterface> = ({ content, darkMode, style = '', delay = 0, once = true }) => {
  const titleContainer = {
    show: {
      transition: {
        delayChildren: delay,
        staggerChildren: 0.06,
      },
    },
  }

  const letterAnimation = {
    start: { scale: 0, translateY: 50 },
    show: {
      scale: 1,
      translateY: 0,
      transition: {
        ease: [0.1, 0.4, 0.1, 1.1],
        duration: 0.4,
      },
    },
  }

  return (
    <motion.span
      className={`AnimatedTitle ${darkMode ? 'darkmode' : ''}  ${style}`}
      variants={titleContainer}
      initial="start"
      whileInView="show"
      viewport={{ once: once , amount: 0.5 }}
    >
      {content.split(' ').map(word => (
        <motion.span className="word">
          {[...word].map(letter => (
            <motion.span className={`row-letter`} variants={letterAnimation}>
              {letter ? letter : ' '}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.span>
  )
}

export default AnimatedTitle
