import React from 'react'
import './Card.css'
import { Skill } from '@/components'

type SkillType = {
  name: string
  path: string
}

export interface CardInterface {
  title: string
  skillList: SkillType[]
  color?: string
}

const Card: React.FC<CardInterface> = ({ title, skillList, color }) => {
  return (
    <div className="Card">
      <div className="card-top">
        <div className={`title-container ${color ? color : ''}`}>
          <h1 className="card-title">{title}</h1>
        </div>
        <div className="skills-container">
          {skillList.map(skill => (
            <Skill name={skill.name} icon={skill.path} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
