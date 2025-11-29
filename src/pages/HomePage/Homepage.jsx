import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useUser } from '../../context/UserContext.jsx';
import Button from '../../components/Button/Button.jsx';

const Homepage = () => {
  const {user} = useUser();
  const navigate = useNavigate();
  
  return (
    <main>
      <section>
        {!user && (
          <div style={{display: 'flex', gap: '10px', flexDirection: 'column', alignItems: 'center'}}>
            <Button text="Створити профіль" onClick={() => navigate('/signup')} />
            <Button text="Увійти" onClick={() => navigate('/signin')} />
          </div>
        )}
        {user && user.username && (
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px'}}>
            <Button text="Почати гру" onClick={() => navigate('/greeting')} />
            <div style={{display: 'flex', gap: '15px', marginTop: '10px'}}>
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

export default Homepage
