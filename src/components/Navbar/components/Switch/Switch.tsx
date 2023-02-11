import { useEffect, useState } from 'react'
import './Switch.css'

export interface SwitchInterface {
  state: boolean
  onClick: () => void
  darkMode?: boolean
  icon?: string
}

const Switch = ({ state, onClick, darkMode, icon }: SwitchInterface) => {
  const [cheked, setChecked] = useState<boolean>(false)

  useEffect(() => {
    setChecked(state)
  }, [state])

  const handleClick = () => {
    setChecked(check => !check)
    onClick()
  }

  return (
    <label className={`switch ${darkMode ? 'darkmode' : ''}`}>
      <input type="checkbox" onClick={handleClick} checked={cheked}></input>
      <span className="slider">
        <div className="icon-container">
          <img className="icon" src={icon} alt="" />
        </div>
      </span>
    </label>
  )
}

export default Switch
