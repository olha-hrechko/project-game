
import React from 'react'
import Select from '../../components/Select/Select';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { useUser } from '../../context/UserContext.jsx';
import { updatePlayerData } from '../../firebase';

const options = [{ value: '', label: 'Виберіть ціль' }, { value: 'velo', label: 'Велосипед' }, { value: 'gamecomputer', label: 'Ігровий компʼютер' }, { value: 'doll', label: 'Трендова лялька' }];

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
    navigate * ('/game-page')
  }
  return (
    <main>
      <h2>Вітаю у Місті Грошей!</h2>
      <p>Оберіть ціль, яку хочете досягти, та почніть заробляти гроші!</p>
      <Button text="Велосипед" onClick={() => {
        handleClick('velo')
      }}
      />
      <Button text="Ігровий компʼютер" onClick={() => {
        handleClick('gamecomputer')
      }}
      />
      <Button text="Трендова лялька" onClick={() => {
        handleClick('doll')
      }}
      />
      <Button text="Міні-Робот Emo" onClick={() => {
        handleClick('emo')
      }}
      />
      {user && user.goal && <NavLink to="/game-page">Почати рівень</NavLink>}
    </main>
  )
}

export default MoneyCity
