import { AnimatedTitle } from '@/components'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import fly from './assets/flying-lauti.png'
import { FormButton } from './components'
import emailjs from '@emailjs/browser'
import './Contact.css'

export interface ContactInterface {}

const Contact: React.FC<ContactInterface> = () => {
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

  const form: any = useRef()

  const sendEmail = (e: any) => {
    e.preventDefault()
    console.log('Paso por aca!');

    emailjs.sendForm('service_ilhaddn', 'template_5l0mv9q', form.current, '3cQ0kKHt2qVKPbATq').then(
      result => {
        console.log(result.text)
        alert('Mesagge Sent!')
      },
      error => {
        console.log(error.text)
      }
    )
  }

  return (
    <section className={`Contact`} id="contact">
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
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        action="submit"
        variants={contactForm}
        initial="offscreen"
        whileInView="onscreen"
      >
        <div className="form-inputs">
          <div className="form-input">
            <label className="input-title">Your Name</label>
            <input className="input-content" type="text" name="user_name" required />
          </div>
          <div className="form-input">
            <label className="input-title">Your Email</label>
            <input className="input-content" type="text" name="user_email" required />
          </div>
        </div>
        <textarea className="form-textarea" placeholder="What's up?" name="message" required />
        {/* <FormButton content="Get in Touch" /> */}
        <div className="form-button">
          <input className="button_top" type="submit" value="Get in Touch"></input>
        </div>
      </motion.form>
    </section>
  )
}

export default Contact
