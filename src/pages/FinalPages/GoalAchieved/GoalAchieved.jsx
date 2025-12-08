import React from 'react'
import { useUser } from '../../../context/UserContext.jsx'
import ProgressBar from '../../../components/ProgressBar/ProgressBar.jsx';
import { NavLink } from 'react-router-dom';

const GoalAchieved = () => {
    const { user } = useUser
  return (
    <div>
      <p>Вітаю! Ти зібрав достатньо монет, щоб здійснити свою мрію!</p>
      <img src="image-main-goal" alt="Main goal achievement" />
      <ProgressBar value={user.progressbar} />
      <NavLink to="/financial-passport">Отримати фінансовий паспорт</NavLink>
    </div>
  )
}

export default GoalAchieved
