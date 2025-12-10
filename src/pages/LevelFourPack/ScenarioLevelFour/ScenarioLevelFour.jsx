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
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [choose]);

    useEffect(() => {
        if (!user && !choose) {
            navigate("/");
        }

        if (user.level >= 4 && !choose) { 
            navigate("/level-four-output");
        }        
    }, [user.level, navigate]);

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
            result: { ...user.result, econompattern: newEconompattern }
        });
        setUser ({
            ...user,
            wisdom: newWisdom,
            level: 4,
            result: { ...user.result, econompattern: newEconompattern }
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
        const newStrategicpattern = user.result.strategicpattern + 2;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            wisdom: newWisdom,
            happiness: newHappiness,
            level: 4,
            result: { ...user.result, strategicpattern: newStrategicpattern }
        });
        setUser({
            ...user,
            wallet: newWallet,
            wisdom: newWisdom,
            happiness: newHappiness,
            level: 4,
            result: { ...user.result, strategicpattern: newStrategicpattern }
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
            result: { ...user.result, impulsivepattern: user.result.impulsivepattern + 1 }
        });
        setUser({
            ...user,
            wallet: newWallet,
            happiness: newHappiness,
            reputation: newReputation,
            level: 4,
            result: { ...user.result, impulsivepattern: user.result.impulsivepattern + 1 }
        });
    }

    return (
        <section>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                    Ти граєш у гру на планшеті і раптом він ламається 📱🔧
                </p>
                <p style={{ fontSize: '16px', color: '#666' }}>
                    Ціна нового планшету - 45 монет, ремонт деталі планшету - 15 монет.
                </p>
            </div>

            {!choose && !advice ? (
                <div>
                    <Button 
                        text="Відкласти планшет (почекати)" 
                        onClick={() => handleClickPostpone("postpone")} 
                    />
                    <Button 
                        text="Відремонтувати планшет - 15 монет" 
                        onClick={() => handleClickRepair("repair")} 
                    />
                    <Button 
                        text="Купити новий планшет - 45 монет" 
                        onClick={() => handleClickBuyNew("buyNew")} 
                    />
                </div>
            ) : (
                <>
                    {choose === "postpone" && <p>Вирішив економити на основну ціль. Мудре рішення!</p>}
                    {choose === "repair" && <p>Чудово! Тепер ти можеш грати на планшеті і далі збирати на мрію.</p>}
                    {choose === "buyNew" && <p>Новий планшет! Тобі подобається гратися на ньому планшеті!</p>}
                    
                    {advice === "postpone" && (
                        <p>Порада: Планшет відремонтую, якщо залишаться гроші після покупки основної цілі.</p>
                    )}
                    {advice === "repair" && (
                        <p>Порада: Це найкраще рішення, тепер ти можеш мати робочий планшет і далі збирати на основну мрію.</p>
                    )}
                    {advice === "buyNew" && (
                        <p>Порада: Новий планшет! І друзі в захваті! Але ти віддалився від покупки основної мрії.</p>
                    )}
                    <NavLink to="/level-four-output">Далі</NavLink>
                </>
            )}
            <ToastContainer />
        </section>
    );
};

export default ScenarioLevelFour;
