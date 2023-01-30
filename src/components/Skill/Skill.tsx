import React from 'react'
import './Skill.css'

export interface SkillInterface {
  name: string
  icon: string
}

const Skill: React.FC<SkillInterface> = ({ name, icon }) => {
  return (
    <div className="Skill">
      <img className="skill-img" src={icon} alt="" />
      <p className="skill-name">{name}</p>
    </div>
  )
}

export default Skill
