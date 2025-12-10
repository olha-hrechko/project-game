import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useUser } from '../../context/UserContext.jsx';
import Button from '../../components/Button/Button.jsx';
import { updatePlayerData } from '../../firebase';


const HomePage = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const handleClick = async () => {
    if (!user || !user.uid) {
      console.error("User not found or missing uid");
      return;
    }
    
    const newWallet = 0
    const newWisdom = 0
    const newHappiness = 0
    const newProgressBar = 0

    await updatePlayerData(user.uid, {
      wallet: newWallet,
      wisdom: newWisdom,
      happiness: newHappiness,
      progressbar: newProgressBar,
      level: 0,
      goal: '',

    });

    setUser({
      ...user,
      wallet: newWallet,
      wisdom: newWisdom,
      happiness: newHappiness,
      progressbar: newProgressBar,
      level: 0,
      goal: ''
    })

    navigate('/greeting');
  }

  const resumegame = () => {
    if (!user || user.level === undefined) {
      navigate('/greeting');
      return;
    }
    
    switch (user.level) {
      case 1:
        navigate('/level-one-output');
        break;
      case 2:
        navigate('/level-two-output');
        break;
      case 3:
        navigate('/level-three-output');
        break;
      case 4:
        navigate('/level-four-output');
        break;
      case 5:
        navigate('/level-five-output');
        break;
      default:
        navigate('/money-city');
        break;
    }
  }

  return (
    <div className="game-page">
      <div className="game-card" style={{ maxWidth: '500px', textAlign: 'center' }}>
        {!user && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
            <Button text="Створити профіль" onClick={() => navigate('/signup')} />
            <Button text="Увійти" onClick={() => navigate('/signin')} />
          </div>
        )}
        
        {user && !user.username && (
          <div style={{ padding: '1rem' }}>
            <p style={{ color: '#dc3545', marginBottom: '1rem', fontSize: '1rem' }}>
              Дані користувача не знайдено в базі даних.
            </p>
            <p style={{ marginBottom: '1.5rem', color: '#6b7280' }}>
              Будь ласка, створіть новий профіль.
            </p>
            <Button text="Створити профіль" onClick={() => navigate('/signup')} />
          </div>
        )}
        
        {user && user.username && (
          <div>
            <div style={{ 
              background: 'linear-gradient(135deg, #faf5ff, #f3e8ff)', 
              padding: '1.5rem', 
              borderRadius: '1rem',
              marginBottom: '2rem',
              border: '2px solid #e9d5ff'
            }}>
              <p style={{ fontSize: '1.125rem', color: '#6b21a8', fontWeight: '600', marginBottom: '0.5rem' }}>
                Вітаємо, {user.username}! 👋
              </p>
              <p style={{ fontSize: '0.875rem', color: '#9333ea' }}>
                Готовий до фінансової пригоди?
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem', alignItems: 'center' }}>
              <Button text="🎮 Почати нову гру" onClick={handleClick} />
              <Button text="▶️ Продовжити гру" onClick={resumegame} secondary />
            </div>
            
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center',
              paddingTop: '1rem',
              borderTop: '1px solid #e9d5ff'
            }}>
              <Link
                to="/update-profile"
                style={{
                  color: '#9333ea',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                ⚙️ Профіль
              </Link>
              <Link
                to="/delete-account"
                style={{
                  color: '#dc2626',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                🗑️ Видалити
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage
