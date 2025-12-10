import React from 'react'

const Button = ({text, onClick, type='button', disabled=false, secondary=false, choice=false }) => {
  const buttonClass = choice ? 'game-button-choice' : secondary ? 'game-button-secondary' : 'game-button';
  
  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      className={buttonClass}
    >
      {text}
    </button>
  )
}

export default Button
