import React from 'react'
import { NavLink } from 'react-router-dom';
import Dictionary from '../../../components/Dictionary/Dictionary.jsx';

const LevelThree = () => {
  const levelThreeWords = [
    {
      icon: '🎁',
      word: 'Несподіваний дохід',
      definition: 'Несподіваний дохід - це гроші, які ти отримуєш раптово, коли не очікуєш. Наприклад, подарунок на день народження, або винагорода за допомогу.'
    },
    {
      icon: '⚖️',
      word: 'Пріоритет',
      definition: 'Пріоритет - це те, що для тебе найважливіше прямо зараз. Коли у тебе є гроші, треба вирішити: витратити їх на щось терміново потрібне чи приємне, чи відкласти на важливу мету.'
    }
  ];

  return (
    <div className="game-page">
      <div className="game-card" style={{maxWidth: '800px'}}>
        <h1 className="game-title">🎂 Рівень Три</h1>
        <h2 className="game-subtitle" style={{marginBottom: '2rem'}}>День народження</h2>
        
        <Dictionary words={levelThreeWords} />
        
        <div className="game-choices" style={{marginTop: '2rem'}}>
          <NavLink to="/scenario-level-three" className="game-link">
            ▶️ Далі
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default LevelThree
