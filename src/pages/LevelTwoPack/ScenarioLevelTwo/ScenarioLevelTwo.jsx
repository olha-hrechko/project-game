import { useState, useEffect } from "react";
import { updatePlayerData } from '../../../firebase.js';
import { useUser } from '../../../context/UserContext.jsx';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button/Button.jsx";
import { useNavigate } from "react-router-dom";

const ScenarioLevelTwo = () => {
    const [choose, setChoose] = useState("");
    const [advice, setAdvice] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const { user, setUser } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (choose) {
            const timer = setTimeout(() => {
                setAdvice(choose);
                setChoose(""); // Hide the first message when advice appears
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [choose]);

    useEffect(() => {
        if (!user && !choose) {
            navigate("/");
        }

        if (user.level >= 2 && !choose && !advice) { 
            navigate("/level-two-output");
        }
    }, [user.level, navigate, choose, advice]);

    const handleClickNotBuy = async(selection) => {
        if (isDisabled) {
            toast.info("Tu as déjà fait un choix, attends le conseil");
            return;
        }
        if (!user) {
            toast.error("Utilisateur non trouvé");
            return;
        }
        setIsDisabled(true);
        const newWisdom = user.wisdom + 1;
        const newEconompattern = user.result.econompattern + 1;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wisdom: newWisdom,
            level: 2,
            choiseleveltwo: selection,
            result: { ...user.result, econompattern: newEconompattern }
        });
        setUser({
            ...user,
            wisdom: newWisdom,
            level: 2,
            choiseleveltwo: selection,
            result: { ...user.result, econompattern: newEconompattern }
        });
    }

    const handleClickBuyMarketplace = async(selection) => {
        if (isDisabled) {
            toast.info("Tu as déjà fait un choix, attends le conseil");
            return;
        }
        if (!user) {
            toast.error("Utilisateur non trouvé");
            return;
        }
        setIsDisabled(true);
        const newWallet = user.wallet - 25;
        const newWisdom = user.wisdom + 1;
        const newStrategicalpattern = user.result.strategicalpattern + 1;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            wisdom: newWisdom,
            level: 2,
            choiseleveltwo: selection,
            result: { ...user.result, strategicalpattern: newStrategicalpattern }
        });
        setUser({
            ...user,
            wallet: newWallet,
            wisdom: newWisdom,
            level: 2,
            choiseleveltwo: selection,
            result: { ...user.result, strategicalpattern: newStrategicalpattern }
        });
    }

    const handleClickBuyProfessional = async(selection) => {
        if (isDisabled) {
            toast.info("Tu as déjà fait un choix, attends le conseil");
            return;
        }
        if (!user) {
            toast.error("Utilisateur non trouvé");
            return;
        }
        setIsDisabled(true);
        const newWallet = user.wallet - 60;
        const newHappiness = user.happiness + 2;
        const newImpulsivepattern = user.result.impilsivepattern + 2;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            happiness: newHappiness,
            level: 2,
            choiseleveltwo: selection,
            result: { ...user.result, impulsivepattern: newImpulsivepattern }
        });
        setUser({
            ...user,
            wallet: newWallet,
            happiness: newHappiness,
            level: 2,
            choiseleveltwo: selection,
            result: { ...user.result, impulsivepattern: newImpulsivepattern }  
        });
    }

    return (
        <div className="game-page">
            <div className="game-card" style={{maxWidth: '800px'}}>
                <h1 className="game-title">🛍️ Niveau 2: Recherche de bonne affaire</h1>
                
                {!choose && !advice && (
                    <>
                        <div className="game-message-info" style={{marginBottom: '2rem'}}>
                            <p style={{fontSize: '1.125rem', lineHeight: '1.75rem'}}>
                                Ton hobby a besoin de nouveaux matériaux. Que faire?
                            </p>
                        </div>
                        
                        <div className="game-choices">
                            <Button 
                                text="💭 Ne pas acheter, utiliser ce qu'on a" 
                                onClick={() => handleClickNotBuy("notBuy")} 
                                choice
                            />
                            <Button 
                                text="🛍️ Acheter un ensemble de matériaux sur marketplace pour 25 pièces" 
                                onClick={() => handleClickBuyMarketplace("buyMarketplace")} 
                                choice
                            />
                            <Button 
                                text="⭐ Acheter un ensemble professionnel pour 60 pièces" 
                                onClick={() => handleClickBuyProfessional("buyProfessional")} 
                                choice
                            />
                        </div>
                    </>
                )}
                
                {choose && !advice && choose === "notBuy" && (
                    <div className="game-message-info" style={{marginBottom: '1.5rem'}}>
                        <p style={{fontSize: '1.125rem'}}>💭 Tu n'as pas dépensé d'argent! Le progrès vers l'objectif est resté le même.</p>
                    </div>
                )}
                
                {choose && !advice && choose === "buyMarketplace" && (
                    <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                        <p style={{fontSize: '1.125rem'}}>🛍️ Bon choix! Tu as investi dans le développement, mais tu t'es un peu éloigné de ton rêve.</p>
                    </div>
                )}
                
                {choose && !advice && choose === "buyProfessional" && (
                    <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                        <p style={{fontSize: '1.125rem'}}>⭐ L'ensemble professionnel - c'est génial, tu l'aimes beaucoup car il est de qualité! Mais pourras-tu maintenant économiser pour ton rêve?</p>
                    </div>
                )}
                
                {advice === "notBuy" && (
                    <div className="game-message-info" style={{marginBottom: '1.5rem'}}>
                        <p style={{fontSize: '1.125rem'}}>💡Si tu économises les pièces, tu pourras atteindre ton rêve plus rapidement.</p>
                    </div>
                )}
                
                {advice === "buyMarketplace" && (
                    <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                        <p style={{fontSize: '1.125rem'}}>💡Parfois il faut dépenser des pièces pour d'autres besoins précieux, cela arrive souvent.</p>
                    </div>
                )}
                
                {advice === "buyProfessional" && (
                    <div className="game-message-warning" style={{marginBottom: '1.5rem'}}>
                        <p style={{fontSize: '1.125rem'}}>💡Parfois il vaut mieux économiser un peu pour atteindre ton rêve.</p>
                    </div>
                )}
                
                {(advice === "notBuy" || advice === "buyMarketplace" || advice === "buyProfessional") && (
                    <div className="game-choices">
                        <NavLink to="/level-two-output" className="game-link">
                            ▶️ Suivant
                        </NavLink>
                    </div>
                )}
                
                <ToastContainer />
            </div>
        </div>
    );
};

export default ScenarioLevelTwo;
