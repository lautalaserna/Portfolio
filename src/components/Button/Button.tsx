import React from 'react'
import './Button.css'
export interface ButtonInterface {
  content: string
  darkMode?: boolean
}

const Button = ({ content, darkMode }: ButtonInterface) => {
  return (
    <button className={`${darkMode ? 'darkmode' : ''}`}>
      <span className="button_top">{content}</span>
    </button>
  )
}

export default Button
