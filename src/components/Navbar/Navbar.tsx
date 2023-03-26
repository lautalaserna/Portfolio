import { Button } from '@/components'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { Burger } from './components'
import './Navbar.css'

export interface NavbarInterface {}

const Navbar = () => {
  const [visible, setVisible] = useState(true)
  const [y, setY] = useState(0)
  const [mobile, setMobile] = useState(false)
  const [open, setOpen] = useState(false)

  const scrollToBottom = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    })
  }

  const handleScroll = () => {
    if (window.pageYOffset < 800) {
      setVisible(true)
    } else {
      if (y > window.scrollY) {
        console.log('Scroll UP')
        setVisible(true)
      } else if (y < window.scrollY) {
        console.log('Scroll DOWN')
        setVisible(false)
      }
    }
    setY(window.scrollY)
  }

  const handleResize = () => {
    if (window.innerWidth < 900) {
      setVisible(true)
      setMobile(true)
    } else {
      setMobile(false)
      setOpen(false)
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

  const navMotion = {
    init: {
      opacity: 1,
      y: -100,
    },
    action: {
      opacity: visible ? 1 : 0,
      y: visible ? 0 : -200,
    },
  }

  return (
    <motion.nav className={`Navbar ${mobile ? 'mobile' : ''}`} variants={navMotion} initial="init" animate="action">
      <div className="nav-name">
        <span>L</span>
        auti
      </div>
      <ul className={`nav-menu ${mobile ? 'mobile' : ''} ${open ? 'open' : ''} `}>
        <li className="nav-item">
          <Link
            className={`nav-link`}
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
            className={`nav-link`}
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
            className={`nav-link`}
            onClick={() => setOpen(false)}
            to="projects"
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <div className={`nav-switch ${mobile ? 'visible' : 'hidden'}`}>
          <Button content="Contact me" onClick={scrollToBottom} style="nav" />
        </div>
      </ul>
      <div className={`nav-switch ${!mobile ? 'visible' : 'hidden'}`}>
        <Button content="Contact me" onClick={scrollToBottom} style="nav" />
      </div>
      <div className={`nav-switch ${mobile ? 'visible' : 'hidden'}`}>
        <Burger state={open} onClick={() => setOpen(open => !open)} />
      </div>
    </motion.nav>
  )
}

export default Navbar
