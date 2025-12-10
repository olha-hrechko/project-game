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
            toast.info("Вибір вже зроблено, чекай на пораду");
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
            toast.info("Ви вже зробили вибір, чекайте на пораду");
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
            toast.info("Ви вже зробили вибір, чекайте на пораду");
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
                <h1 className="game-title">💼 Рівень 5: Перший бізнес</h1>
                
                <div className="game-message-info" style={{marginBottom: '0.75rem', padding: '0.5rem'}}>
                    <p style={{fontSize: '0.875rem', margin: 0}}>
                        Ти хочеш заробити гроші, створивши свій перший бізнес. Яку діяльність ти обереш?
                    </p>
                </div>

            {!choose && !advice ? (
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                    {/* Варіант 1: Браслети */}
                    <div style={{border: '2px solid #7e22ce', borderRadius: '0.5rem', padding: '0.5rem', background: 'linear-gradient(135deg, #faf5ff 0%, #e9d5ff 100%)'}}>
                        <div style={{marginBottom: '0.25rem'}}>
                            <div style={{fontSize: '1rem', fontWeight: 'bold', color: '#6b21a8', marginBottom: '0.5rem'}}>
                                🎨 Браслети із гумок (ярмарок у школі)
                            </div>
                            <div style={{fontSize: '0.875rem', color: '#7e22ce', background: 'white', padding: '0.5rem', borderRadius: '0.5rem', marginTop: '0.5rem'}}>
                                Витрати: 15 монет | Час: 6 годин | Ризик втратити монети : низький
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
                                {expandedOption === 'bracelets' ? '▼ Сховати' : '▶ Розрахунок'}
                            </button>
                            <Button 
                                text="Обрати" 
                                onClick={() => handleClickBracelets("bracelets")} 
                                choice
                            />
                        </div>
                        {expandedOption === 'bracelets' && (
                            <div style={{background: 'white', padding: '0.5rem', borderRadius: '0.25rem', marginBottom: '0.25rem', border: '1px solid #7e22ce', fontSize: '0.75rem'}}>
                                <p style={{margin: '0 0 0.125rem 0'}}>Робиш 15 браслетів × продаєш по 2 монети = 30 монет</p>
                                <p style={{color: '#7e22ce', fontWeight: 'bold', margin: 0}}>✅ Прибуток: 15 монет (30 зароблених - 15 витрачених на закупку )</p>
                            </div>
                        )}
                    </div>

                    {/* Варіант 2: Печиво */}
                    <div style={{border: '2px solid #a855f7', borderRadius: '0.5rem', padding: '0.5rem', background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)'}}>
                        <div style={{marginBottom: '0.25rem'}}>
                            <div style={{fontSize: '1rem', fontWeight: 'bold', color: '#7e22ce', marginBottom: '0.5rem'}}>
                                🍪 Печиво для сусідів
                            </div>
                            <div style={{fontSize: '0.875rem', color: '#9333ea', background: 'white', padding: '0.5rem', borderRadius: '0.5rem', marginTop: '0.5rem'}}>
                                Витрати: 25 монет | Час: 3 години | Ризик втратити монети : середній
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
                                {expandedOption === 'cookies' ? '▼ Сховати' : '▶ Розрахунок'}
                            </button>
                            <Button 
                                text="Обрати" 
                                onClick={() => handleClickCookies("cookies")} 
                                choice
                            />
                        </div>
                        {expandedOption === 'cookies' && (
                            <div style={{background: 'white', padding: '0.5rem', borderRadius: '0.25rem', marginBottom: '0.25rem', border: '1px solid #a855f7', fontSize: '0.75rem'}}>
                                <p style={{margin: '0 0 0.125rem 0'}}>Робиш 11 печивок × продаєш по 5 монет = 55 монет</p>
                                <p style={{color: '#a855f7', fontWeight: 'bold', margin: 0}}>✅ Прибуток: 30 монет (55 зароблених - 25 витрачених на закупку)</p>
                            </div>
                        )}
                    </div>

                    {/* Варіант 3: рослини */}
                    <div style={{border: '2px solid #c084fc', borderRadius: '0.5rem', padding: '0.5rem', background: 'linear-gradient(135deg, #faf5ff 0%, #f5e8ff 100%)'}}>
                        <div style={{marginBottom: '0.25rem'}}>
                            <div style={{fontSize: '1rem', fontWeight: 'bold', color: '#9333ea', marginBottom: '0.5rem'}}>
                                🪴 Рослини в горщиках
                            </div>
                            <div style={{fontSize: '0.875rem', color: '#a855f7', background: 'white', padding: '0.5rem', borderRadius: '0.5rem', marginTop: '0.5rem'}}>
                                Витрати: 40 монет | Час: 4 тижні | Ризик втратити монети : високий
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
                                {expandedOption === 'flowers' ? '▼ Сховати' : '▶ Сценарії'}
                            </button>
                            <Button 
                                text="Обрати" 
                                onClick={() => handleClickFlowers("flowers")} 
                                choice
                            />
                        </div>
                        {expandedOption === 'flowers' && (
                            <div style={{background: 'white', padding: '0.5rem', borderRadius: '0.25rem', marginBottom: '0.25rem', border: '1px solid #c084fc', fontSize: '0.75rem'}}>
                                <p style={{margin: '0 0 0.125rem 0'}}> садиш 14 горщиків × продаєш по 5 монет = 70 монет</p>
                                <p style={{color: '#7e22ce', margin: '0 0 0.125rem 0'}}>✅ Пощастить: +70 монет</p>
                                <p style={{color: '#a855f7', margin: '0 0 0.125rem 0'}}>⚠️ Частково: +35 монет</p>
                                <p style={{color: '#c084fc', margin: 0}}>❌ Якщо рослини поїдять комахи: 0 монет</p>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div>
                    {choose && !advice && choose === "bracelets" && (
                        <div className="game-message-success" style={{marginBottom: '0.75rem', padding: '0.5rem'}}>
                            <p style={{fontSize: '0.875rem', margin: 0}}>🎨 Ти зробив(ла) красиві браслети! Вони всім подобаються.</p>
                        </div>
                    )}
                    {choose && !advice && choose === "cookies" && (
                        <div className="game-message-success" style={{marginBottom: '0.75rem', padding: '0.5rem'}}>
                            <p style={{fontSize: '0.875rem', margin: 0}}>🍪 Ти зробив(ла) дуже смачне печиво! Сусіди купили все і були дуже задоволені.</p>
                        </div>
                    )}
                    {choose && !advice && choose === "flowers" && (
                        <div className="game-message-warning" style={{marginBottom: '0.75rem', padding: '0.5rem'}}>
                            <p style={{fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '0.25rem'}}>🌱 Подія:</p>
                            <p style={{fontSize: '0.75rem', marginBottom: '0.25rem'}}>
                                Насіння було неякісним і проросло лише 7 рослин. Ти продав 7 горщиків.
                            </p>
                            <div style={{background: 'white', padding: '0.5rem', borderRadius: '0.25rem', marginTop: '0.25rem', border: '1px solid #f59e0b', fontSize: '0.75rem'}}>
                                <p style={{margin: '0 0 0.125rem 0'}}>💰 Продано: 7 × 5 = 35 монет</p>
                                <p style={{margin: '0 0 0.125rem 0'}}>💸 Витрачено: 40 монет</p>
                                <p style={{color: '#ef4444', fontWeight: 'bold', margin: 0}}>❌ Збиток: -5 монет</p>
                            </div>
                        </div>
                    )}
                    
                    {advice === "bracelets" && (
                        <div className="game-message-success" style={{padding: '0.5rem'}}>
                            <p style={{fontSize: '0.875rem', margin: 0}}>💡 Без ризику і гарний заробіток. Гарний вибір!</p>
                        </div>
                    )}
                    {advice === "cookies" && (
                        <div className="game-message-success" style={{padding: '0.5rem'}}>
                            <p style={{fontSize: '0.875rem', margin: 0}}>💡 Добре попрацювавши, заробляєш багато монет!</p>
                        </div>
                    )}
                    {advice === "flowers" && (
                        <div className="game-message-info" style={{padding: '0.5rem'}}>
                            <p style={{fontSize: '0.875rem', margin: 0}}>💡 Ти отримуєш важливий досвід, не тільки витрати!</p>
                        </div>
                    )}
                    
                    <div className="game-choices" style={{marginTop: '0.75rem'}}>
                        <NavLink to="/level-five-output" className="game-link">
                            ▶️ Далі
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
