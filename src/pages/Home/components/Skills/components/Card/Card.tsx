import React from 'react'
import './Card.css'

export interface CardInterface {
  icon: string
  title: string
  desc: string
  skillsList: string[]
  color?: string
  darkMode?: boolean
}

const Card: React.FC<CardInterface> = ({ icon, title, desc, skillsList, color, darkMode }) => {
  return (
    <div className={`Card ${darkMode ? 'darkmode' : ''}`}>
      <div className="card-icon-container">
        <img className="card-icon" src={icon} alt="" />
      </div>
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <h4 className="card-desc">{desc}</h4>
        <div className="card-footer">
          {skillsList.map(path => (
            <img className="footer-icon" src={path} alt="" />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
