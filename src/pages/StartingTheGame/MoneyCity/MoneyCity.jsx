
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
        <h1 className="game-title">🏙️ Вітаю у Місті Грошей!</h1>
        <div className="game-message-info" style={{marginBottom: '2rem'}}>
          <p style={{fontSize: '1.125rem'}}>Обери ціль, яку хочеш досягти, та почни заробляти гроші!</p>
        </div>
        <div className="game-choices">
          <Button text="🤖 Міні-Робот Emo - 120 монет" onClick={() => {
            handleClick('emo')
          }}
          choice
          />
          <Button text="🚴 Велосипед - 160 монет" onClick={() => {
            handleClick('velo')
          }}
          choice
          />
          <Button text="🎮 Ігровий компʼютер - 200 монет" onClick={() => {
            handleClick('gamecomputer')
          }}
          choice
          />
        </div>
        {user && user.goal && (
          <div style={{marginTop: '2rem', borderTop: '2px solid #e9d5ff', paddingTop: '1.5rem'}}>
            <NavLink to="/game-page" className="game-link">
              ▶️ Почати пригоду
            </NavLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default MoneyCity
