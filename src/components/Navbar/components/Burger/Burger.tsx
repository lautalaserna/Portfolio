import React from 'react'
import './Burger.css'

export interface BurgerInterface {
  state: boolean
  onClick: () => void
}

const Burger: React.FC<BurgerInterface> = ({ state, onClick }) => {
  return (
    <div className={`Burger ${state ? 'cheked' : ''}`} onClick={onClick}>
      <div className="line line-one"></div>
      <div className="line line-two"></div>
      <div className="line line-three"></div>
    </div>
  )
}

export default Burger
