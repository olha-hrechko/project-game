import React from 'react'
import { NavLink } from 'react-router-dom';
import Dictionary from '../../../components/Dictionary/Dictionary.jsx';

const LevelFour = () => {
  const levelFourWords = [
    {
      icon: '⚠️',
      word: 'Dépenses imprévues',
      definition: 'Les dépenses imprévues, c\'est l\'argent que tu dois dépenser pour quelque chose que tu n\'avais pas prévu. Par exemple, un jouet ou une tablette qui se casse et qu\'il faut réparer.'
    },
    {
      icon: '🛡️',
      word: 'Réserve',
      definition: 'Une réserve, c\'est de l\'argent que tu mets de côté en cas de situations imprévues. Par exemple, si quelque chose se casse, tu auras l\'argent pour le réparer.'
    }
  ];

  return (
    <div className="game-page">
      <div className="game-card" style={{maxWidth: '800px'}}>
        <h1 className="game-title">🔧 Niveau Quatre</h1>
        <h2 className="game-subtitle" style={{marginBottom: '2rem'}}>Dépenses inattendues</h2>
        
        <Dictionary words={levelFourWords} />
        
        <div className="game-choices" style={{marginTop: '2rem'}}>
          <NavLink to="/scenario-level-four" className="game-link">
            ▶️ Suivant
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default LevelFour
