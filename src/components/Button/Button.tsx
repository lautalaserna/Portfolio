import './Button.css'
export interface ButtonInterface {
  onClick: () => void
  content: string
  darkMode?: boolean
  color?: string
}

const Button = ({ content, darkMode, color, onClick }: ButtonInterface) => {
  return (
    <button className={`${darkMode ? 'darkmode' : ''} ${color ? color : ''}`} onClick={onClick}>
      <span className="button_top">{content}</span>
    </button>
  )
}

export default Button
