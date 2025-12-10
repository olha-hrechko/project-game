import React from 'react'
import { NavLink } from 'react-router-dom';
import Dictionary from '../../../components/Dictionary/Dictionary.jsx';

const LevelThree = () => {
  const levelThreeWords = [
    {
      icon: '🎁',
      word: 'Revenu inattendu',
      definition: 'Un revenu inattendu, c\'est de l\'argent que tu reçois soudainement, quand tu ne t\'y attends pas. Par exemple, un cadeau d\'anniversaire ou une récompense pour avoir aidé.'
    },
    {
      icon: '⚖️',
      word: 'Priorité',
      definition: 'La priorité, c\'est ce qui est le plus important pour toi en ce moment. Quand tu as de l\'argent, tu dois décider: le dépenser pour quelque chose d\'urgent ou d\'agréable, ou l\'économiser pour un objectif important.'
    }
  ];

  return (
    <div className="game-page">
      <div className="game-card" style={{maxWidth: '800px'}}>
        <h1 className="game-title">🎂 Niveau Trois</h1>
        <h2 className="game-subtitle" style={{marginBottom: '2rem'}}>Anniversaire</h2>
        
        <Dictionary words={levelThreeWords} />
        
        <div className="game-choices" style={{marginTop: '2rem'}}>
          <NavLink to="/scenario-level-three" className="game-link">
            ▶️ Suivant
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default LevelThree
