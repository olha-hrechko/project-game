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
                setChoose("");
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [choose]);

    useEffect(() => {
        if (!user && !choose) {
            navigate("/");
        }

        if (user.level >= 2 && !choose) { 
            navigate("/level-two-output");
        }
    }, [user.level, navigate, choose]);

    const handleClickNotBuy = async(selection) => {
        if (isDisabled) {
            toast.info("Ви вже зробили вибір, чекайте на пораду");
            return;
        }
        setIsDisabled(true);
        const newWisdom = user.wisdom + 1;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wisdom: newWisdom,
            level: 2,
            result: { ...user.result, econompattern: user.result.econompattern + 1 }
        });
        setUser({
            ...user,
            wisdom: newWisdom,
            level: 2,
            result: { ...user.result, econompattern: user.result.econompattern + 1 }
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
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            wisdom: newWisdom,
            level: 2,
            result: { ...user.result, econompattern: user.result.econompattern + 1 }
        });
        setUser({
            ...user,
            wallet: newWallet,
            wisdom: newWisdom,
            level: 2,
            result: { ...user.result, econompattern: user.result.econompattern + 1 }
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
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            happiness: newHappiness,
            level: 2
        });
        setUser({
            ...user,
            wallet: newWallet,
            happiness: newHappiness,
            level: 2
        });
    }

    return (
        <section>
            <div>
                <h2>Рівень 2: Пошук вигідної пропозиції</h2>
                <p>Твоє хобі (малювання/спорт/музика) потребує нових матеріалів. Що робити?</p>
                <Button text="Не купувати, обійтися тим, що є" onClick={() => handleClickNotBuy("notBuy")} />
                <Button text="Купити набір матеріалів на маркетплейсі за 25 монет" onClick={() => handleClickBuyMarketplace("buyMarketplace")} />
                <Button text="Купити професійний набір за 60 монет" onClick={() => handleClickBuyProfessional("buyProfessional")} />
            </div>
            {choose === "notBuy" && <p>Ти не витратив гроші! Прогрес до цілі залишився тим самим.</p>}
            {choose === "buyMarketplace" && <p>Гарний вибір! Ти інвестував у розвиток.</p>}
            {choose === "buyProfessional" && <p>Професійний набір - це круто, він тобі дуже подобається, бо якісний!</p>}
            {advice === "notBuy" && <p>Порада: Ти не витратив гроші! Прогрес до цілі залишився тим самим.</p>}
            {advice === "buyMarketplace" && <p>Порада: Гарний вибір! Ти інвестував у розвиток, але трохи віддалився від цілі.</p>}
            {advice === "buyProfessional" && <p>Порада: Професійний набір - це круто, він тобі дуже подобається, бо якісний! Але втратив прогрес до цілі.</p>}
            <ToastContainer />
            <NavLink to="/level-two-output">Далі</NavLink>
        </section>
    );
};

export default ScenarioLevelTwo;
