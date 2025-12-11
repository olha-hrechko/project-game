import { useState, useEffect } from "react";
import { updatePlayerData } from '../../../firebase.js';
import { useUser } from '../../../context/UserContext.jsx';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button/Button.jsx";
import { useNavigate } from "react-router-dom";

const ScenarioLevelFour = () => {
    const [choose, setChoose] = useState("");
    const [advice, setAdvice] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
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

        if (user.level >= 4 && !choose && !advice) { 
            navigate("/level-four-output");
        }        
    }, [user.level, navigate, advice]);

    const handleClickPostpone = async(selection) => {
        if (isDisabled) {
            toast.info("Tu as déjà fait un choix, attends le conseil");
            return;
        }
        setIsDisabled(true);
        const newWisdom = user.wisdom + 1;
        const newEconompattern = user.result.econompattern + 1;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wisdom: newWisdom,
            level: 4,
            choiselevelfour: selection,
            result: { ...user.result, econompattern: newEconompattern + 1 }
        });
        setUser ({
            ...user,
            wisdom: newWisdom,
            level: 4,
            choiselevelfour: selection,
            result: { ...user.result, econompattern: newEconompattern + 1 }
        })
    }

    const handleClickRepair = async(selection) => {
        if (isDisabled) {
            toast.info("Tu as déjà fait un choix, attends le conseil");
            return;
        }
        setIsDisabled(true);
        const newWallet = user.wallet - 15;
        const newWisdom = user.wisdom + 1;
        const newHappiness = user.happiness + 1;
        const newStrategicpattern = user.result.strategicpattern + 1;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            wisdom: newWisdom,
            happiness: newHappiness,
            level: 4,
            choiselevelfour: selection,
            result: { ...user.result, strategicpattern: newStrategicpattern}
        });
        setUser({
            ...user,
            wallet: newWallet,
            wisdom: newWisdom,
            happiness: newHappiness,
            level: 4,
            choiselevelfour: selection,
            result: { ...user.result, strategicpattern: newStrategicpattern}
        });
    }

    const handleClickBuyNew = async(selection) => {
        if (isDisabled) {
            toast.info("Tu as déjà fait un choix, attends le conseil");
            return;
        }
        setIsDisabled(true);
        const newWallet = user.wallet - 45;
        const newHappiness = user.happiness + 2;
        const newReputation = user.reputation + 1;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            happiness: newHappiness,
            reputation: newReputation,
            level: 4,
            choiselevelfour: selection,
            result: { ...user.result, impulsivepattern: user.result.impulsivepattern}
        });
        setUser({
            ...user,
            wallet: newWallet,
            happiness: newHappiness,
            reputation: newReputation,
            level: 4,
            choiselevelfour: selection,
            result: { ...user.result, impulsivepattern: user.result.impulsivepattern}
        });
    }

    return (
        <div className="game-page">
            <div className="game-card" style={{maxWidth: '800px'}}>
                <h1 className="game-title">💥 Niveau 4: Dépenses inattendues</h1>
                
                {!choose && !advice && (
                    <div className="game-message-warning" style={{marginBottom: '2rem'}}>
                        <p style={{fontSize: '1.125rem', marginBottom: '1rem'}}>
                            📱 Tu joues à un jeu sur ta tablette et soudain elle se casse!</p>
                    </div>
                )}

                {!choose && !advice ? (
                    <div className="game-choices">
                        <Button 
                            text="⏳ Mettre de côté la tablette (ne pas dépenser de pièces)" 
                            onClick={() => handleClickPostpone("postpone")} 
                            choice
                        />
                        <Button 
                            text="🔧 Réparer (-15 pièces)" 
                            onClick={() => handleClickRepair("repair")} 
                            choice
                        />
                        <Button 
                            text="✨ Acheter une nouvelle tablette (-45 pièces)" 
                            onClick={() => handleClickBuyNew("buyNew")} 
                            choice
                        />
                    </div>
                ) : (
                    <div>
                        {choose && !advice && choose === "postpone" && (
                            <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                                <p style={{fontSize: '1.125rem'}}>💪 Tu as décidé d'économiser pour ton objectif principal. Sage décision!</p>
                            </div>
                        )}
                        {choose && !advice && choose === "repair" && (
                            <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                                <p style={{fontSize: '1.125rem'}}>🎮 Super! Maintenant tu peux jouer sur ta tablette et continuer à économiser pour ton rêve.</p>
                            </div>
                        )}
                        {choose && !advice && choose === "buyNew" && (
                            <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                                <p style={{fontSize: '1.125rem'}}>✨ Nouvelle tablette! Tu aimes jouer dessus!</p>
                            </div>
                        )}
                        
                        {advice === "postpone" && (
                            <div className="game-message-info">
                                <p style={{fontSize: '1.125rem'}}>💡 Conseil: Tu répareras la tablette s'il reste de l'argent après l'achat de ton objectif principal.</p>
                            </div>
                        )}
                        {advice === "repair" && (
                            <div className="game-message-info">
                                <p style={{fontSize: '1.125rem'}}>💡 Conseil: C'est la meilleure décision, maintenant tu peux avoir une tablette fonctionnelle et continuer à économiser pour ton rêve principal.</p>
                            </div>
                        )}
                        {advice === "buyNew" && (
                            <div className="game-message-info">
                                <p style={{fontSize: '1.125rem'}}>💡 Conseil: Nouvelle tablette! Et tes amis sont ravis! Mais tu t'es éloigné de l'achat de ton rêve principal.</p>
                            </div>
                        )}
                        
                        <div className="game-choices" style={{marginTop: '2rem'}}>
                            <NavLink to="/level-four-output" className="game-link">▶️ Suivant</NavLink>
                        </div>
                    </div>
                )}
                <ToastContainer />
            </div>
        </div>
    );
};

export default ScenarioLevelFour;
