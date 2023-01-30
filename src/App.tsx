import { useState, createContext } from 'react'
import './App.css'
import { Navbar } from './components'
import { Home } from './pages'

interface ThemeType {
  darkMode: boolean
  toggleDarkMode: () => void
}

export const ThemeContext = createContext<ThemeType>({ darkMode: false, toggleDarkMode: () => {} })

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(dm => !dm)
  }

  return (
    <>
      <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
        <Navbar />
        <Home />
      </ThemeContext.Provider>
    </>
  )
}

export default App
