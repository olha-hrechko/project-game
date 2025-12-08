import React from 'react'
import { NavLink } from 'react-router-dom';
import { useUser } from '../../../context/UserContext.jsx';

const LevelFiveOutput = () => {

  const { user } = useUser();

  return (
    <div>
      <h2>Рівень Пʼять</h2>
     {user.progressbar===10 && (<><p>Вітаємо! Ви досягли фінальної цілі у грі!</p>
      <NavLink to="/goal-achieved">Далі</NavLink></>)}
      {user.progressbar<10 && (<><p>Трохи не вистачило… Але подивімося, чому так вийшло. Це цікаво!</p>
      <NavLink to="/goal-not-achieved">Далі</NavLink></>)}
    </div>
  )
}

export default LevelFiveOutput
