import React from 'react'
import './GamePage.css'
import { NavLink } from 'react-router-dom';
import Dictionary from '../../../components/Dictionary/Dictionary.jsx';

const GamePage = () => {
  const gameStats = [
    {
      icon: '💰',
      word: 'Portefeuille',
      definition: 'Ton argent que tu gagnes et dépenses pendant le jeu.'
    },
    {
      icon: '😊',
      word: 'Bonheur',
      definition: 'Ton humeur et ta satisfaction des décisions prises.'
    },
    {
      icon: '🧠',
      word: 'Sagesse',
      definition: 'Tes connaissances et ton expérience en matière financière.'
    },
    {
      icon: '⭐',
      word: 'Réputation',
      definition: 'Comment les autres évaluent tes actions.'
    }
  ];

  return (
    <div className="game-page">
      <div className="game-card" style={{maxWidth: '800px'}}>
        <h1 className="game-title">🎮 Commence ton aventure!</h1>
        <div className="game-message-info" style={{marginBottom: '2rem'}}>
          <p style={{fontSize: '1.125rem', lineHeight: '1.75rem'}}>
            Tu vas prendre des décisions importantes qui affecteront ton <strong>Portefeuille 💰</strong>, <strong>Bonheur 😊</strong>, <strong>Sagesse 🧠</strong> et <strong>Réputation ⭐</strong>.
          </p>
        </div>
        
        <h3 className="game-subtitle" style={{marginBottom: '1.5rem'}}>Indicateurs du jeu:</h3>
        <Dictionary words={gameStats} title="" />
        
        <div className="game-choices" style={{marginTop: '2rem'}}>
          <NavLink to="/level-one" className="game-link">
            🚀 Commencer Niveau 1
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default GamePage
