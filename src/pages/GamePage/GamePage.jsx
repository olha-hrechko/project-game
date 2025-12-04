import React from 'react'
import './GamePage.css'
import { NavLink } from 'react-router-dom';
const GamePage = () => {
  return (
    <div>
      <div>
      <h2>Level One</h2>
      <p>Welcome to Level One of the Adventure Game!</p>
      <p>Here, your journey begins as you navigate through challenges and make important decisions.</p>
      <p>Твоє рішення впливає на гаманець, Щастя, Мудрість і Репутацію.</p>
      <div>
        <h4>Гаманець</h4>
        <p>Опис гаманця</p>
      </div>
      <div>
        <h4>Щастя</h4>
        <p>Опис щастя</p>
      </div>
      <div>
        <h4>Мудрість</h4>
        <p>Опис мудрості</p>
      </div>
      <div>
        <h4>Репутація</h4>
        <p>Опис репутації</p>
      </div>
    </div>
      <NavLink to="/level-one">Start Level One</NavLink>
    </div>

  )
}

export default GamePage
