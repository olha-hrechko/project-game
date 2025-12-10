import React from 'react'
import { NavLink } from 'react-router-dom';
import Dictionary from '../../../components/Dictionary/Dictionary.jsx';

const LevelOne = () => {
  const levelOneWords = [
    {
      icon: '💰',
      word: 'Argent',
      definition: 'L\'argent, c\'est ce avec quoi nous payons les choses dont nous avons besoin ou que nous aimons. Par exemple, des jouets, des bonbons ou des divertissements.'
    },
    {
      icon: '🏦',
      word: 'Argent de poche',
      definition: 'L\'argent de poche, c\'est l\'argent que tes parents te donnent pour que tu puisses acheter quelque chose pour toi.'
    },
    {
      icon: '🏷️',
      word: 'Prix',
      definition: 'Le prix, c\'est la quantité d\'argent qu\'il faut payer pour une chose ou un service.'
    }
  ];

  return (
    <div className="game-page">
      <div className="game-card" style={{maxWidth: '800px'}}>
        <h1 className="game-title">📚 Niveau Un</h1>
        <h2 className="game-subtitle" style={{marginBottom: '2rem'}}>Découvrons l'argent</h2>
        
        <Dictionary words={levelOneWords} />
        
        <div className="game-choices" style={{marginTop: '2rem'}}>
          <NavLink to="/scenario-level-one" className="game-link">
            ▶️ Suivant
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default LevelOne
