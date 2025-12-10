import React from 'react'
import { NavLink } from 'react-router-dom';
import Dictionary from '../../../components/Dictionary/Dictionary.jsx';

const LevelFour = () => {
  const levelFourWords = [
    {
      icon: '⚠️',
      word: 'Несподівані витрати',
      definition: 'Несподівані витрати - це гроші, які тобі потрібно витратити на щось, що ти не планував. Наприклад, зламалася іграшка або планшет, і їх потрібно полагодити.'
    },
    {
      icon: '🛡️',
      word: 'Резерв',
      definition: 'Резерв - це гроші, які ти відкладаєш на випадок непередбачених ситуацій. Наприклад, якщо щось зламається, у тебе будуть гроші, щоб полагодити.'
    }
  ];

  return (
    <div className="game-page">
      <div className="game-card" style={{maxWidth: '800px'}}>
        <h1 className="game-title">🔧 Рівень Чотири</h1>
        <h2 className="game-subtitle" style={{marginBottom: '2rem'}}>Неочікувані витрати</h2>
        
        <Dictionary words={levelFourWords} />
        
        <div className="game-choices" style={{marginTop: '2rem'}}>
          <NavLink to="/scenario-level-four" className="game-link">
            ▶️ Далі
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default LevelFour
