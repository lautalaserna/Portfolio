import './Switch.css'

export interface SwitchInterface {
  onClick: () => void
  darkMode?: boolean
}

const Switch = ({ onClick, darkMode }: SwitchInterface) => {
  return (
    <label className={`switch ${darkMode ? 'darkmode' : ''}`}>
      <input type="checkbox" onClick={onClick} />
      <span className="slider"></span>
    </label>
  )
}

export default Switch
