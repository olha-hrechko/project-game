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
  '/level-one',
  '/level-two',
  '/level-three',
  '/level-four',
  '/level-five',
  '/scenario-level-one',
  '/scenario-level-two',
  '/scenario-level-three',
  '/scenario-level-four',
  '/scenario-level-five',
  '/level-one-output',
  '/level-two-output',
  '/level-three-output',
  '/level-four-output',
  '/level-five-output'
]

const OUTPUT_PAGES = [
  '/level-one-output',
  '/level-two-output',
  '/level-three-output',
  '/level-four-output',
  '/level-five-output'
];

const urls = GAME_PAGES;
const walleturls = GAME_PAGES;
const goalurls = GAME_PAGES;

const Header = () => {
  const [goalprise, setGoalprise] = useState(0);
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const [goalText, setGoalText] = useState('');
  const location = useLocation();
  const { hideStats } = useHeaderVisibility();

  useEffect(() => {
    if (user) {
      switch (user.goal) {
        case 'emo':
          //localStorage.setItem('goal', 'emo');  
          setGoalText('Міні-Робот Emo');
          setGoalprise(120);
          break;
        case 'velo':
          //localStorage.setItem('goal', 'velo');  
          setGoalText('Велосипед');
          setGoalprise(160);
          break;
        case 'gamecomputer':
          //localStorage.setItem('goal', 'gamecomputer');  
          setGoalText('Ігровий компʼютер');
          setGoalprise(200);
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

  console.log("Header user.progressbar:", user?.progressbar);

  return (
    <header className=" bg-amber-300 p-8">
      <div className="max-w-3xl mx-auto">
        <nav className="flex justify-between">
          <h1 className="text-4xl font-bold">
            Financial Adventure
          </h1>
          <div className='flex'>
            {user && <NavLink to="/">Home</NavLink>}
            {user && <NavLink to="/introduction">Пояснення правил гри</NavLink>}
            {user && <p>{user.username}</p>}
            {user && <Button text="Logout" onClick={handleLogout} />}
            {!hideStats && user && user.goal && goalurls.includes(location.pathname) && !OUTPUT_PAGES.includes(location.pathname) && <p>{goalText}</p>}
            {!hideStats && user && user.goal && walleturls.includes(location.pathname) && !OUTPUT_PAGES.includes(location.pathname) && <p>Гаманець: {user.wallet} монет</p>}
            {!hideStats && user && user.goal && walleturls.includes(location.pathname) && !OUTPUT_PAGES.includes(location.pathname) && <p>Мудрість: {user.wisdom}</p>}
            {!hideStats && user && user.goal && walleturls.includes(location.pathname) && !OUTPUT_PAGES.includes(location.pathname) && <p>Щастя: {user.happiness}</p>}
            {!hideStats && user && user.goal && walleturls.includes(location.pathname) && !OUTPUT_PAGES.includes(location.pathname) && <p>Репутація: {user.reputation}</p>}
            {!hideStats && user && user.goal && urls.includes(location.pathname) && !OUTPUT_PAGES.includes(location.pathname) && (
              <PixelProgressBar
                value={user.wallet}
                max={goalprise}
                pixelCount={10}
                pixelSize={20}
                filledColor="#4caf50"
                emptyColor="#e0e0e0"
              />
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
