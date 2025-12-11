
import React from 'react'
import Select from '../../../components/Select/Select.jsx';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button/Button.jsx';
import { useUser } from '../../../context/UserContext.jsx';
import { updatePlayerData } from '../../../firebase.js';

const MoneyCity = () => {
  const navigate = useNavigate();
  //const { goal, setGoal } = useGoal();
  const { user, setUser } = useUser();
  const handleClick = async (selection) => {
    if (!user) {
      navigate("/");
      return;
    }
    await updatePlayerData(user.uid, {
      goal: selection
    });
    setUser({
      ...user,
      goal: selection
    })
    navigate('/game-page')
  }
  return (
    <div className="game-page">
      <div className="game-card" style={{maxWidth: '700px'}}>
        <h1 className="game-title">🏙️ Bienvenue à la Ville de l'Argent!</h1>
        <div className="game-message-info" style={{marginBottom: '2rem'}}>
          <p style={{fontSize: '1.125rem'}}>Choisis l'objectif que tu veux atteindre et commence à gagner de l'argent!</p>
        </div>
        <div className="game-choices">
          <Button text="🤖 Mini-Robot Emo - 120 pièces" onClick={() => {
            handleClick('emo')
          }}
          choice
          />
          <Button text="🚴 Vélo - 160 pièces" onClick={() => {
            handleClick('velo')
          }}
          choice
          />
          <Button text="🎮 Ordinateur de jeu - 200 pièces" onClick={() => {
            handleClick('gamecomputer')
          }}
          choice
          />
        </div>
        {user && user.goal && (
          <div style={{marginTop: '2rem', borderTop: '2px solid #e9d5ff', paddingTop: '1.5rem'}}>
            <NavLink to="/game-page" className="game-link">
              ▶️ Commencer l'aventure
            </NavLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default MoneyCity
