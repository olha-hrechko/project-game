import React from 'react'
import { NavLink } from 'react-router-dom'

const GreetingPage = () => {
  return (
    <div className="game-page">
      <div className="game-card" style={{maxWidth: '600px'}}>
        <h1 className="game-title">👋 Привіт!</h1>
        <div className="game-message-info" style={{marginBottom: '2rem'}}>
          <p style={{fontSize: '1.125rem', lineHeight: '1.75rem'}}>Вітаємо у захоплюючій грі про фінансову грамотність! Тут ти навчишся розумно поводитися з грошима та досягати своїх цілей.</p>
        </div>
        <div className="game-choices">
          <NavLink to="/money-city" className="game-link">
            📖 Давай почнемо!
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default GreetingPage
