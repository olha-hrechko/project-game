import React from 'react'
import { NavLink } from 'react-router-dom';
import { useUser } from '../../../context/UserContext.jsx';
import { useNavigate } from "react-router-dom";
import { updatePlayerData } from "../../../firebase.js";
import Button from "../../../components/Button/Button.jsx";
import PixelProgressBar from '../../../components/ProgressBar/ProgressBar.jsx';

const LevelFiveOutput = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  // Визначаємо ціну цілі як в Header
  const goalprise = user?.goal === 'emo' ? 120 : user?.goal === 'velo' ? 160 : user?.goal === 'gamecomputer' ? 200 : 0;

  const handleClickRestart = async () => {
    const newWallet = 0
    const newWisdom = 0
    const newHappiness = 0
    const newReputation = 0
    const newProgressBar = 0
    const newResult = 0
    await updatePlayerData(user.uid, {
        wallet: newWallet,
        wisdom: newWisdom,
        happiness: newHappiness,
        reputation: newReputation,
        progressbar: newProgressBar,
        level: 0,
        goal: '',
        result: {econompattern: 0, impilsivepattern: 0, strategicalpattern: 0, mixedpattern: 0}
    });

    setUser({
        ...user,
        wallet: newWallet,
        wisdom: newWisdom,
        happiness: newHappiness,
        reputation: newReputation,
        progressbar: newProgressBar,
        level: 0,
        goal: '',
        result: {econompattern: 0, impilsivepattern: 0, strategicalpattern: 0, mixedpattern: 0}
    })
    navigate("/money-city");
  }

  return (
    <div className="game-page">
      <div className="game-card" style={{maxWidth: '600px'}}>
        <h1 className="game-title">🎉 Niveau 5 terminé!</h1>
        
        <div className="game-message-success" style={{marginBottom: '2rem'}}>
          <p style={{fontSize: '1.125rem', marginBottom: '1rem'}}>Félicitations! Tu as appris à calculer les profits et les risques en affaires!</p>
        </div>

        <div style={{background: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)', padding: '1.5rem', borderRadius: '1rem', marginBottom: '2rem'}}>
          <h3 className="game-subtitle" style={{marginBottom: '1.5rem', textAlign: 'center'}}>📊 Tes résultats:</h3>
          
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem'}}>
            <div style={{background: 'white', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center'}}>
              <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>💰</div>
              <div style={{fontSize: '0.875rem', color: '#7e22ce', fontWeight: '600'}}>Portefeuille</div>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#9333ea'}}>{user.wallet}</div>
            </div>

            <div style={{background: 'white', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center'}}>
              <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>😊</div>
              <div style={{fontSize: '0.875rem', color: '#7e22ce', fontWeight: '600'}}>Bonheur</div>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#9333ea'}}>{user.happiness}</div>
            </div>

            <div style={{background: 'white', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center'}}>
              <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🧠</div>
              <div style={{fontSize: '0.875rem', color: '#7e22ce', fontWeight: '600'}}>Sagesse</div>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#9333ea'}}>{user.wisdom}</div>
            </div>

            <div style={{background: 'white', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center'}}>
              <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>⭐</div>
              <div style={{fontSize: '0.875rem', color: '#7e22ce', fontWeight: '600'}}>Réputation</div>
              <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#9333ea'}}>{user.reputation}</div>
            </div>
          </div>
          
          <div style={{background: 'white', padding: '1rem', borderRadius: '0.75rem'}}>
            <div style={{fontSize: '0.875rem', color: '#7e22ce', fontWeight: '600', marginBottom: '0.75rem', textAlign: 'center'}}>
              🎯 Progrès vers l'objectif
            </div>
            <PixelProgressBar value={user.wallet} max={goalprise} pixelCount={10} filledColor="#22c55e" emptyColor="#e9d5ff" />
            <div style={{textAlign: 'center', marginTop: '0.5rem', fontSize: '0.875rem', color: '#6b21a8'}}>
              {user.wallet} / {goalprise} pièces
            </div>
          </div>
        </div>

        <div className="game-choices">
          <Button onClick={handleClickRestart} text="🔄 Почати заново" secondary />
          
          {user.wallet >= goalprise ? (
            <NavLink to="/goal-achieved" className="game-link">
              ✅ Подивитися результат
            </NavLink>
          ) : (
            <NavLink to="/goal-not-achieved" className="game-link">
              📋 Подивитися результат
            </NavLink>
          )}
        </div>
      </div>
    </div>
  )
}

export default LevelFiveOutput
