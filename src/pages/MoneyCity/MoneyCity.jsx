
import React from 'react'
import Select from '../../components/Select/Select';
import { useGoal } from '../../context/GoalContext';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

const options= [{value: '', label: 'Виберіть ціль'},{value: 'velo', label: 'Велосипед'}, {value: 'gamecomputer', label: 'Ігровий компʼютер'}, {value: 'doll', label: 'Трендова лялька'}];

const MoneyCity = () => {
  const navigate = useNavigate();
  const {goal, setGoal} = useGoal();
  return (
    <main>
      <h2>Вітаю у Місті Грошей!</h2>
      <p>Оберіть ціль, яку хочете досягти, та почніть заробляти гроші!</p>
      <Button text="Велосипед" onClick={() => {
        setGoal('velo')
        navigate*('/game-page')
      }}
      />
      <Button text="Ігровий компʼютер" onClick={() => {
        setGoal('gamecomputer')
        navigate*('/game-page')
      }}
       />
      <Button text="Трендова лялька" onClick={() => {
        setGoal('doll')
        navigate*('/game-page')
      }}
       />
             <Button text="Міні-Робот Emo" onClick={() => {
        setGoal('emo')
        navigate*('/game-page')
      }}
       />
      {goal && <NavLink to="/game-page">Почати рівень</NavLink>}
    </main>
  )
}

export default MoneyCity
