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
            toast.info("Ви вже зробили вибір, чекайте на пораду");
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
            toast.info("Ви вже зробили вибір, чекайте на пораду");
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
            toast.info("Ви вже зробили вибір, чекайте на пораду");
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
                        <h1 className="game-title">😅 Упс!</h1>
                        {!advice && (
                            <div className="game-message-warning" style={{marginBottom: '2rem'}}>
                                <p style={{fontSize: '1.125rem'}}>Було дуже весело але в тебе зовсім не залишилося грошей.</p>
                            </div>
                        )}
                        {advice === "wasteAllMoney" && (
                            <>
                                <div className="game-message-info" style={{marginBottom: '2rem'}}>
                                    <p style={{fontSize: '1.125rem'}}>💡 Щоб досягти мрії, варто залишити хоча б трохи. Спробуй пройти рівень ще раз!</p>
                                </div>
                                <div className="game-choices">
                                    <Button onClick={handleRetryLevel} text="🔄 Пройти рівень знову" />
                                </div>
                            </>
                        )}
                    </>
                ) : (
                    // Звичайний контент для інших варіантів
                    <>
                        <h1 className="game-title">💰 Рівень 1: Перші гроші</h1>
                        
                        {!choose && !advice && (
                            <>
                                <div className="game-message-info" style={{marginBottom: '2rem'}}>
                                    <p style={{fontSize: '1.125rem', lineHeight: '1.75rem'}}>
                                        Батьки тобі дали <strong>100 монет</strong> кишенькових. Ти гуляєш містом, бачиш магазин іграшок, солодощі, картінг. Тобі хочеться щось купити. Що ти будеш робити?
                                    </p>
                                </div>
                                
                                <div className="game-choices">
                                    <Button 
                                        text="💎 Не витрачати гроші" 
                                        onClick={() => handleClickNotWasteMoney("notWasteMoney")} 
                                        choice
                                    />
                                    <Button 
                                        text="⚖️ Половину монет витратити, половину зберегти" 
                                        onClick={() => handleClickWasteHalfOFMoney("wasteHalfMoney")} 
                                        choice
                                    />
                                    <Button 
                                        text="🎉 Витратити все: кататися на картингу, купити солодощі і іграшку" 
                                        onClick={() => handleClickWasteAllMoney("wasteAllMoney")} 
                                        choice
                                    />
                                </div>
                            </>
                        )}
                        
                        {choose === "notWasteMoney" && (
                            <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                                <p style={{fontSize: '1.125rem'}}>💎 Ти вирішив нічого не витрачати. Так ти матимеш багато можливостей у наступних рівнях!</p>
                            </div>
                        )}
                        
                        {choose === "wasteHalfMoney" && (
                            <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                                <p style={{fontSize: '1.125rem'}}>⚖️ Чудовий баланс!</p>
                            </div>
                        )}
                        
                        {advice === "notWasteMoney" && (
                            <div className="game-message-info" style={{marginBottom: '1.5rem'}}>
                                <p style={{fontSize: '1.125rem'}}>💡 Але пам'ятай: інколи можна дозволяти собі маленькі радощі, це теж важливо.</p>
                            </div>
                        )}
                        
                        {advice === "wasteHalfMoney" && (
                            <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                                <p style={{fontSize: '1.125rem'}}>💡 Такі рішення допомагають мати і радість зараз, і гроші пізніше.</p>
                            </div>
                        )}
                        
                        {(advice === "notWasteMoney" || advice === "wasteHalfMoney") && (
                            <div className="game-choices">
                                <NavLink to="/level-one-output" className="game-link">
                                    ▶️ Далі
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
