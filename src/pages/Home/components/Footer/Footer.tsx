import React from 'react'
import './Footer.css'

export interface FooterInterface {}

const Footer: React.FC<FooterInterface> = () => {
  return (
    <div className="Footer">
      <h1>© Copyright · Lautaro Laserna · 2023</h1>
    </div>
  )
}

export default Footer
