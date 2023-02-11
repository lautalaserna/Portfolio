import React from 'react'
import './SocialIcon.css'

export interface SocialIconInterface {
  icon: string
  darkMode?: boolean
  url:string
}

const SocialIcon: React.FC<SocialIconInterface> = ({ icon, darkMode, url }) => {
  return (
    <a className={`SocialIcon ${darkMode ? 'darkmode' : ''}`} href={url} target="_blank" >
      <img className="icon" src={icon} alt="" />
    </a>
  )
}

export default SocialIcon
