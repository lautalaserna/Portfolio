import React from 'react'
import './Marquee.css'

export interface MarqueeInterface {
  content: string
}

const Marquee: React.FC<MarqueeInterface> = ({ content }) => {
  return (
    <div className="Marquee">
      <div className="marquee-item marquee-one">
        <h2 className="scroller-text">{content}</h2>
        <h2 className="scroller-text clear">{content}</h2>
      </div>
      <div className="marquee-item marquee-two">
        <h2 className="scroller-text">{content}</h2>
        <h2 className="scroller-text clear">{content}</h2>
      </div>
      <div className="marquee-item marquee-three">
        <h2 className="scroller-text">{content}</h2>
        <h2 className="scroller-text clear">{content}</h2>
      </div>
      <div className="marquee-item marquee-four">
        <h2 className="scroller-text">{content}</h2>
        <h2 className="scroller-text clear">{content}</h2>
      </div>
    </div>
  )
}

export default Marquee
