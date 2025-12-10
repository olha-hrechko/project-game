import { useState, useEffect } from "react";
import { updatePlayerData } from '../../../firebase.js';
import { useUser } from '../../../context/UserContext.jsx';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button/Button.jsx";
import { useNavigate } from "react-router-dom";

const ScenarioLevelFive = () => {
    const [choose, setChoose] = useState("");
    const [advice, setAdvice] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const [expandedOption, setExpandedOption] = useState(null);
    const { user, setUser } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (choose) {
            const timer = setTimeout(() => {
                setAdvice(choose);
                setChoose("");
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [choose]);

    useEffect(() => {
        if (!user && !choose) {
            navigate("/");
        }

        if (user.level >= 5 && !choose && !advice) { 
            navigate("/level-five-output");
        }        
    }, [user.level, navigate, advice]);

    const handleClickBracelets = async(selection) => {
        if (isDisabled) {
            toast.info("Tu as déjà fait un choix, attends le conseil");
            return;
        }
        setIsDisabled(true);
        const newWallet = user.wallet + 15;
        const newHappiness = user.happiness + 1;
        const newReputation = user.reputation + 1;
        const newWisdom = user.wisdom + 1;
        const newEconompattern = user.result.econompattern + 1;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            happiness: newHappiness,
            reputation: newReputation,
            wisdom: newWisdom,
            level: 5,
            choiselevelfive: selection,
            result: { ...user.result, econompattern: newEconompattern }
        });
        setUser ({
            ...user,
            wallet: newWallet,
            happiness: newHappiness,
            reputation: newReputation,
            wisdom: newWisdom,
            level: 5,
            choiselevelfive: selection,
            result: { ...user.result, econompattern: newEconompattern }
        })
    }

    const handleClickCookies = async(selection) => {
        if (isDisabled) {
            toast.info("Tu as déjà fait un choix, attends le conseil");
            return;
        }
        setIsDisabled(true);
        const newWallet = user.wallet + 30;
        const newHappiness = user.happiness + 1;
        const newReputation = user.reputation + 1;
        const newStrategicalpattern = user.result.strategicalpattern + 1;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            happiness: newHappiness,
            reputation: newReputation,
            level: 5,
            choiselevelfive: selection,
            result: { ...user.result, strategicalpattern: newStrategicalpattern }
        });
        setUser({
            ...user,
            wallet: newWallet,
            happiness: newHappiness,
            reputation: newReputation,
            level: 5,
            choiselevelfive: selection,
            result: { ...user.result, strategicalpattern: newStrategicalpattern }
        });
    }

    const handleClickFlowers = async(selection) => {
        if (isDisabled) {
            toast.info("Tu as déjà fait un choix, attends le conseil");
            return;
        }
        setIsDisabled(true);
        const newWallet = user.wallet - 5;
        const newWisdom = user.wisdom + 1;
        const newImpulsivepattern = user.result.impulsivepattern + 1;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            wisdom: newWisdom,
            level: 5,
            choiselevelfive: selection,
            result: { ...user.result, impilsivepattern: newImpulsivepattern }
        });
        setUser({
            ...user,
            wallet: newWallet,
            wisdom: newWisdom,
            level: 5,
            choiselevelfive: selection,
            result: { ...user.result, impilsivepattern: newImpulsivepattern }
        });
    }

    const toggleDetails = (option) => {
        setExpandedOption(expandedOption === option ? null : option);
    };

    return (
        <div className="game-page">
            <div className="game-card" style={{maxWidth: '900px'}}>
                <h1 className="game-title">💼 Niveau 5: Première entreprise</h1>
                
                <div className="game-message-info" style={{marginBottom: '0.75rem', padding: '0.5rem'}}>
                    <p style={{fontSize: '0.875rem', margin: 0}}>
                        Tu veux gagner de l'argent en créant ta première entreprise. Quelle activité choisis-tu?
                    </p>
                </div>

            {!choose && !advice ? (
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                    {/* Варіант 1: Браслети */}
                    <div style={{border: '2px solid #7e22ce', borderRadius: '0.5rem', padding: '0.5rem', background: 'linear-gradient(135deg, #faf5ff 0%, #e9d5ff 100%)'}}>
                        <div style={{marginBottom: '0.25rem'}}>
                            <div style={{fontSize: '1rem', fontWeight: 'bold', color: '#6b21a8', marginBottom: '0.5rem'}}>
                                🎨 Bracelets en élastiques (foire de l'école)
                            </div>
                            <div style={{fontSize: '0.875rem', color: '#7e22ce', background: 'white', padding: '0.5rem', borderRadius: '0.5rem', marginTop: '0.5rem'}}>
                                Coût: 15 pièces | Temps: 6 heures | Risque de perdre des pièces : faible
                            </div>
                        </div>
                        <div style={{display: 'flex', gap: '0.5rem', marginBottom: '0.25rem'}}>
                            <button 
                                onClick={() => toggleDetails('bracelets')}
                                style={{
                                    background: 'white',
                                    border: '1px solid #7e22ce',
                                    padding: '0.25rem 0.5rem',
                                    borderRadius: '0.25rem',
                                    fontSize: '0.75rem',
                                    cursor: 'pointer',
                                    flex: 1
                                }}
                            >
                                {expandedOption === 'bracelets' ? '▼ Masquer' : '▶ Calcul'}
                            </button>
                            <Button 
                                text="Choisir" 
                                onClick={() => handleClickBracelets("bracelets")} 
                                choice
                            />
                        </div>
                        {expandedOption === 'bracelets' && (
                            <div style={{background: 'white', padding: '0.5rem', borderRadius: '0.25rem', marginBottom: '0.25rem', border: '1px solid #7e22ce', fontSize: '0.75rem'}}>
                                <p style={{margin: '0 0 0.125rem 0'}}>Tu fabriques 15 bracelets × tu vends à 2 pièces = 30 pièces</p>
                                <p style={{color: '#7e22ce', fontWeight: 'bold', margin: 0}}>✅ Profit: 15 pièces (30 gagnées - 15 dépensées pour l'achat)</p>
                            </div>
                        )}
                    </div>

                    {/* Варіант 2: Печиво */}
                    <div style={{border: '2px solid #a855f7', borderRadius: '0.5rem', padding: '0.5rem', background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)'}}>
                        <div style={{marginBottom: '0.25rem'}}>
                            <div style={{fontSize: '1rem', fontWeight: 'bold', color: '#7e22ce', marginBottom: '0.5rem'}}>
                                🍪 Biscuits pour les voisins
                            </div>
                            <div style={{fontSize: '0.875rem', color: '#9333ea', background: 'white', padding: '0.5rem', borderRadius: '0.5rem', marginTop: '0.5rem'}}>
                                Coût: 25 pièces | Temps: 3 heures | Risque de perdre des pièces : moyen
                            </div>
                        </div>
                        <div style={{display: 'flex', gap: '0.5rem', marginBottom: '0.25rem'}}>
                            <button 
                                onClick={() => toggleDetails('cookies')}
                                style={{
                                    background: 'white',
                                    border: '1px solid #a855f7',
                                    padding: '0.25rem 0.5rem',
                                    borderRadius: '0.25rem',
                                    fontSize: '0.75rem',
                                    cursor: 'pointer',
                                    flex: 1
                                }}
                            >
                                {expandedOption === 'cookies' ? '▼ Masquer' : '▶ Calcul'}
                            </button>
                            <Button 
                                text="Choisir" 
                                onClick={() => handleClickCookies("cookies")} 
                                choice
                            />
                        </div>
                        {expandedOption === 'cookies' && (
                            <div style={{background: 'white', padding: '0.5rem', borderRadius: '0.25rem', marginBottom: '0.25rem', border: '1px solid #a855f7', fontSize: '0.75rem'}}>
                                <p style={{margin: '0 0 0.125rem 0'}}>Tu fais 11 biscuits × tu vends à 5 pièces = 55 pièces</p>
                                <p style={{color: '#a855f7', fontWeight: 'bold', margin: 0}}>✅ Profit: 30 pièces (55 gagnées - 25 dépensées pour l'achat)</p>
                            </div>
                        )}
                    </div>

                    {/* Варіант 3: рослини */}
                    <div style={{border: '2px solid #c084fc', borderRadius: '0.5rem', padding: '0.5rem', background: 'linear-gradient(135deg, #faf5ff 0%, #f5e8ff 100%)'}}>
                        <div style={{marginBottom: '0.25rem'}}>
                            <div style={{fontSize: '1rem', fontWeight: 'bold', color: '#9333ea', marginBottom: '0.5rem'}}>
                                🪴 Plantes en pots
                            </div>
                            <div style={{fontSize: '0.875rem', color: '#a855f7', background: 'white', padding: '0.5rem', borderRadius: '0.5rem', marginTop: '0.5rem'}}>
                                Coût: 40 pièces | Temps: 4 semaines | Risque de perdre des pièces : élevé
                            </div>
                        </div>
                        <div style={{display: 'flex', gap: '0.5rem', marginBottom: '0.25rem'}}>
                            <button 
                                onClick={() => toggleDetails('flowers')}
                                style={{
                                    background: 'white',
                                    border: '1px solid #c084fc',
                                    padding: '0.25rem 0.5rem',
                                    borderRadius: '0.25rem',
                                    fontSize: '0.75rem',
                                    cursor: 'pointer',
                                    flex: 1
                                }}
                            >
                                {expandedOption === 'flowers' ? '▼ Masquer' : '▶ Scénarios'}
                            </button>
                            <Button 
                                text="Choisir" 
                                onClick={() => handleClickFlowers("flowers")} 
                                choice
                            />
                        </div>
                        {expandedOption === 'flowers' && (
                            <div style={{background: 'white', padding: '0.5rem', borderRadius: '0.25rem', marginBottom: '0.25rem', border: '1px solid #c084fc', fontSize: '0.75rem'}}>
                                <p style={{margin: '0 0 0.125rem 0'}}>Tu plantes 14 pots × tu vends à 5 pièces = 70 pièces</p>
                                <p style={{color: '#7e22ce', margin: '0 0 0.125rem 0'}}>✅ Si tu as de la chance: +70 pièces</p>
                                <p style={{color: '#a855f7', margin: '0 0 0.125rem 0'}}>⚠️ Partiellement: +35 pièces</p>
                                <p style={{color: '#c084fc', margin: 0}}>❌ Si les plantes sont mangées par les insectes: 0 pièces</p>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div>
                    {choose && !advice && choose === "bracelets" && (
                        <div className="game-message-success" style={{marginBottom: '0.75rem', padding: '0.5rem'}}>
                            <p style={{fontSize: '0.875rem', margin: 0}}>🎨 Tu as fabriqué de beaux bracelets! Tout le monde les aime.</p>
                        </div>
                    )}
                    {choose && !advice && choose === "cookies" && (
                        <div className="game-message-success" style={{marginBottom: '0.75rem', padding: '0.5rem'}}>
                            <p style={{fontSize: '0.875rem', margin: 0}}>🍪 Tu as fait de délicieux biscuits! Les voisins ont tout acheté et étaient très contents.</p>
                        </div>
                    )}
                    {choose && !advice && choose === "flowers" && (
                        <div className="game-message-warning" style={{marginBottom: '0.75rem', padding: '0.5rem'}}>
                            <p style={{fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '0.25rem'}}>🌱 Événement:</p>
                            <p style={{fontSize: '0.75rem', marginBottom: '0.25rem'}}>
                                Les graines étaient de mauvaise qualité et seulement 7 plantes ont poussé. Tu as vendu 7 pots.
                            </p>
                            <div style={{background: 'white', padding: '0.5rem', borderRadius: '0.25rem', marginTop: '0.25rem', border: '1px solid #f59e0b', fontSize: '0.75rem'}}>
                                <p style={{margin: '0 0 0.125rem 0'}}>💰 Vendu: 7 × 5 = 35 pièces</p>
                                <p style={{margin: '0 0 0.125rem 0'}}>💸 Dépensé: 40 pièces</p>
                                <p style={{color: '#ef4444', fontWeight: 'bold', margin: 0}}>❌ Perte: -5 pièces</p>
                            </div>
                        </div>
                    )}
                    
                    {advice === "bracelets" && (
                        <div className="game-message-success" style={{padding: '0.5rem'}}>
                            <p style={{fontSize: '0.875rem', margin: 0}}>💡 Sans risque et bon revenu. Bon choix!</p>
                        </div>
                    )}
                    {advice === "cookies" && (
                        <div className="game-message-success" style={{padding: '0.5rem'}}>
                            <p style={{fontSize: '0.875rem', margin: 0}}>💡 En travaillant bien, tu gagnes beaucoup de pièces!</p>
                        </div>
                    )}
                    {advice === "flowers" && (
                        <div className="game-message-info" style={{padding: '0.5rem'}}>
                            <p style={{fontSize: '0.875rem', margin: 0}}>💡 Tu gagnes une expérience importante, pas seulement des dépenses!</p>
                        </div>
                    )}
                    
                    <div className="game-choices" style={{marginTop: '0.75rem'}}>
                        <NavLink to="/level-five-output" className="game-link">
                            ▶️ Suivant
                        </NavLink>
                    </div>
                </div>
            )}
            <ToastContainer />
            </div>
        </div>
    );
};

export default ScenarioLevelFive;
