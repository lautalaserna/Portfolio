import { ThemeContext } from '@/App'
import React, { useContext } from 'react'
import fly from '@/assets/flying-lauti.png'
import './Contact.css'

export interface ContactInterface {}

const Contact: React.FC<ContactInterface> = () => {
  const { darkMode } = useContext(ThemeContext)

  return (
    <section className={`Contact ${darkMode ? 'darkmode' : ''}`} id="contact">
      <h1 className="contact-title">Let's talk!</h1>
      <div className="contact-content">
        {/* <img className="contact-img" src={fly} alt="" /> */}
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
          <div className="form-button">
            <input className="button_top" type="submit" value="Send"></input>
          </div>
          {/*           <div className="form-textarea">
          </div> */}
        </form>
      </div>
    </section>
  )
}

export default Contact
