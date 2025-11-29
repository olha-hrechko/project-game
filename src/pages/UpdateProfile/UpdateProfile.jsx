import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, database } from '../../firebase';
import { ref, set } from 'firebase/database';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useUser } from '../../context/UserContext';

const UpdateProfile = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username || username.length < 3) {
      setError('Username має бути мінімум 3 символи');
      return;
    }

    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        setError('Ви не авторизовані');
        return;
      }

      const userRef = ref(database, "users/" + currentUser.uid);
      await set(userRef, {
        email: currentUser.email,
        username: username,
      });

      setUser({ email: currentUser.email, username });
      setSuccess('Профіль оновлено!');
      
      setTimeout(() => {
        navigate('/greeting');
      }, 1500);
    } catch (error) {
      console.error('Помилка оновлення профілю:', error);
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Оновити профіль</h2>
      <form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          placeholder="Username" 
          text="Username" 
          value={username} 
          onChange={e => setUsername(e.target.value)}
          error={error}
        />
        {success && <p style={{color: 'green'}}>{success}</p>}
        <Button type="submit" text="Зберегти" />
      </form>
    </div>
  );
};

export default UpdateProfile;
