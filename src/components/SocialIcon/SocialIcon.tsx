import React from 'react'
import './SocialIcon.css'

export interface SocialIconInterface {
  icon: string
  darkMode?: boolean
}

const SocialIcon: React.FC<SocialIconInterface> = ({ icon, darkMode }) => {
  return (
    <a className={`SocialIcon ${darkMode ? 'darkmode' : ''}`}>
      <img className="icon" src={icon} alt="" />
    </a>
  )
}

export default SocialIcon
