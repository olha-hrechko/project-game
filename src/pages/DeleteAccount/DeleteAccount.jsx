import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, database } from '../../firebase';
import { deleteUser } from 'firebase/auth';
import { ref, remove } from 'firebase/database';
import Button from '../../components/Button/Button';

const DeleteAccount = () => {
  const [confirmText, setConfirmText] = useState('');
  const [error, setError] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (confirmText !== 'DELETE') {
      setError('Entrez "DELETE" pour confirmer');
      return;
    }

    setIsDeleting(true);
    setError('');

    try {
      const currentUser = auth.currentUser;
      if (!currentUser) {
        setError('Vous n\'êtes pas autorisé');
        return;
      }

      // Видалити дані з Realtime Database
      const userRef = ref(database, "users/" + currentUser.uid);
      await remove(userRef);

      // Видалити користувача з Firebase Auth
      await deleteUser(currentUser);

      console.log('Аккаунт успішно видалено');
      navigate('/');
    } catch (error) {
      console.error('Помилка видалення аккаунту:', error);
      if (error.code === 'auth/requires-recent-login') {
        setError('Pour supprimer le compte, vous devez vous reconnecter');
      } else {
        setError(error.message);
      }
      setIsDeleting(false);
    }
  };

  return (
    <div style={{padding: '20px', maxWidth: '500px', margin: '0 auto'}}>
      <h2>Supprimer le compte</h2>
      <div style={{backgroundColor: '#fff3cd', padding: '15px', marginBottom: '20px', borderRadius: '5px'}}>
        <p style={{margin: 0, color: '#856404'}}>
          ⚠️ <strong>Attention!</strong> Cette action est irréversible. Toutes vos données seront définitivement supprimées.
        </p>
      </div>
      
      <div style={{marginBottom: '20px'}}>
        <label style={{display: 'block', marginBottom: '10px'}}>
          Entrez <strong>DELETE</strong> pour confirmer:
        </label>
        <input 
          type="text"
          value={confirmText}
          onChange={(e) => setConfirmText(e.target.value)}
          placeholder="DELETE"
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
      </div>

      {error && <p style={{color: 'red', marginBottom: '15px'}}>{error}</p>}

      <div style={{display: 'flex', gap: '10px'}}>
        <Button 
          text={isDeleting ? "Suppression..." : "Supprimer le compte"} 
          onClick={handleDelete}
          disabled={isDeleting}
        />
        <Button 
          text="Annuler" 
          onClick={() => navigate('/')}
        />
      </div>
    </div>
  );
};

export default DeleteAccount;
