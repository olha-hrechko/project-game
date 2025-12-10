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
      setError("Le nom d'utilisateur doit contenir au moins 3 caractères");
      return;
    }

    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        setError('Vous n\'êtes pas autorisé');
        return;
      }

      const userRef = ref(database, "users/" + currentUser.uid);
      await set(userRef, {
        email: currentUser.email,
        username: username,
      });

      setUser({ email: currentUser.email, username });
      setSuccess('Profil mis à jour!');
      
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
      <h2>Mettre à jour le profil</h2>
      <form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          placeholder="Nom d'utilisateur" 
          text="Nom d'utilisateur" 
          value={username} 
          onChange={e => setUsername(e.target.value)}
          error={error}
        />
        {success && <p style={{color: 'green'}}>{success}</p>}
        <Button type="submit" text="Enregistrer" />
      </form>
    </div>
  );
};

export default UpdateProfile;
