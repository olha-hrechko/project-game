import React from 'react'
import './GamePage.css'
import { NavLink } from 'react-router-dom';
import { useHappiness } from '../../context/HappinessContext.jsx';
import { useWisdom } from '../../context/WithdomContext.jsx';
import { useReputation } from '../../context/ReputationContext.jsx';
import { useWallet } from '../../context/WalletContext.jsx';

const GamePage = () => {
  return (
    <div>
      <NavLink to="/level-one">
        <button className="start-game-button">Start Level One</button>
      </NavLink>
    </div>
  )
}

export default GamePage
