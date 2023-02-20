import React from 'react'
import './Scroller.css'

export interface ScrollerInterface {}

const Scroller: React.FC<ScrollerInterface> = () => {
  const content = 'SCROLL . SCROLL . SCROLL . SCROLL . '
  let i = 0

  return (
    <div className="Scroller">
      <div className="spinner">
        {content.split('').map(l => {
          i = i + 1
          return <span style={{ transform: `rotate(${i * 10}deg)` }}>{l}</span>
        })}
      </div>
      <div className="arrow">
        <div className="arrow-one"></div>
        <div className="arrow-two"></div>
        <div className="arrow-three"></div>
      </div>
    </div>
  )
}
export default Scroller
