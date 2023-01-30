import { useState } from 'react'
import './Switch.css'

export interface SwitchInterface {
  onClick: () => void
  darkMode?: boolean
  icon?: string
}

const Switch = ({ onClick, darkMode, icon }: SwitchInterface) => {
  const [cheked, setChecked] = useState(false)

  const handleClick = () => {
    setChecked(check => !check)
    onClick()
  }

  return (
    <label className={`switch ${darkMode ? 'darkmode' : ''}`}>
      <input type="checkbox" onClick={handleClick}></input>
      <span className="slider">
        <div className='icon-container'>
          <img className="icon" src={icon} alt="" />
        </div>
      </span>
    </label>
  )
}

export default Switch
