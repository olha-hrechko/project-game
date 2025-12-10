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
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [choose]);

    useEffect(() => {
        if (!user && !choose) {
            navigate("/");
        }

        if (user.level >= 5 && !choose) { 
            navigate("/level-five-output");
        }        
    }, [user.level, navigate]);

    const handleClickBracelets = async(selection) => {
        if (isDisabled) {
            toast.info("Вибір вже зроблено, чекай на пораду");
            return;
        }
        setIsDisabled(true);
        const newWallet = user.wallet + 15;
        const newHappiness = user.happiness + 1;
        const newReputation = user.reputation + 1;
        const newWisdom = user.wisdom + 1;
        const newEconompattern = user.result.econompattern + 2;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            happiness: newHappiness,
            reputation: newReputation,
            wisdom: newWisdom,
            level: 5,
            result: { ...user.result, econompattern: newEconompattern }
        });
        setUser ({
            ...user,
            wallet: newWallet,
            happiness: newHappiness,
            reputation: newReputation,
            wisdom: newWisdom,
            level: 5,
            result: { ...user.result, econompattern: newEconompattern }
        })
    }

    const handleClickCookies = async(selection) => {
        if (isDisabled) {
            toast.info("Ви вже зробили вибір, чекайте на пораду");
            return;
        }
        setIsDisabled(true);
        const newWallet = user.wallet + 30;
        const newHappiness = user.happiness + 1;
        const newReputation = user.reputation + 1;
        const newEconompattern = user.result.econompattern + 3;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            happiness: newHappiness,
            reputation: newReputation,
            level: 5,
            result: { ...user.result, econompattern: newEconompattern }
        });
        setUser({
            ...user,
            wallet: newWallet,
            happiness: newHappiness,
            reputation: newReputation,
            level: 5,
            result: { ...user.result, econompattern: newEconompattern }
        });
    }

    const handleClickFlowers = async(selection) => {
        if (isDisabled) {
            toast.info("Ви вже зробили вибір, чекайте на пораду");
            return;
        }
        setIsDisabled(true);
        const newWallet = user.wallet - 5;
        const newWisdom = user.wisdom + 1;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            wisdom: newWisdom,
            level: 5
        });
        setUser({
            ...user,
            wallet: newWallet,
            wisdom: newWisdom,
            level: 5
        });
    }

    const toggleDetails = (option) => {
        setExpandedOption(expandedOption === option ? null : option);
    };

    return (
        <section>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <p style={{ fontSize: '18px', marginBottom: '20px' }}>
                    Ти хочеш заробити гроші, створивши свій перший бізнес. Яку діяльність ти обереш?
                </p>
            </div>

            {!choose && !advice ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {/* Варіант 1: Браслети */}
                    <div style={{ border: '2px solid #4caf50', borderRadius: '8px', padding: '15px' }}>
                        <div style={{ marginBottom: '10px' }}>
                            <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>
                                Створювати браслети із гумок і продавати на ярмарку у школі
                            </div>
                            <div style={{ fontSize: '14px', color: '#666' }}>
                                Витрати: 15 монет | Час: 6 годин | Ризик: Низький
                            </div>
                        </div>
                        <button 
                            onClick={() => toggleDetails('bracelets')}
                            style={{ 
                                background: '#e3f2fd', 
                                border: '1px solid #2196f3', 
                                padding: '8px 16px', 
                                borderRadius: '4px',
                                cursor: 'pointer',
                                marginBottom: '10px',
                                width: '100%'
                            }}
                        >
                            {expandedOption === 'bracelets' ? '▼ Сховати розрахунок' : '▶ Скільки заробиш?'}
                        </button>
                        {expandedOption === 'bracelets' && (
                            <div style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px', marginBottom: '10px' }}>
                                <p> <strong>Розрахунок:</strong></p>
                                <p>🔸 Робиш 15 браслетів (-15 монет)</p>
                                <p>🔸 Продаєш один браслет за 2 монети (15 × 2 = 30 монет)</p>
                                <p style={{ color: '#4caf50', fontWeight: 'bold' }}> Заробляєш: 15 монет прибутку (30 - 15 = 15)</p>
                            </div>
                        )}
                        <Button 
                            text="Обрати браслети" 
                            onClick={() => handleClickBracelets("bracelets")} 
                        />
                    </div>

                    {/* Варіант 2: Печиво */}
                    <div style={{ border: '2px solid #ff9800', borderRadius: '8px', padding: '15px' }}>
                        <div style={{ marginBottom: '10px' }}>
                            <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>
                                Приготувати печиво і продавати сусідам
                            </div>
                            <div style={{ fontSize: '14px', color: '#666' }}>
                                Витрати: 25 монет | Час: 3 години | Ризик: Середній
                            </div>
                        </div>
                        <button 
                            onClick={() => toggleDetails('cookies')}
                            style={{ 
                                background: '#fff3e0', 
                                border: '1px solid #ff9800', 
                                padding: '8px 16px', 
                                borderRadius: '4px',
                                cursor: 'pointer',
                                marginBottom: '10px',
                                width: '100%'
                            }}
                        >
                            {expandedOption === 'cookies' ? '▼ Сховати розрахунок' : '▶ Скільки заробиш?'}
                        </button>
                        {expandedOption === 'cookies' && (
                            <div style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px', marginBottom: '10px' }}>
                                <p><strong>Розрахунок:</strong></p>
                                <p>Робиш 11 печивок (-25 монет)</p>
                                <p>Продаєш одне печиво за 5 монет (11 × 5 = 55 монет)</p>
                                <p style={{ color: '#4caf50', fontWeight: 'bold' }}>✅ Заробляєш: 30 монет прибутку (55 - 25 = 30)</p>
                            </div>
                        )}
                        <Button 
                            text="Обрати печиво" 
                            onClick={() => handleClickCookies("cookies")} 
                        />
                    </div>

                    {/* Варіант 3: Квіти */}
                    <div style={{ border: '2px solid #f44336', borderRadius: '8px', padding: '15px' }}>
                        <div style={{ marginBottom: '10px' }}>
                            <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>
                                Виростити квіточки у горщиках і продати
                            </div>
                            <div style={{ fontSize: '14px', color: '#666' }}>
                                Витрати: 40 монет | Час: 2 години + 4 тижні | Ризик: Високий
                            </div>
                        </div>
                        <button 
                            onClick={() => toggleDetails('flowers')}
                            style={{ 
                                background: '#ffebee', 
                                border: '1px solid #f44336', 
                                padding: '8px 16px', 
                                borderRadius: '4px',
                                cursor: 'pointer',
                                marginBottom: '10px',
                                width: '100%'
                            }}
                        >
                            {expandedOption === 'flowers' ? '▼ Сховати розрахунок' : '▶ Скільки заробиш?'}
                        </button>
                        {expandedOption === 'flowers' && (
                            <div style={{ background: '#f5f5f5', padding: '12px', borderRadius: '4px', marginBottom: '10px' }}>
                                <p><strong>Можливі сценарії:</strong></p>
                                <p>Висаджуєш 14 горщиків (-40 монет)</p>
                                <p>Продаєш один горщик за 5 монет</p>
                                <p style={{ color: '#4caf50' }}>Якщо пощастить: заробиш + 60 монет</p>
                                <p style={{ color: '#ff9800' }}>Якщо виросте кілька горщиків: +35 монет</p>
                                <p style={{ color: '#f44336' }}>Якщо комахи з'їдять: 0 монет</p>
                            </div>
                        )}
                        <Button 
                            text="Обрати квіти" 
                            onClick={() => handleClickFlowers("flowers")} 
                        />
                    </div>
                </div>
            ) : (
                <>
                    {choose === "bracelets" && <p>Ти зробив(ла) красиві браслети! Вони всім подобаються. </p>}
                    {choose === "cookies" && <p>Ти зробив(ла) дуже смачне печиво! Сусіди купили все і були дуже задоволені. </p>}
                    {choose === "flowers" && (
                        <div style={{ textAlign: 'center', padding: '20px', background: '#fff3e0', borderRadius: '8px', marginBottom: '20px' }}>
                            <p style={{ fontSize: '20px', marginBottom: '15px' }}>🌱 <strong>Подія:</strong></p>
                            <p style={{ fontSize: '16px', marginBottom: '10px' }}>
                                Насіння було неякісним і проросло лише 7 рослин. Ти продав 7 горщиків.
                            </p>
                            <div style={{ background: '#f5f5f5', padding: '15px', borderRadius: '4px', marginTop: '15px' }}>
                                <p style={{ fontSize: '14px', color: '#666' }}>📊 Фінансовий результат:</p>
                                <p>💰 Продано: 7 горщиків × 5 монет = 35 монет</p>
                                <p>💸 Витрачено: 40 монет</p>
                                <p style={{ color: '#f44336', fontWeight: 'bold', fontSize: '16px', marginTop: '10px' }}>
                                    ❌ Збиток: -5 монет
                                </p>
                            </div>
                            <p style={{ marginTop: '15px', color: '#666' }}>
                                Ти втратив(ла) трохи грошей, але отримав(ла) досвід!
                            </p>
                        </div>
                    )}
                    
                    {advice === "bracelets" && (
                        <p>Порада: Ти не ризикував(ла) і все-одно заробив(ла). Це розумний вибір! Ти впевнено йдеш до мети!</p>
                    )}
                    {advice === "cookies" && (
                        <p>Порада: Ти добре попрацював(ла) і заробив(ла) багато грошей! Тепер ти ще ближче до своєї мрії!</p>
                    )}
                    {advice === "flowers" && (
                        <p>Порада: Ти отримав(ла) досвід і мудрість! Цей досвід допоможе тобі у майбутньому приймати рішення які принесуть дохід.</p>
                    )}
                    <NavLink to="/level-five-output">Далі</NavLink>
                </>
            )}
            <ToastContainer />
        </section>
    );
};

export default ScenarioLevelFive;
