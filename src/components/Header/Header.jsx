import { useEffect, useState } from 'react'
import PixelProgressBar from '../ProgressBar/ProgressBar.jsx';
import { useUser } from '../../context/UserContext.jsx';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import { useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useHeaderVisibility } from '../../context/HeaderVisibilityContext.jsx';

const GAME_PAGES = [
  '/money-city',
  '/game-page',
  '/scenario-level-one',
  '/level-one',
  '/level-two',
  '/scenario-level-two',
  '/level-two-output',
  '/level-three',
  '/scenario-level-three',
  '/level-three-output',
  '/level-four',
  '/scenario-level-four',
  '/level-four-output',
  '/level-five',
  '/scenario-level-five',
  '/level-five-output'
]

const urls = GAME_PAGES;
const walleturls = GAME_PAGES;
const goalurls = GAME_PAGES;

const Header = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [goalText, setGoalText] = useState('');
  const location = useLocation();
  const { hideStats } = useHeaderVisibility();

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
      case 'emo':
      //localStorage.setItem('goal', 'emo');  
        setGoalText('Міні-Робот Emo');
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
console.log("Header user.progressbar:", user.progressbar);
  return (
    <div>
      <h1>
      Financial Adventure
      </h1>
      {user && <NavLink to="/">Home</NavLink>}
      {user && <NavLink to="/introduction">Пояснення правил гри</NavLink>}
      {user && <p>{user.username}</p>}
      {user && <Button text="Logout" onClick={handleLogout}/>}
      {!hideStats && user && user.goal && goalurls.includes(location.pathname) && <p>{goalText}</p>}
      {!hideStats && user && user.goal && walleturls.includes(location.pathname) && <p>Гаманець: {user.wallet} монет</p>}
      {!hideStats && user && user.goal && walleturls.includes(location.pathname) && <p>Мудрість: {user.wisdom}</p>}
      {!hideStats && user && user.goal && walleturls.includes(location.pathname) &&<p>Щастя: {user.happiness}</p>}
      {!hideStats && user && user.goal && walleturls.includes(location.pathname) && <p>Репутація: {user.reputation}</p>}
      {!hideStats && user && user.goal && urls.includes(location.pathname) && (
        <PixelProgressBar
          value={user.progressbar}
          max={10}
          pixelCount={10}
          pixelSize={20}
          filledColor="#4caf50"
          emptyColor="#e0e0e0"
        />
      )}
    </div>
  )
}

export default Header
