import { ThemeContext } from '@/context'
import fly from './assets/flying-lauti.png'
import React, { useContext } from 'react'
import { AnimatedTitle } from '@/components'
import { FormButton } from './components'
import { motion, useAnimation } from 'framer-motion'
import './Contact.css'

export interface ContactInterface {}

const Contact: React.FC<ContactInterface> = () => {
  const { darkMode } = useContext(ThemeContext)

  const contactForm = {
    offscreen: {
      y: 400,
    },
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 50,
      },
    },
  }

  const flyingLauti = {
    offscreen: {
      x: -1000,
    },
    onscreen: {
      x: 0,
      transition: {
        type: 'spring',
        bounce: 0.1,
        duration: 2,
      },
    },
    wiggle: {
      rotate: [0, 5, 0, -5, 0, 5, 0, -5],
      transition: {
        type: 'tween',
        duration: 0.5,
        repeat: Infinity,
      },
    },
  }

  return (
    <section className={`Contact ${darkMode ? 'darkmode' : ''}`} id="contact">
      <motion.img
        className="contact-img swing"
        src={fly}
        alt=""
        variants={flyingLauti}
        initial="offscreen"
        whileInView="onscreen"
        whileHover="wiggle"
        drag
        whileDrag="wiggle"
        dragConstraints={{
          top: 5,
          bottom: 10,
          left: 20,
          right: 20,
        }}
      />
      <AnimatedTitle content="Let's Talk!" style="ContactTitle" once={false} />
      <motion.form
        className="contact-form"
        action="submit"
        variants={contactForm}
        initial="offscreen"
        whileInView="onscreen"
      >
        <div className="form-inputs">
          <div className="form-input">
            <label className="input-title">Your Name</label>
            <input className="input-content" type="text" required />
          </div>
          <div className="form-input">
            <label className="input-title">Your Email</label>
            <input className="input-content" type="text" required />
          </div>
        </div>
        <textarea className="form-textarea" placeholder="What's up?" required />
        <FormButton content="Get in Touch"/>
      </motion.form>
    </section>
  )
}

export default Contact
