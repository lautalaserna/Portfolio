import { Button } from '@/components'
import { ThemeContext } from '@/context'
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

  return (
    <section className={`Welcome ${darkMode ? 'darkmode' : ''}`} id="home">
      <div className="container-left">
        <h1 className="title">Welcome</h1>
        <h1 className="title clear">Welcome</h1>
        <h1 className="title">Welcome</h1>
        <h1 className="title clear">Welcome</h1>
        <h1 className="title">Welcome</h1>
        <h1 className="title clear">Welcome</h1>
        <h1 className="title">Welcome</h1>
      </div>
      <div className="container-right">
        <div className="name-container">
          <h1 className="name">I'm Lautaro Laserna</h1>
          <h4 className="desc">Software engineer & Full stack developer</h4>
        </div>
        <div className="btn-container">
          <Button onClick={scrollToProjects} content="See my Work" darkMode={darkMode} />
          <Button onClick={scrollToBottom} color="blue" content="Let's Talk" darkMode={darkMode} />
        </div>
        <div className="social-container">
          <SocialIcon icon={linkedin} url={'https://www.linkedin.com/in/lautaro-laserna/'} darkMode={darkMode} />
          <SocialIcon icon={git} url={'https://github.com/lautalaserna'} darkMode={darkMode} />
          <SocialIcon icon={ig} url={'https://www.instagram.com/lautalaserna/'} darkMode={darkMode} />
        </div>
      </div>
    </section>
  )
}

export default Welcome
