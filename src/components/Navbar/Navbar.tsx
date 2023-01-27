import logoWhite from '@/assets/l-white-logo.png'
import logoBlack from '@/assets/l-black-logo.png'
import react from '@/assets/react.svg'
import { useEffect, useState } from 'react'

import './Navbar.css'

export interface NavbarInterface {}

const Navbar = () => {
  const [active, setActive] = useState(false)

  const handleScroll = (e: Event) => {
    if (window.pageYOffset > 40) setActive(true)
    else setActive(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('rezice', handleScroll)
    }
  }, [window.pageYOffset])

  return (
    <nav className={`Navbar ${active ? 'active' : ''}`}>
      <div className="icon-section"></div>
      <div className="links-section">
        <a className={`${active ? 'active' : ''}`} href="/">
          Home
        </a>
        <a className={`${active ? 'active' : ''}`} href="/">
          About
        </a>
        <a className={`${active ? 'active' : ''}`} href="/">
          Skills
        </a>
        <a className={`${active ? 'active' : ''}`} href="/">
          Proyects
        </a>
        <a className={`${active ? 'active' : ''}`} href="/">
          Contact
        </a>
        <div className="burguer">
          <img src={react} alt="X" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
