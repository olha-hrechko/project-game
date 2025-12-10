import React from 'react'
import { NavLink } from 'react-router-dom'
import Dictionary from '../../../components/Dictionary/Dictionary.jsx';

const LevelTwo = () => {
  const levelTwoWords = [
    {
      icon: '💡',
      word: 'Bonne affaire',
      definition: 'Une bonne affaire, c\'est quand tu achètes la même chose mais moins cher, ou tu obtiens plus pour le même prix.'
    },
    {
      icon: '🎯',
      word: 'Qualité',
      definition: 'La qualité, c\'est à quel point une chose ou un service est bon.'
    }
  ];

  return (
    <div className="game-page">
      <div className="game-card" style={{maxWidth: '800px'}}>
        <h1 className="game-title">📚 Niveau Deux</h1>
        <h2 className="game-subtitle" style={{marginBottom: '2rem'}}>Recherche de bonnes affaires</h2>
        
        <Dictionary words={levelTwoWords} />
        
        <div className="game-choices" style={{marginTop: '2rem'}}>
          <NavLink to="/scenario-level-two" className="game-link">
            ▶️ Suivant
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default LevelTwo
