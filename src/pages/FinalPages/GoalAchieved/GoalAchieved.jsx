import React from 'react'
import { useUser } from '../../../context/UserContext.jsx'
import ProgressBar from '../../../components/ProgressBar/ProgressBar.jsx';
import { NavLink } from 'react-router-dom';

const GoalAchieved = () => {
  const { user } = useUser();
  return (
    <div>
      <p>Félicitations! Tu as collecté assez de pièces pour réaliser ton rêve!</p>
      <img src="image-main-goal" alt="Main goal achievement" />
      <ProgressBar value={user.progressbar} />
      <NavLink to="/financial-passport">Obtenir le passeport financier</NavLink>
    </div>
  )
}

export default GoalAchieved
