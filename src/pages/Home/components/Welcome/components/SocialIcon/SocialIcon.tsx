import React from 'react'
import './SocialIcon.css'

export interface SocialIconInterface {
  icon: string
  url: string
}

const SocialIcon: React.FC<SocialIconInterface> = ({ icon, url }) => {
  return (
    <a className={`SocialIcon`} href={url} target="_blank">
      <img className="icon" src={icon} alt="" />
    </a>
  )
}

export default SocialIcon
