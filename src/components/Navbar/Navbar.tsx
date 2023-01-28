import burgerClose from '@/assets/code-open.svg'
import burgerOpen from '@/assets/code-close.svg'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

import './Navbar.css'

export interface NavbarInterface {}

const Navbar = () => {
  const [dark, setDark] = useState(false)
  const [open, setOpen] = useState(false)

  const handleScroll = (e: Event) => {
    if (window.pageYOffset > 40) setDark(true)
    else setDark(false)
  }

  const handleClick = (offset: number) => {
    document.body.scrollTop = offset
    document.documentElement.scrollTop = offset
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('rezice', handleScroll)
    }
  })

  return (
    <nav className={`Navbar ${dark ? 'active' : ''} ${open ? 'open' : ''}`}>
      <div className={`links-section ${open ? 'open' : ''}`}>
        <Link className={`link-item ${dark ? 'active' : ''}`} to="home" smooth={true} offset={-100} duration={500}>
          Home
        </Link>
        <Link className={`link-item ${dark ? 'active' : ''}`} to="about" smooth={true} offset={-100} duration={500}>
          About
        </Link>
        <Link className={`link-item ${dark ? 'active' : ''}`} to="skills" smooth={true} offset={-100} duration={500}>
          Skills
        </Link>
        <Link className={`link-item ${dark ? 'active' : ''}`} to="home" smooth={true} offset={-100} duration={500}>
          Proyects
        </Link>
        <a className={`link-item ${dark ? 'active' : ''}`} href="/">
          Contact
        </a>
      </div>
      <div className="burguer">
        <img
          className={`logo ${dark ? 'active' : ''} ${open ? 'open' : ''}`}
          src={open ? burgerOpen : burgerClose}
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          alt=""
        />
      </div>
    </nav>
  )
}

export default Navbar
