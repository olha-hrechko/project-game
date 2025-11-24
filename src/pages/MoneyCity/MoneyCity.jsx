
import React from 'react'
import Select from '../../components/Select/Select';
import { useGoal } from '../../context/GoalContext';
import { NavLink } from 'react-router-dom';


const options= [{value: '', label: 'Виберіть ціль'},{value: 'velo', label: 'Велосипед'}, {value: 'gamecomputer', label: 'Ігровий компʼютер'}, {value: 'doll', label: 'Трендова лялька'}];

const MoneyCity = () => {
  const {goal, setGoal} = useGoal();
  return (
    <main>
      <h2>Welcome to Money City!</h2>
      <Select value={goal} text="Choose your goal" options={options} onChange={(e) => setGoal(e.target.value)} />
      {goal && <NavLink to="/game-page">Start Level</NavLink>}
    </main>
  )
}

export default MoneyCity
