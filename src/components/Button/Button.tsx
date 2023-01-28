import React from 'react'
import './Button.css'
export interface ButtonInterface {
  content: string
}

const Button = ({ content }: ButtonInterface) => {
  return (
    <button>
      <span className="button_top">{content}</span>
    </button>
  )
}

export default Button
