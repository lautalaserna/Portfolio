import { useEffect, useState, useContext } from 'react'
import { Button, SocialIcon } from '@/components'
import { ThemeContext } from '@/App'
import ig from '@/assets/ig.png'
import git from '@/assets/git.png'
import linkedin from '@/assets/linkedin.png'
import './Welcome.css'

export interface WelcomeInterface {}

const Welcome: React.FC<WelcomeInterface> = () => {
/*   const letters = ['L', 'a', 'u', 't', 'i', '.']
  const [name, setName] = useState('')
  const [pos, setPos] = useState(0) */
  
  /*   useEffect(() => {
    setTimeout(() => {
      if (pos < letters.length) {
        setName(name => name.concat(letters[pos]))
        setPos(p => p + 1)
      }
    }, 120)
  }, [pos]) */
  
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)
  
  return (
    <section className={`Welcome ${darkMode ? 'darkmode' : ''}`} id="home">
      <div className="welcome-hero">
        <h1 className="title">Lautaro Laserna</h1>
        <h4 className="desc">Software engineer & Full stack developer</h4>
      </div>
      <Button darkMode={darkMode} content="Contact me" />
      <div className="social-container">
        <SocialIcon icon={linkedin} darkMode={darkMode} url={'https://www.linkedin.com/in/lautaro-laserna/'} />
        <SocialIcon icon={git} darkMode={darkMode} url={'https://github.com/lautalaserna'} />
        <SocialIcon icon={ig} darkMode={darkMode} url={'https://www.instagram.com/lautalaserna/'} />
      </div>
    </section>
  )
}

export default Welcome
