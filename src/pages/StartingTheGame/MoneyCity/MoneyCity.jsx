
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
  const {user, setUser} = useUser();
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
    <main>
      <h2>Вітаю у Місті Грошей!</h2>
      <p>Оберіть ціль, яку хочете досягти, та почніть заробляти гроші!</p>
      <Button text="Велосипед - 250 монет" onClick={() => {
        handleClick('velo')
      }}
      />
      <Button text="Ігровий компʼютер - 320 монет" onClick={() => {
        handleClick('gamecomputer')
      }}
      />
      <Button text="Міні-Робот Emo - 210 монет" onClick={() => {
        handleClick('emo')
      }}
      />
      {user && user.goal && <NavLink to="/game-page">Почати рівень</NavLink>}
    </main>
  )
}

export default MoneyCity
