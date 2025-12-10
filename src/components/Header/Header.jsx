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

  return (
    <header className="game-header">
      <div className="game-header-container">
        {/* Top Row: Brand and Navigation */}
        <div className="game-header-top-row">
          <div className="game-header-brand">
            <h1 className="game-header-title">💰 Financial Adventure</h1>
          </div>
          
          {/* Navigation Section - Top Right */}
          <nav className="game-header-nav">
            {user && <span className="game-header-username">👤 {user.username}</span>}
            {user && <NavLink to="/" className="game-header-nav-button">🏠 Головна</NavLink>}
            {user && <button onClick={handleLogout} className="game-header-logout-button">🚪 Вийти</button>}
          </nav>
        </div>

        {/* Stats Section - Horizontal Layout */}
        {!hideStats && user && user.goal && walleturls.includes(location.pathname) && !OUTPUT_PAGES.includes(location.pathname) && (
          <div className="game-header-stats-wrapper-horizontal">
            {/* Goal Block - Left */}
            <div className="game-header-goal-block">
              <div className="game-stat-label">🎯 Твоя ціль</div>
              <div className="game-stat-value-large">{goalText}</div>
            </div>

            {/* Three stats vertically - Middle */}
            <div className="game-header-stats-vertical">
              <div className="game-stat-badge-mini">
                <span className="game-stat-label-mini">🧠 Мудрість:</span>
                <span className="game-stat-value-mini">{user.wisdom}</span>
              </div>
              <div className="game-stat-badge-mini">
                <span className="game-stat-label-mini">⭐ Репутація:</span>
                <span className="game-stat-value-mini">{user.reputation}</span>
              </div>
              <div className="game-stat-badge-mini">
                <span className="game-stat-label-mini">😊 Щастя:</span>
                <span className="game-stat-value-mini">{user.happiness}</span>
              </div>
            </div>

            {/* Wallet Block - Right */}
            <div className="game-header-wallet-block">
              <div className="game-stat-label">💰 Гаманець</div>
              <div className="game-stat-value-xlarge">{user.wallet}</div>
            </div>

            {/* Progress Bar - Below all in full width */}
            {urls.includes(location.pathname) && (
              <div className="game-progress-container-full">
                <div className="game-progress-label">
                  Прогрес: {user.wallet} / {goalprise}
                </div>
                <PixelProgressBar
                  value={user.wallet}
                  max={goalprise}
                  pixelCount={10}
                  pixelSize={20}
                  filledColor="#22c55e"
                  emptyColor="#e9d5ff"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
