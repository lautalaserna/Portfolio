import { ThemeContext } from '@/context'
import fly from './assets/flying-lauti.png'
import React, { useContext } from 'react'
import { AnimatedTitle } from '@/components'
import { FormButton } from './components'
import { motion } from 'framer-motion'
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

  return (
    <section className={`Contact ${darkMode ? 'darkmode' : ''}`} id="contact">
      <img className="contact-img swing" src={fly} alt="" />
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
        <FormButton content="Send" />
      </motion.form>
    </section>
  )
}

export default Contact
