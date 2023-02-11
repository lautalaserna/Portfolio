import { createContext } from 'react'

interface ThemeType {
  darkMode: boolean
  toggleDarkMode: () => void
}

export const ThemeContext = createContext<ThemeType>({ darkMode: false, toggleDarkMode: () => {} })