import React from 'react'
import './GitButton.css'
export interface GitButtonInterface {}

const GitButton: React.FC<GitButtonInterface> = () => {
  return (
    <button className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">Go to GitHub</span>
    </button>
  )
}

export default GitButton
