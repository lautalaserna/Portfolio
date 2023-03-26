import './Button.css'
export interface ButtonInterface {
  onClick: () => void
  content: string
  colorOne?: string
  colorTwo?: string
  style?: string
}

const Button = ({ content, colorOne, colorTwo, onClick, style = '' }: ButtonInterface) => {
  return (
    <button className={`Button ${style}`} onClick={onClick} style={{ backgroundColor: colorTwo }}>
      <div className="button_top" style={{ backgroundColor: colorOne }}>
        {content}
      </div>
    </button>
  )
}

export default Button
