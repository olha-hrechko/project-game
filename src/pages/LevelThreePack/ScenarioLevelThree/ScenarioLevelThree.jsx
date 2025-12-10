import { useState, useEffect } from "react";
import { updatePlayerData } from '../../../firebase.js';
import { useUser } from '../../../context/UserContext.jsx';
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button/Button.jsx";
import { useNavigate } from "react-router-dom";

const ScenarioLevelThree = () => {
    const [choose, setChoose] = useState("");
    const [advice, setAdvice] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const [envelopeOpened, setEnvelopeOpened] = useState(false);
    const [giftAmount, setGiftAmount] = useState(null);
    const { user, setUser } = useUser();
    const navigate = useNavigate();

    // Відкриття конверта - генерація випадкової суми
    const handleOpenEnvelope = () => {
        const amounts = [100, 80, 50];
        const randomAmount = amounts[Math.floor(Math.random() * amounts.length)];
        setGiftAmount(randomAmount);
        setEnvelopeOpened(true);
    };

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
            return;
        }

        if (user && user.level >= 3 && !choose && !advice) { 
            navigate("/level-three-output");
        }        
    }, [user, user?.level, navigate, choose, advice]);

    const handleClickSaveAll = async(selection) => {
        if (isDisabled) {
            toast.info("Ви вже зробили вибір, чекайте на пораду");
            return;
        }
        setIsDisabled(true);
        const newWallet = user.wallet + giftAmount;
        const newWisdom = user.wisdom + 1;
        const newEconompattern = user.result.econompattern + 1;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            wisdom: newWisdom,
            level: 3,
            choiselevelthree: selection,
            result: { ...user.result, econompattern: newEconompattern }
        });
        setUser ({
            ...user,
            wallet: newWallet,
            wisdom: newWisdom,
            level: 3,
            choiselevelthree: selection,
            result: { ...user.result, econompattern: newEconompattern}
        })
    }

    const handleClickSave80Percent = async(selection) => {
        if (isDisabled) {
            toast.info("Ви вже зробили вибір, чекайте на пораду");
            return;
        }
        setIsDisabled(true);
        const savedAmount = Math.floor(giftAmount * 0.8);
        const newWallet = user.wallet + savedAmount;
        const newHappiness = user.happiness + 1;
        const newStrategicalpattern = user.result.strategicalpattern + 1;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            happiness: newHappiness,
            level: 3,
            choiselevelthree: selection,
            result: { ...user.result, strategicalpattern: newStrategicalpattern }
        });
        setUser({
            ...user,
            wallet: newWallet,
            happiness: newHappiness,
            level: 3,
            choiselevelthree: selection,
            result: { ...user.result, strategicalpattern: newStrategicalpattern }
        });
    }

    const handleClickSave40Percent = async(selection) => {
        if (isDisabled) {
            toast.info("Ви вже зробили вибір, чекайте на пораду");
            return;
        }
        setIsDisabled(true);
        const savedAmount = Math.floor(giftAmount * 0.5);
        const newWallet = user.wallet + savedAmount;
        const newHappiness = user.happiness + 1;
        const newImpulsivepattern = user.result.impulsivepattern + 1;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            happiness: newHappiness,
            level: 3,
            choiselevelthree: selection,
            result: { ...user.result, impulsivepattern: newImpulsivepattern }
        });
        setUser({
            ...user,
            wallet: newWallet,
            happiness: newHappiness,
            level: 3,
            choiselevelthree: selection,
            result: { ...user.result, impulsivepattern: newImpulsivepattern}
        });
    }

    return (
        <div className="game-page">
            <div className="game-card" style={{maxWidth: '800px'}}>
                {!envelopeOpened ? (
                    <>
                        <h1 className="game-title">🎂 Рівень 3: День народження</h1>
                        <div className="game-message-info" style={{marginBottom: '2rem'}}>
                            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem' }}>
                                Сьогодні твій день народження 🎂. Ти отримуєш конверт з грошима від родичів. 
                                Скільки монет тобі дали?
                            </p>
                        </div>
                        <div className="text-center py-10">
                            <button 
                                onClick={handleOpenEnvelope}
                                className="text-[5rem] bg-transparent border-0 cursor-pointer transition-transform duration-200 animate-[bounce_2s_ease-in-out_infinite] hover:scale-125 hover:animate-[wiggle_0.5s_ease-in-out] active:scale-95"
                            >
                                💌
                            </button>
                            <p className="text-sm text-purple-800 mt-4 font-medium">
                                Натисни на конверт
                            </p>
                        </div>
                    </>
                ) : !choose && !advice ? (
                    <>
                        <h1 className="game-title">🎁 Твій подарунок!</h1>
                        <div className="text-center my-8">
                            <p className="text-4xl font-bold text-purple-600 flex items-center justify-center gap-3">
                                <span className="animate-[pulse_1.5s_ease-in-out_infinite]">
                                    {giftAmount} монет!
                                </span>
                                <span className="text-5xl inline-block animate-[coinSpin_2s_linear_infinite]">
                                    🪙
                                </span>
                            </p>
                        </div>
                        <div className="game-message-info" style={{marginBottom: '2rem'}}>
                            <p style={{ fontSize: '1.125rem', lineHeight: '1.75rem' }}>
                                Як ти скористаєшся грошима? Ти вже маєш більше досвіду, і знаєш, що якщо витратити все, 
                                то покупка мрії, на яку ти збираєш - віддалиться.
                            </p>
                        </div>
                        <div className="game-choices">
                            <Button 
                                text="💎 Відкласти всі подаровані гроші" 
                                onClick={() => handleClickSaveAll("saveAll")} 
                                choice
                            />
                            <Button 
                                text="⚖️ Меншу частину витратити на подарунок для себе, іншу - відкласти" 
                                onClick={() => handleClickSave80Percent("save80")} 
                                choice
                            />
                            <Button 
                                text="🎁 Більшу частину витратити на подарунок для себе, а іншу - відкласти" 
                                onClick={() => handleClickSave40Percent("save40")} 
                                choice
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className="game-title">✨ Твій вибір</h1>
                        
                        {choose && !advice && choose === "saveAll" && (
                            <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                                <p style={{fontSize: '1.125rem'}}>💎 Чудове рішення! Ти дуже відповідально підходиш до своїх фінансів.</p>
                            </div>
                        )}
                        
                        {choose && !advice && choose === "save80" && (
                            <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                                <p style={{fontSize: '1.125rem'}}>⚖️ Чудовий баланс між задоволенням і відповідальністю!</p>
                            </div>
                        )}
                        
                        {choose && !advice && choose === "save40" && (
                            <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                                <p style={{fontSize: '1.125rem'}}>🎁 Це твій крок вперед - ти не витрачаєш все!</p>
                            </div>
                        )}
                        
                        {advice === "saveAll" && (
                            <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                                <p style={{fontSize: '1.125rem'}}>💡 Так ти вже дуже швидко дістанешся до цілі. Давай подивимось що очікує тебе далі.</p>
                            </div>
                        )}
                        
                        {advice === "save80" && (
                            <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                                <p style={{fontSize: '1.125rem'}}>💡 І собі приємно, і до цілі набагато ближче! Давай подивимось що очікує тебе далі.</p>
                            </div>
                        )}
                        
                        {advice === "save40" && (
                            <div className="game-message-info" style={{marginBottom: '1.5rem'}}>
                                <p style={{fontSize: '1.125rem'}}>💡 У тебе крутий подарунок на день народження! І тепер ти продумуєш своє рішення, 
                                і не витрачаєш все! Давай подивимось що очікує тебе далі.</p>
                            </div>
                        )}
                        
                        {(advice === "saveAll" || advice === "save80" || advice === "save40") && (
                            <div className="game-choices">
                                <NavLink to="/level-three-output" className="game-link">
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

export default ScenarioLevelThree;
