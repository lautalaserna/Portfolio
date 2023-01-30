import { useEffect, useState, useContext } from 'react'
import { Button } from '@/components'
import { ThemeContext } from '@/App'
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
      <div className="title-container">
        <h1 className="title">Hi, I'm</h1>
        <span className="name">{name}</span>
        <div className={`stick ${pos == letters.length ? 'hidden' : ''}`}></div>
      </div>
      <h4 className="desc">I'm a software engineer and a full stack developer.</h4>
      <Button darkMode={darkMode} content="Contact me" />
    </section>
  )
}

export default Welcome
