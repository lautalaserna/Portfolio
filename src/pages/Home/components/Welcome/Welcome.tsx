import { AnimatedTitle, Button } from '@/components'
import { ThemeContext } from '@/context'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import git from './assets/git.png'
import ig from './assets/ig.png'
import linkedin from './assets/linkedin.png'
import { SocialIcon } from './components'
import './Welcome.css'

export interface WelcomeInterface {}

const Welcome: React.FC<WelcomeInterface> = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)

  function scrollToBottom() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    })
  }

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
        staggerChildren: 0.15,
      },
    },
  }

  const rightContainer = {
    show: {
      transition: {
        delayChildren: 1.3,
        staggerChildren: 0.25,
      },
    },
  }

  const welcomeText = {
    hidden: { opacity: 0, x: -800 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.6, 0.01, 0.05, 0.95],
        duration: 1.6,
      },
    },
  }

  const rightItem = {
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
    <section className={`Welcome ${darkMode ? 'darkmode' : ''}`} id="home">
      <motion.div className="container-left" variants={leftContainer} initial="hidden" animate="show" exit="exit">
        <motion.h1 className="title" variants={welcomeText}>
          Welcome
        </motion.h1>
        <motion.h1 className="title clear" variants={welcomeText}>
          Welcome
        </motion.h1>
        <motion.h1 className="title" variants={welcomeText}>
          Welcome
        </motion.h1>
        <motion.h1 className="title clear" variants={welcomeText}>
          Welcome
        </motion.h1>
        <motion.h1 className="title" variants={welcomeText}>
          Welcome
        </motion.h1>
        <motion.h1 className="title clear" variants={welcomeText}>
          Welcome
        </motion.h1>
        <motion.h1 className="title" variants={welcomeText}>
          Welcome
        </motion.h1>
      </motion.div>
      <motion.div className="container-right" variants={rightContainer} initial="hidden" animate="show">
        <div className="name-container">
          <AnimatedTitle content={"I'm Lautaro Laserna"} style="WelcomeTitle" delay={0.5} darkMode={darkMode} />
          <motion.h4 className="desc" variants={rightItem}>
            Software engineer & Full stack developer
          </motion.h4>
        </div>
        <motion.div className="btn-container" variants={rightItem}>
          <Button onClick={scrollToProjects} content="See my Work" darkMode={darkMode} />
          <Button onClick={scrollToBottom} color="blue" content="Let's Talk" darkMode={darkMode} />
        </motion.div>
        <motion.div className="social-container" variants={rightItem}>
          <SocialIcon icon={linkedin} url={'https://www.linkedin.com/in/lautaro-laserna/'} darkMode={darkMode} />
          <SocialIcon icon={git} url={'https://github.com/lautalaserna'} darkMode={darkMode} />
          <SocialIcon icon={ig} url={'https://www.instagram.com/lautalaserna/'} darkMode={darkMode} />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Welcome
