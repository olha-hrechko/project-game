//import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../context/UserContext.jsx";
import { updatePlayerData } from "../../../firebase.js";
import Button from "../../../components/Button/Button.jsx";
import PixelProgressBar from '../../../components/ProgressBar/ProgressBar.jsx';
import { NavLink } from 'react-router-dom';

const LevelOneOutput = () => {
    const navigate = useNavigate();
    const { user, setUser } = useUser();

    // Визначаємо ціну цілі як в Header
    const goalprise = user?.goal === 'emo' ? 120 : user?.goal === 'velo' ? 160 : user?.goal === 'gamecomputer' ? 200 : 0;

    const handleClickStart = async () => {
        const newWallet = 0
        const newWisdom = 0
        const newHappiness = 0
        const newReputation = 0
        const newProgressBar = 0
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            wisdom: newWisdom,
            happiness: newHappiness,
            reputation: newReputation,
            progressbar: newProgressBar,
            level: 0,
            goal: ''
        });

        setUser({
            ...user,
            wallet: newWallet,
            wisdom: newWisdom,
            happiness: newHappiness,
            reputation: newReputation,
            progressbar: newProgressBar,
            level: 0,
            goal: ''
        })
        navigate("/money-city");
    }

    return (
        <div className="game-page">
            <div className="game-card" style={{maxWidth: '600px'}}>
                <h1 className="game-title">✅ Рівень 1 завершено!</h1>
                
                <div className="game-message-success" style={{marginBottom: '2rem'}}>
                    <p style={{fontSize: '1.125rem', marginBottom: '1rem'}}>Вітаємо! Ти пройшов перший рівень та навчився основам роботи з грошима!</p>
                </div>

                <div style={{background: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)', padding: '1.5rem', borderRadius: '1rem', marginBottom: '2rem'}}>
                    <h3 className="game-subtitle" style={{marginBottom: '1.5rem', textAlign: 'center'}}>📊 Твої результати:</h3>
                    
                    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem'}}>
                        <div style={{background: 'white', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center'}}>
                            <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>💰</div>
                            <div style={{fontSize: '0.875rem', color: '#7e22ce', fontWeight: '600'}}>Гаманець</div>
                            <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#9333ea'}}>{user.wallet}</div>
                        </div>
                        
                        <div style={{background: 'white', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center'}}>
                            <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>😊</div>
                            <div style={{fontSize: '0.875rem', color: '#7e22ce', fontWeight: '600'}}>Щастя</div>
                            <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#9333ea'}}>{user.happiness}</div>
                        </div>
                        
                        <div style={{background: 'white', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center'}}>
                            <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>🧠</div>
                            <div style={{fontSize: '0.875rem', color: '#7e22ce', fontWeight: '600'}}>Мудрість</div>
                            <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#9333ea'}}>{user.wisdom}</div>
                        </div>
                        
                        <div style={{background: 'white', padding: '1rem', borderRadius: '0.75rem', textAlign: 'center'}}>
                            <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>⭐</div>
                            <div style={{fontSize: '0.875rem', color: '#7e22ce', fontWeight: '600'}}>Репутація</div>
                            <div style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#9333ea'}}>{user.reputation}</div>
                        </div>
                    </div>
                    
                    <div style={{background: 'white', padding: '1rem', borderRadius: '0.75rem'}}>
                        <div style={{fontSize: '0.875rem', color: '#7e22ce', fontWeight: '600', marginBottom: '0.75rem', textAlign: 'center'}}>
                            🎯 Прогрес до цілі
                        </div>
                        <PixelProgressBar value={user.wallet} max={goalprise} pixelCount={10} filledColor="#22c55e" emptyColor="#e9d5ff" />
                        <div style={{textAlign: 'center', marginTop: '0.5rem', fontSize: '0.875rem', color: '#6b21a8'}}>
                            {user.wallet} / {goalprise} монет
                        </div>
                    </div>
                </div>

                <div className="game-choices">
                    <Button onClick={handleClickStart} text="🔄 Почати заново" secondary />
                    <NavLink to="/level-two" className="game-link">
                        ▶️ Наступний рівень
                    </NavLink>
                </div>
            </div>
        </div>
    );  
};

export default LevelOneOutput;





