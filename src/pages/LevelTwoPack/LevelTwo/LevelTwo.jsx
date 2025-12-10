import React from 'react'
import { NavLink } from 'react-router-dom'
import Dictionary from '../../../components/Dictionary/Dictionary.jsx';

const LevelTwo = () => {
  const levelTwoWords = [
    {
      icon: '💡',
      word: 'Вигідна пропозиція',
      definition: 'Вигідна пропозиція - це коли ти купуєш те саме, але за меншу ціну, або отримуєш більше за ті самі гроші.'
    },
    {
      icon: '🎯',
      word: 'Якість',
      definition: 'Якість - це наскільки добра річ або послуга.'
    }
  ];

  return (
    <div className="game-page">
      <div className="game-card" style={{maxWidth: '800px'}}>
        <h1 className="game-title">📚 Рівень Два</h1>
        <h2 className="game-subtitle" style={{marginBottom: '2rem'}}>Пошук вигідної пропозиції</h2>
        
        <Dictionary words={levelTwoWords} />
        
        <div className="game-choices" style={{marginTop: '2rem'}}>
          <NavLink to="/scenario-level-two" className="game-link">
            ▶️ Далі
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default LevelTwo
