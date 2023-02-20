import { AnimatedTitle, Button } from '@/components'
import { motion } from 'framer-motion'
import { useState } from 'react'
import git from './assets/git.png'
import ig from './assets/ig.png'
import linkedin from './assets/linkedin.png'
import { Scroller, SocialIcon } from './components'
import dots from './assets/dot-pattenr.png'
import './Welcome.css'

import happyGuy from '../About/assets/lautarito-feliz.png'
import guy from '../About/assets/lautarito.png'

export interface WelcomeInterface {}

const Welcome: React.FC<WelcomeInterface> = () => {
  const [img, setImg] = useState(guy)

  function scrollToProjects() {
    const projects = document.getElementById('projects')
    if (projects)
      projects.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      })
  }

  const welcome = {
    hidden: { x: -1200 },
    show: {
      x: 0,
      transition: {
        delay: 0.2,
        type: 'spring',
        damping: 30,
        stiffness: 400,
        duration: 0.5,
      },
    },
  }

  const leftContainer = {
    show: {
      transition: {
        delayChildren: 1.8,
        staggerChildren: 0.25,
      },
    },
  }

  const leftItem = {
    hidden: { opacity: 0, y: 300 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 0.8,
      },
    },
  }

  return (
    <section className={`Welcome`} id="home">
      <motion.div className="container-left" variants={leftContainer} initial="hidden" animate="show">
        <motion.h1 className="title" variants={welcome}>
          Welcome
        </motion.h1>
        <div className="name-container">
          <AnimatedTitle content={"I'm Lautaro Laserna"} style="WelcomeTitle" delay={0.8} />
          <motion.h4 className="desc" variants={leftItem}>
            Software engineer & Full stack developer
          </motion.h4>
        </div>
        <motion.div className="btn-container" variants={leftItem}>
          <Button onClick={scrollToProjects} content="See my Work" style="home" />
        </motion.div>
        <motion.div className="scroller-container" variants={leftItem}>
          <Scroller />
        </motion.div>
      </motion.div>
      <div className="container-right">
        <img
          className="image"
          src={img}
          alt=""
          onMouseOver={() => {
            setImg(happyGuy)
          }}
          onMouseLeave={() => {
            setImg(guy)
          }}
        />
        <motion.div className="social" variants={leftItem}>
          <SocialIcon icon={linkedin} url={'https://www.linkedin.com/in/lautaro-laserna/'} />
          <SocialIcon icon={git} url={'https://github.com/lautalaserna'} />
          <SocialIcon icon={ig} url={'https://www.instagram.com/lautalaserna/'} />
        </motion.div>
        {/* <img className='dots-pattern' src={dots} alt="" /> */}
      </div>
    </section>
  )
}

export default Welcome
