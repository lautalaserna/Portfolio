import React from 'react'
import './FormButton.css'

export interface FormButtonInterface {
  content: string
}

const FormButton: React.FC<FormButtonInterface> = ({ content }) => {
  return (
    <div className="form-button">
      <input className="button_top" type="submit" value={content}></input>
    </div>
  )
}

export default FormButton
