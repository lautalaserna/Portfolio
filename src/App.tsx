import { ThemeContext } from '@/context'
import { useState } from 'react'
import './App.css'
import { Navbar } from './components'
import { Home } from './pages'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(dm => !dm)
  }

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <Navbar />
        <Home />
      </ThemeContext.Provider>
    </>
  )
}

export default App
