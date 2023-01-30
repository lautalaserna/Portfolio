import { useEffect, useState, useContext } from 'react'
import { Button, SocialIcon } from '@/components'
import { ThemeContext } from '@/App'
import ig from '@/assets/ig.png'
import git from '@/assets/git.png'
import linkedin from '@/assets/linkedin.png'
import './Welcome.css'

export interface WelcomeInterface {}

const Welcome: React.FC<WelcomeInterface> = () => {
  const letters = ['L', 'a', 'u', 't', 'i', '.']
  const [name, setName] = useState('')
  const [pos, setPos] = useState(0)
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)

  useEffect(() => {
    setTimeout(() => {
      if (pos < letters.length) {
        setName(name => name.concat(letters[pos]))
        setPos(p => p + 1)
      }
    }, 120)
  }, [pos])

  return (
    <section className={`Welcome ${darkMode ? 'darkmode' : ''}`} id="home">
      <div className="text-container">
        <div className="title-container">
          <h1 className="title">Hi, I'm</h1>
          <span className="name">{name}</span>
          <div className={`stick ${pos == letters.length ? 'hidden' : ''}`}></div>
        </div>
        <h4 className="desc">I'm a software engineer and a full stack developer.</h4>
      </div>
      <Button darkMode={darkMode} content="Contact me" />
      <div className="social-container">
        <SocialIcon icon={linkedin} darkMode={darkMode} />
        <SocialIcon icon={git} darkMode={darkMode} />
        <SocialIcon icon={ig} darkMode={darkMode} />
      </div>
    </section>
  )
}

export default Welcome
