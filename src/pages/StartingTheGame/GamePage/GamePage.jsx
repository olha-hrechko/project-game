import React from 'react'
import './GamePage.css'
import { NavLink } from 'react-router-dom';
import Dictionary from '../../../components/Dictionary/Dictionary.jsx';

const GamePage = () => {
  const gameStats = [
    {
      icon: '💰',
      word: 'Гаманець',
      definition: 'Твої гроші, які ти заробляєш та витрачаєш протягом гри.'
    },
    {
      icon: '😊',
      word: 'Щастя',
      definition: 'Твій настрій та задоволення від прийнятих рішень.'
    },
    {
      icon: '🧠',
      word: 'Мудрість',
      definition: 'Твої знання та досвід у фінансових питаннях.'
    },
    {
      icon: '⭐',
      word: 'Репутація',
      definition: 'Як інші люди оцінюють твої вчинки.'
    }
  ];

  return (
    <div className="game-page">
      <div className="game-card" style={{maxWidth: '800px'}}>
        <h1 className="game-title">🎮 Розпочни свою пригоду!</h1>
        <div className="game-message-info" style={{marginBottom: '2rem'}}>
          <p style={{fontSize: '1.125rem', lineHeight: '1.75rem'}}>
            Ти будеш приймати важливі рішення, які вплинуть на твій <strong>Гаманець 💰</strong>, <strong>Щастя 😊</strong>, <strong>Мудрість 🧠</strong> та <strong>Репутацію ⭐</strong>.
          </p>
        </div>
        
        <h3 className="game-subtitle" style={{marginBottom: '1.5rem'}}>Показники гри:</h3>
        <Dictionary words={gameStats} title="" />
        
        <div className="game-choices" style={{marginTop: '2rem'}}>
          <NavLink to="/level-one" className="game-link">
            🚀 Почати Рівень 1
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default GamePage
