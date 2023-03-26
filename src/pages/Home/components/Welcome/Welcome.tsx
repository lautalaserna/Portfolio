import { AnimatedTitle, Button } from '@/components'
import { motion } from 'framer-motion'
import { useState } from 'react'
import happyGuy from '../About/assets/lautarito-feliz.png'
import guy from '../About/assets/lautarito.png'
import git from './assets/git.png'
import ig from './assets/ig.png'
import linkedin from './assets/linkedin.png'
import { Scroller, SocialIcon } from './components'
import './Welcome.css'

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

  const leftContainer = {
    show: {
      transition: {
        delayChildren: 1.2,
        staggerChildren: 0.4,
      },
    },
  }

  const leftItem = {
    hidden: { opacity: 0, y: 300 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: 'backInOut',
        duration: 0.5,
      },
    },
  }

  const imgAnimation = {
    hidden: { opacity: 0, y: 200 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: 'backInOut',
        duration: 0.6,
      },
    },
  }
  return (
    <section className={`Welcome`} id="home">
      <motion.div className="container-left" variants={leftContainer} initial="hidden" animate="show">
        <AnimatedTitle content={'Welcome'} style="welcome-title" delay={0.2} />
        <motion.div className="name-container" variants={leftItem}>
          <motion.h1 className="name">I'm Lautaro Laserna</motion.h1>
          <motion.h4 className="desc">Software engineer & Full stack developer</motion.h4>
        </motion.div>
        <motion.div className="btn-container" variants={leftItem}>
          <Button onClick={scrollToProjects} content="See my Work" style="home" />
        </motion.div>
        <motion.div className="scroller-container" variants={leftItem}>
          <Scroller />
        </motion.div>
      </motion.div>
      <div className="container-right">
        <motion.img
          className="image"
          src={img}
          alt=""
          variants={imgAnimation}
          initial="hidden"
          animate="show"
          whileHover={{ scale: 1.05, transition: { type: 'spreen', duration: 0.3 } }}
        />
        {/*<img
          className="image"
          src={img}
          alt=""
          onMouseOver={() => {
            setImg(happyGuy)
          }}
          onMouseLeave={() => {
            setImg(guy)
          }}
        /> */}
        <motion.div className="social" variants={leftItem}>
          <SocialIcon icon={linkedin} url={'https://www.linkedin.com/in/lautaro-laserna/'} />
          <SocialIcon icon={git} url={'https://github.com/lautalaserna'} />
          <SocialIcon icon={ig} url={'https://www.instagram.com/lautalaserna/'} />
        </motion.div>
      </div>
    </section>
  )
}

export default Welcome
