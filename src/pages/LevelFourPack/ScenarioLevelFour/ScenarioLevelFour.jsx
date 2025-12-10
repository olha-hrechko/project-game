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
            toast.info("Ви вже зробили вибір, чекайте на пораду");
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
            toast.info("Ви вже зробили вибір, чекайте на пораду");
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
            toast.info("Ви вже зробили вибір, чекайте на пораду");
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
                <h1 className="game-title">💥 Рівень 4: Несподіванка!</h1>
                
                {!choose && !advice && (
                    <div className="game-message-warning" style={{marginBottom: '2rem'}}>
                        <p style={{fontSize: '1.125rem', marginBottom: '1rem'}}>
                            📱 Ти граєш у гру на планшеті і раптом він ламається!</p>
                    </div>
                )}

                {!choose && !advice ? (
                    <div className="game-choices">
                        <Button 
                            text="⏳ Відкласти планшет (не витрачати монети)" 
                            onClick={() => handleClickPostpone("postpone")} 
                            choice
                        />
                        <Button 
                            text="🔧 Відремонтувати (-15 монет)" 
                            onClick={() => handleClickRepair("repair")} 
                            choice
                        />
                        <Button 
                            text="✨ Купити новий планшет (-45 монет)" 
                            onClick={() => handleClickBuyNew("buyNew")} 
                            choice
                        />
                    </div>
                ) : (
                    <div>
                        {choose && !advice && choose === "postpone" && (
                            <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                                <p style={{fontSize: '1.125rem'}}>💪 Вирішив(ла) економити на основну ціль. Мудре рішення!</p>
                            </div>
                        )}
                        {choose && !advice && choose === "repair" && (
                            <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                                <p style={{fontSize: '1.125rem'}}>🎮 Чудово! Тепер ти можеш грати на планшеті і далі збирати на мрію.</p>
                            </div>
                        )}
                        {choose && !advice && choose === "buyNew" && (
                            <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                                <p style={{fontSize: '1.125rem'}}>✨ Новий планшет! Тобі подобається гратися на ньому!</p>
                            </div>
                        )}
                        
                        {advice === "postpone" && (
                            <div className="game-message-info">
                                <p style={{fontSize: '1.125rem'}}>💡 Порада: Планшет відремонтуєш, якщо залишаться гроші після покупки основної цілі.</p>
                            </div>
                        )}
                        {advice === "repair" && (
                            <div className="game-message-info">
                                <p style={{fontSize: '1.125rem'}}>💡 Порада: Це найкраще рішення, тепер ти можеш мати робочий планшет і далі збирати на основну мрію.</p>
                            </div>
                        )}
                        {advice === "buyNew" && (
                            <div className="game-message-info">
                                <p style={{fontSize: '1.125rem'}}>💡 Порада: Новий планшет! І друзі в захваті! Але ти віддалився від покупки основної мрії.</p>
                            </div>
                        )}
                        
                        <div className="game-choices" style={{marginTop: '2rem'}}>
                            <NavLink to="/level-four-output" className="game-link">▶️ Далі</NavLink>
                        </div>
                    </div>
                )}
                <ToastContainer />
            </div>
        </div>
    );
};

export default ScenarioLevelFour;
