import { useState, useEffect, use } from "react";
import { savePlayerData, updatePlayerData } from '../../../firebase.js';
import { useUser } from '../../../context/UserContext.jsx';
import { useHeaderVisibility } from '../../../context/HeaderVisibilityContext.jsx';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button/Button.jsx";
import ProgressBar from "../../../components/ProgressBar/ProgressBar.jsx";
import { useNavigate } from "react-router-dom";

const ScenarioLevelOne = () => {
    const [choose, setChoose] = useState("");
    const [advice, setAdvice] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const { user, setUser } = useUser();
    const { hideStats, setHideStats } = useHeaderVisibility();
    const navigate = useNavigate();


    useEffect(() => {
        if (choose === "wasteAllMoney") {
            setHideStats(true);
            // Показуємо пораду через 3 секунди і НЕ очищаємо choose
            const timer = setTimeout(() => {
                setAdvice(choose);
            }, 3000);

            return () => clearTimeout(timer);
        } else if (choose) {
            // Для інших виборів використовуємо 3 секунди і очищаємо choose
            const timer = setTimeout(() => {
                setAdvice(choose);
                setChoose("");
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [choose]);

    console.log("User level:", user.level); 

    useEffect(() => {
        console.log(choose)
        if (!user && !choose) {
            navigate("/");
        }

        if (user.level >= 1 && !choose) { 
            navigate("/level-one-output");
        }        
    }, [user.level, navigate]);

    const handleRetryLevel = async () => {
        const newWallet = 0;
        const newWisdom = 0;
        const newHappiness = 0;
        const newProgressBar = 0;
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            wisdom: newWisdom,
            happiness: newHappiness,
            progressbar: newProgressBar,

            level: 0
            // goal зберігається!
        });

        setUser({
            ...user,
            wallet: newWallet,
            wisdom: newWisdom,
            happiness: newHappiness,
            progressbar: newProgressBar,
            level: 0
        });
        setChoose("");
        setAdvice("");
        setIsDisabled(false);
        setHideStats(false);
    };

    const handleClickNotWasteMoney = async(selection) => {
        if (isDisabled) {
            toast.info("Tu as déjà fait un choix, attends le conseil");
            return;
        }
        setIsDisabled(true);
        const newWallet = user.wallet + 100;
        const newWisdom = user.wisdom + 3;
        const newEconompattern = user.result.econompattern + 1;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            wisdom: newWisdom,
            level: 1,
            choiselevelone: selection,
            result: { ...user.result, econompattern: newEconompattern }
        });
        setUser ({
            ...user,
            wallet: newWallet,
            wisdom: newWisdom,
            level: 1,
            choiselevelone: selection,
            result: { ...user.result, econompattern: newEconompattern }
        })
        console.log("Updated user:", user);
        // Logic for not wasting money
    }
    const handleClickWasteHalfOFMoney = async(selection) => {
        if (isDisabled) {
            toast.info("Tu as déjà fait un choix, attends le conseil");
            return;
        }
        setIsDisabled(true);
        const newWallet = user.wallet + 50;
        const newHappiness = user.happiness + 1;
        const newWisdom = user.wisdom + 1;
        const newStrategicalpattern = user.result.strategicalpattern + 1;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            happiness: newHappiness,
            wisdom: newWisdom,
            level: 1,
            choiselevelone: selection,
            result: { ...user.result, strategicalpattern: newStrategicalpattern }
        });
        setUser({
            ...user,
            wallet: newWallet,
            happiness: newHappiness,
            wisdom: newWisdom,
            level: 1,
            choiselevelone: selection,
            result: { ...user.result, strategicalpattern: newStrategicalpattern }
        });
        // Logic for wasting half of the money
    }
    const handleClickWasteAllMoney = async(selection) => {
        if (isDisabled) {
            toast.info("Tu as déjà fait un choix, attends le conseil");
            return;
        }
        setIsDisabled(true);
        const newHappiness = user.happiness + 3;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: user.wallet + 0,
            happiness: newHappiness,
            level: 1,
            choiselevelone: selection
        });
        setUser({
            ...user,
            wallet: user.wallet + 0,
            happiness: newHappiness,
            level: 1,
            choiselevelone: selection
        });
        // Logic for wasting all the money
    }
    return (
        <div className="game-page">
            <div className="game-card" style={{maxWidth: '800px'}}>
                {choose === "wasteAllMoney" || advice === "wasteAllMoney" ? (
                    // Якщо обрано третій варіант - показуємо тільки повідомлення, пораду і кнопку
                    <>
                        <h1 className="game-title">😅 Oups!</h1>
                        {!advice && (
                            <div className="game-message-warning" style={{marginBottom: '2rem'}}>
                                <p style={{fontSize: '1.125rem'}}>C'était très amusant mais tu n'as plus d'argent du tout.</p>
                            </div>
                        )}
                        {advice === "wasteAllMoney" && (
                            <>
                                <div className="game-message-info" style={{marginBottom: '2rem'}}>
                                    <p style={{fontSize: '1.125rem'}}>💡 Pour réaliser ton rêve, il faut garder au moins un peu. Essaie de refaire le niveau!</p>
                                </div>
                                <div className="game-choices">
                                    <Button onClick={handleRetryLevel} text="🔄 Refaire le niveau" />
                                </div>
                            </>
                        )}
                    </>
                ) : (
                    // Звичайний контент для інших варіантів
                    <>
                        <h1 className="game-title">💰 Niveau 1: Premier argent</h1>
                        
                        {!choose && !advice && (
                            <>
                                <div className="game-message-info" style={{marginBottom: '2rem'}}>
                                    <p style={{fontSize: '1.125rem', lineHeight: '1.75rem'}}>
                                        Tes parents t'ont donné <strong>100 pièces</strong> d'argent de poche. Tu te promène dans la ville, tu vois un magasin de jouets, des bonbons, du karting. Tu as envie d'acheter quelque chose. Que vas-tu faire?
                                    </p>
                                </div>
                                
                                <div className="game-choices">
                                    <Button 
                                        text="💎 Ne pas dépenser l'argent" 
                                        onClick={() => handleClickNotWasteMoney("notWasteMoney")} 
                                        choice
                                    />
                                    <Button 
                                        text="⚖️ Dépenser la moitié, garder la moitié" 
                                        onClick={() => handleClickWasteHalfOFMoney("wasteHalfMoney")} 
                                        choice
                                    />
                                    <Button 
                                        text="🎉 Tout dépenser: karting, bonbons et jouet" 
                                        onClick={() => handleClickWasteAllMoney("wasteAllMoney")} 
                                        choice
                                    />
                                </div>
                            </>
                        )}
                        
                        {choose === "notWasteMoney" && (
                            <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                                <p style={{fontSize: '1.125rem'}}>💎 Tu as décidé de ne rien dépenser. Tu auras beaucoup d'opportunités aux prochains niveaux!</p>
                            </div>
                        )}
                        
                        {choose === "wasteHalfMoney" && (
                            <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                                <p style={{fontSize: '1.125rem'}}>⚖️ Excellent équilibre!</p>
                            </div>
                        )}
                        
                        {advice === "notWasteMoney" && (
                            <div className="game-message-info" style={{marginBottom: '1.5rem'}}>
                                <p style={{fontSize: '1.125rem'}}>💡 Mais souviens-toi: parfois on peut se permettre de petits plaisirs, c'est important aussi.</p>
                            </div>
                        )}
                        
                        {advice === "wasteHalfMoney" && (
                            <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                                <p style={{fontSize: '1.125rem'}}>💡 De telles décisions permettent d'avoir de la joie maintenant et de l'argent plus tard.</p>
                            </div>
                        )}
                        
                        {(advice === "notWasteMoney" || advice === "wasteHalfMoney") && (
                            <div className="game-choices">
                                <NavLink to="/level-one-output" className="game-link">
                                    ▶️ Suivant
                                </NavLink>
                            </div>
                        )}
                    </>
                )}
                <ToastContainer />
            </div>
        </div>
    );
};

export default ScenarioLevelOne;
