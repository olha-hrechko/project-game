import React, { useEffect, useState } from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { useUser } from '../../context/UserContext.jsx';
import { useGoal } from '../../context/GoalContext.jsx';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import { useProgressBar } from '../../context/ProgressBarContext.jsx';
import { useLocation } from 'react-router-dom';

const urls = ['/money-city','/game-page'];

const Header = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const { goal } = useGoal();
  const { progress, setProgress } = useProgressBar();
  const [goalText, setGoalText] = useState('');
  const location = useLocation();

  console.log(location.pathname)

  useEffect(() => {
    switch (goal){
      case 'velo':
        setGoalText('Велосипед');
        break;
      case 'gamecomputer':
        setGoalText('Ігровий компʼютер');
        break;
      case 'doll':
        setGoalText('Трендова лялька');
        break;
      default:
        setGoalText('');
    }
  }, [goal]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div>
      <h1>
      Financial Adventure
      </h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/introduction">Пояснення правил гри</NavLink>
      {user && <p>{user.username}</p>}
      {user && <Button text="Logout" onClick={handleLogout}/>}
      {user && goal && <p>{goalText}</p>}
      {user && goal && urls.includes(location.pathname) && (
        <ProgressBar
          completed={progress}
          maxCompleted={100}
          labelAlignment="center"
          labelColor="#000000"
          bgColor="#4caf50"
          height="20px"
          width="300px"
          disabled={true}
        />
      )}
    </div>
  )
}

export default Header
