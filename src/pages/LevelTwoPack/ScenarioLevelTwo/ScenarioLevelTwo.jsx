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
            toast.info("Ви вже зробили вибір, чекайте на пораду");
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
            toast.info("Ви вже зробили вибір, чекайте на пораду");
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
            toast.info("Ви вже зробили вибір, чекайте на пораду");
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
                <h1 className="game-title">🛒 Рівень 2: Пошук вигідної пропозиції</h1>
                
                {!choose && !advice && (
                    <>
                        <div className="game-message-info" style={{marginBottom: '2rem'}}>
                            <p style={{fontSize: '1.125rem', lineHeight: '1.75rem'}}>
                                Твоє хобі потребує нових матеріалів. Що робити?
                            </p>
                        </div>
                        
                        <div className="game-choices">
                            <Button 
                                text="💭 Не купувати, обійтися тим, що є" 
                                onClick={() => handleClickNotBuy("notBuy")} 
                                choice
                            />
                            <Button 
                                text="🛍️ Купити набір матеріалів на маркетплейсі за 25 монет" 
                                onClick={() => handleClickBuyMarketplace("buyMarketplace")} 
                                choice
                            />
                            <Button 
                                text="⭐ Купити професійний набір за 60 монет" 
                                onClick={() => handleClickBuyProfessional("buyProfessional")} 
                                choice
                            />
                        </div>
                    </>
                )}
                
                {choose && !advice && choose === "notBuy" && (
                    <div className="game-message-info" style={{marginBottom: '1.5rem'}}>
                        <p style={{fontSize: '1.125rem'}}>💭 Ти не витратив гроші! Прогрес до цілі залишився тим самим.</p>
                    </div>
                )}
                
                {choose && !advice && choose === "buyMarketplace" && (
                    <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                        <p style={{fontSize: '1.125rem'}}>🛍️ Гарний вибір! Ти інвестував у розвиток, але трохи віддалився від мрії.</p>
                    </div>
                )}
                
                {choose && !advice && choose === "buyProfessional" && (
                    <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                        <p style={{fontSize: '1.125rem'}}>⭐ Професійний набір - це круто, він тобі дуже подобається, бо якісний! Але чи вийде тепер назбирати на мрію?</p>
                    </div>
                )}
                
                {advice === "notBuy" && (
                    <div className="game-message-info" style={{marginBottom: '1.5rem'}}>
                        <p style={{fontSize: '1.125rem'}}>💡Якщо ти будеш зберігати монети, то зможеш швидше досягти своєї мрії.</p>
                    </div>
                )}
                
                {advice === "buyMarketplace" && (
                    <div className="game-message-success" style={{marginBottom: '1.5rem'}}>
                        <p style={{fontSize: '1.125rem'}}>💡Іноді доводиться витрачати монети на інші цінні потреби, так часто трапляється.</p>
                    </div>
                )}
                
                {advice === "buyProfessional" && (
                    <div className="game-message-warning" style={{marginBottom: '1.5rem'}}>
                        <p style={{fontSize: '1.125rem'}}>💡Іноді варто трохи заощаджувати, щоб досягти своєї мрії.</p>
                    </div>
                )}
                
                {(advice === "notBuy" || advice === "buyMarketplace" || advice === "buyProfessional") && (
                    <div className="game-choices">
                        <NavLink to="/level-two-output" className="game-link">
                            ▶️ Далі
                        </NavLink>
                    </div>
                )}
                
                <ToastContainer />
            </div>
        </div>
    );
};

export default ScenarioLevelTwo;
