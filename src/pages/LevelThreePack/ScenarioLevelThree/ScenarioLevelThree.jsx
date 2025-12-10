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
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [choose]);

    useEffect(() => {
        if (!user && !choose) {
            navigate("/");
        }

        if (user.level >= 3 && !choose) { 
            navigate("/level-three-output");
        }        
    }, [user.level, navigate]);

    const handleClickSaveAll = async(selection) => {
        if (isDisabled) {
            toast.info("Ви вже зробили вибір, чекайте на пораду");
            return;
        }
        setIsDisabled(true);
        const newWallet = user.wallet + giftAmount;
        const newWisdom = user.wisdom + 1;
        const newEconompattern = user.result.econompattern + 3;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            wisdom: newWisdom,
            level: 3,
            result: { ...user.result, econompattern: newEconompattern }
        });
        setUser ({
            ...user,
            wallet: newWallet,
            wisdom: newWisdom,
            level: 3,
            result: { ...user.result, econompattern: newEconompattern }
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
        const newEconompattern = user.result.econompattern + 2;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            happiness: newHappiness,
            level: 3,
            result: { ...user.result, econompattern: newEconompattern }
        });
        setUser({
            ...user,
            wallet: newWallet,
            happiness: newHappiness,
            level: 3,
            result: { ...user.result, econompattern: newEconompattern }
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
        const newEconompattern = user.result.econompattern + 1;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            happiness: newHappiness,
            level: 3,
            result: { ...user.result, econompattern: newEconompattern }
        });
        setUser({
            ...user,
            wallet: newWallet,
            happiness: newHappiness,
            level: 3,
            result: { ...user.result, econompattern: newEconompattern }
        });
    }

    return (
        <section>
            {!envelopeOpened ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>
                    <p style={{ fontSize: '18px', marginBottom: '30px' }}>
                        Сьогодні твій день народження 🎂. Ти отримав(ла) конверт з грошима від родичів. 
                        Скільки монет тобі дали?
                    </p>
                    <button 
                        onClick={handleOpenEnvelope}
                        style={{
                            fontSize: '80px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'transform 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                    >
                        💌
                    </button>
                    <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
                        Натисни на конверт
                    </p>
                </div>
            ) : !choose && !advice ? (
                <>
                    <div style={{ textAlign: 'center', margin: '30px 0' }}>
                        <p style={{ fontSize: '48px', fontWeight: 'bold', color: '#FFD700' }}>
                            {giftAmount} монет! 🎁
                        </p>
                    </div>
                    <div>
                        <p style={{ fontSize: '16px', marginBottom: '20px' }}>
                            Як ти скористаєшся грошима? Ти вже маєш більше досвіду, і знаєш, що якщо витратити все, 
                            то покупка мрії, на яку ти збираєш - віддалиться.
                        </p>
                        <Button 
                            text="Відкласти всі подаровані гроші" 
                            onClick={() => handleClickSaveAll("saveAll")} 
                        />
                        <Button 
                            text="Меншу частину витратити на приємний подарунок для себе, іншу - відкласти" 
                            onClick={() => handleClickSave80Percent("save80")} 
                        />
                        <Button 
                            text="Більшу частину витратити на подарунок для себе, а іншу - відкласти" 
                            onClick={() => handleClickSave40Percent("save40")} 
                        />
                    </div>
                </>
            ) : (
                <>
                    {choose === "saveAll" && <p>Чудове рішення! Ти дуже відповідально підходиш до своїх фінансів.</p>}
                    {choose === "save80" && <p>Ти знайшов(ла) чудовий баланс між задоволенням і відповідальністю!</p>}
                    {choose === "save40" && <p>Ти зробив(ла) крок вперед - не витратив(ла) все!</p>}
                    
                    {advice === "saveAll" && (
                        <p>Порада: Так ти вже дуже швидко дістанешся до цілі. Це доросле рішення!</p>
                    )}
                    {advice === "save80" && (
                        <p>Порада: І собі приємно, і до цілі набагато ближче!</p>
                    )}
                    {advice === "save40" && (
                        <p>Порада: У тебе крутий подарунок на день народження! І цього разу ти продумав своє рішення, 
                        і не витратив все! Давай подивимось що очікує тебе далі.</p>
                    )}
                    <NavLink to="/level-three-output">Далі</NavLink>
                </>
            )}
            <ToastContainer />
        </section>
    );
};

export default ScenarioLevelThree;
