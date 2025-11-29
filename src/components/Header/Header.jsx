import React from 'react'
import { useUser } from '../../context/UserContext.jsx'
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../Button/Button.jsx';


const Header = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

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
    </div>
  )
}

export default Header
