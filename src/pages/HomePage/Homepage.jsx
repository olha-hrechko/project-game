import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useUser } from '../../context/UserContext.jsx';
import Button from '../../components/Button/Button.jsx';
import { updatePlayerData } from '../../firebase';


const HomePage = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  const handleClick = async () => {
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
    <main>
      <section>
        {!user && (
          <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', alignItems: 'center' }}>
            <Button text="Створити профіль" onClick={() => navigate('/signup')} />
            <Button text="Увійти" onClick={() => navigate('/signin')} />
          </div>
        )}
        {user && user.username && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
            <Button text="Почати гру" onClick={handleClick} />
            <Button text="Продовжити гру" onClick={resumegame} />
            <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
              <Link
                to="/update-profile"
                style={{
                  color: '#007bff',
                  textDecoration: 'underline',
                  fontSize: '14px'
                }}
              >
                Оновити профіль
              </Link>
              <Link
                to="/delete-account"
                style={{
                  color: '#dc3545',
                  textDecoration: 'underline',
                  fontSize: '14px'
                }}
              >
                Видалити аккаунт
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

export default HomePage
