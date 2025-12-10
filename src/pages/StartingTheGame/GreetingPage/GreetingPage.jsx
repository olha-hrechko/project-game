import React from 'react'
import { NavLink } from 'react-router-dom'

const GreetingPage = () => {
  return (
    <div className="game-page">
      <div className="game-card" style={{maxWidth: '600px'}}>
        <h1 className="game-title">👋 Salut!</h1>
        <div className="game-message-info" style={{marginBottom: '2rem'}}>
          <p style={{fontSize: '1.125rem', lineHeight: '1.75rem'}}>Bienvenue dans le jeu passionnant sur la littératie financière! Ici, tu apprendras à gérer intelligemment ton argent et à atteindre tes objectifs.</p>
        </div>
        <div className="game-choices">
          <NavLink to="/money-city" className="game-link">
            📖 Commençons!
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default GreetingPage
