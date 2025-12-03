import { useEffect, useState } from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import { useUser } from '../../context/UserContext.jsx';
import { useGoal } from '../../context/GoalContext.jsx';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import { useProgressBar } from '../../context/ProgressBarContext.jsx';
import { useLocation } from 'react-router-dom';
import { useWallet } from '../../context/WalletContext.jsx';
import { useWisdom } from '../../context/WithdomContext.jsx';
import { useHappiness } from '../../context/HappinessContext.jsx';
import { useReputation } from '../../context/ReputationContext.jsx';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const urls = ['/money-city','/game-page','/scenario-level-one','/level-one'];

const Header = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  //const { progress, setProgress } = useProgressBar();
  const [goalText, setGoalText] = useState('');
  const location = useLocation();
  //const { goal } = useGoal();
  //const { wallet } = useWallet();
  //const { wisdom } = useWisdom();
  //const { happiness } = useHappiness();
  //const { reputation } = useReputation();
  console.log(user);

  useEffect(() => {
    if (user) {
    switch (user.goal){
      case 'velo':
      //localStorage.setItem('goal', 'velo');  
      setGoalText('Велосипед');
        break;
      case 'gamecomputer':
      //localStorage.setItem('goal', 'gamecomputer');  
        setGoalText('Ігровий компʼютер');
        break;
      case 'doll':
      //localStorage.setItem('goal', 'doll');  
        setGoalText('Трендова лялька');
        break;
      default:
        setGoalText('');
    }
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error("Помилка при виході:", error);
    }
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
      {user && user.goal && <p>{goalText}</p>}
      {user && user.goal && <p>Гаманець: {user.wallet} монет</p>}
      {user && user.goal && <p>Мудрість: {user.wisdom}</p>}
      {user && user.goal && <p>Щастя: {user.happiness}</p>}
      {user && user.goal && <p>Репутація: {user.reputation}</p>}
      {user && user.goal && urls.includes(location.pathname) && (
        <ProgressBar
          completed={user.progressbar}
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
