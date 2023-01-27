import React from 'react'
import './Button.css'
export interface ButtonInterface {}

const Button: React.FC<ButtonInterface> = () => {
  return (
    <button>
      <span className="button_top"> Contact me</span>
    </button>
  )
}

export default Button
