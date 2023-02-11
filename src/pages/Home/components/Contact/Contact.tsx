import { ThemeContext } from '@/context'
import fly from './assets/flying-lauti.png'
import React, { useContext } from 'react'
import { FormButton } from './components'
import './Contact.css'

export interface ContactInterface {}

const Contact: React.FC<ContactInterface> = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <section className={`Contact ${darkMode ? 'darkmode' : ''}`} id="contact">
      <img className="contact-img swing" src={fly} alt="" />
      <h1 className="contact-title">Let's talk!</h1>
      <form className="contact-form" action="submit">
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
        <FormButton content='Send'/>
      </form>
    </section>
  )
}

export default Contact
