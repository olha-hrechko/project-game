import React from 'react'
import { NavLink } from 'react-router-dom';
import Dictionary from '../../../components/Dictionary/Dictionary.jsx';

const LevelOne = () => {
  const levelOneWords = [
    {
      icon: '💰',
      word: 'Гроші',
      definition: 'Гроші - це те, чим ми платимо за речі, що нам потрібні або подобаються. Наприклад, за іграшки, смаколики або розваги.'
    },
    {
      icon: '🏦',
      word: 'Кишенькові гроші',
      definition: 'Кишенькові гроші - це гроші, які батьки дають тобі, щоб ти міг купити щось для себе.'
    },
    {
      icon: '🏷️',
      word: 'Ціна',
      definition: 'Ціна - це кількість грошей, яку потрібно заплатити за річ або послугу.'
    }
  ];

  return (
    <div className="game-page">
      <div className="game-card" style={{maxWidth: '800px'}}>
        <h1 className="game-title">📚 Рівень Один</h1>
        <h2 className="game-subtitle" style={{marginBottom: '2rem'}}>Знайомимося з грошима</h2>
        
        <Dictionary words={levelOneWords} />
        
        <div className="game-choices" style={{marginTop: '2rem'}}>
          <NavLink to="/scenario-level-one" className="game-link">
            ▶️ Далі
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default LevelOne
