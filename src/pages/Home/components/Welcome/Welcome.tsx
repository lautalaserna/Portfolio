import { ThemeContext } from '@/App'
import git from '@/assets/git.png'
import ig from '@/assets/ig.png'
import linkedin from '@/assets/linkedin.png'
import { Button, SocialIcon } from '@/components'
import { useContext } from 'react'
import './Welcome.css'

export interface WelcomeInterface {}

const Welcome: React.FC<WelcomeInterface> = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)

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
          <Button darkMode={darkMode} content="See my Work" />
          <Button darkMode={darkMode} content="Let's Talk" />
        </div>
        <div className="social-container">
          <SocialIcon icon={linkedin} darkMode={darkMode} url={'https://www.linkedin.com/in/lautaro-laserna/'} />
          <SocialIcon icon={git} darkMode={darkMode} url={'https://github.com/lautalaserna'} />
          <SocialIcon icon={ig} darkMode={darkMode} url={'https://www.instagram.com/lautalaserna/'} />
        </div>
      </div>
    </section>
  )
}

export default Welcome
