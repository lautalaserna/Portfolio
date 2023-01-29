import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

import { Switch } from '@/components'
import './Navbar.css'

export interface NavbarInterface {}

const Navbar = () => {
  const [scroll, setScroll] = useState(false)
  const [mobile, setMobile] = useState(false)
  const [open, setOpen] = useState(false)

  const handleScroll = (e: Event) => {
    if (window.pageYOffset > 40) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  const handleResize = () => {
    if (window.innerWidth < 900) {
      setScroll(true)
      setMobile(true)
    } else {
      setMobile(false)
			setOpen(false)
      if (window.pageYOffset == 0) setScroll(false)
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <nav className={`Navbar ${scroll ? 'scroll' : ''} ${mobile ? 'mobile' : ''}`}>
      <ul className={`nav-menu ${mobile ? 'mobile' : ''} ${open ? 'open' : ''} `}>
        <li className="nav-item">
          <Link
            className={`nav-link ${scroll ? 'scroll' : ''}`}
            onClick={() => setOpen(false)}
            to="home"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${scroll ? 'scroll' : ''}`}
            onClick={() => setOpen(false)}
            to="about"
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${scroll ? 'scroll' : ''}`}
            onClick={() => setOpen(false)}
            to="skills"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${scroll ? 'scroll' : ''}`}
            onClick={() => setOpen(false)}
            to="home"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Proyects
          </Link>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${scroll ? 'scroll' : ''}`} onClick={() => setOpen(false)} href="/">
            Contact
          </a>
        </li>
      </ul>
      <div className={`nav-switch ${mobile ? 'visible' : 'hidden'}`}>
          <Switch onClick={() => setOpen(open => !open)} darkMode={scroll}/>
          <p className={`switch-text ${scroll ? 'scroll' : ''}`}>Menu</p>
        </div>
        <div className="nav-switch">
          <Switch onClick={() => console.log('DARK MODE ACTIVADO')} darkMode={scroll}/>
          <p className={`switch-text ${scroll ? 'scroll' : ''}`}>Dark Mode</p>
        </div>
    </nav>
  )
}

export default Navbar
