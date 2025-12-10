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
        const newEconompattern = user.result.econompattern + 2;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            wisdom: newWisdom,
            level: 1,
            result: { ...user.result, econompattern: newEconompattern }
        });
        setUser ({
            ...user,
            wallet: newWallet,
            wisdom: newWisdom,
            level: 1,
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
        const newEconompattern = user.result.econompattern + 1;
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            happiness: newHappiness,
            wisdom: newWisdom,
            level: 1,
            result: { ...user.result, econompattern: newEconompattern }
        });
        setUser({
            ...user,
            wallet: newWallet,
            happiness: newHappiness,
            wisdom: newWisdom,
            level: 1,
            result: { ...user.result, econompattern: newEconompattern }
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
            level: 1
        });
        setUser({
            ...user,
            wallet: user.wallet + 0,
            happiness: newHappiness,
            level: 1
        });
        // Logic for wasting all the money
    }
    return (
        <section>
            {choose === "wasteAllMoney" || advice === "wasteAllMoney" ? (
                // Якщо обрано третій варіант - показуємо тільки повідомлення, пораду і кнопку
                <>
                    {!advice && <p>Було дуже весело але в тебе зовсім не залишилося грошей!</p>}
                    {advice === "wasteAllMoney" && (
                        <>
                            <p>Наступного разу подумай, чи варто витрачати все одразу. Інколи варто залишити хоча б трохи. Спробуй пройти рівень ще раз!</p>
                            <Button onClick={handleRetryLevel} text="Пройти рівень знову" />
                        </>
                    )}
                </>
            ) : (
                // Звичайний контент для інших варіантів
                <>
                    <div>
                        <p>Герою дали 100 монет кишенькових. Він гуляє містом, бачить магазин іграшок,
                            смаколики, картінг. Йому хочеться щось купити.  Що він буде робити?</p>
                        <Button text="Не витрачати гроші.  Відкласти." onClick={() => handleClickNotWasteMoney("notWasteMoney")} />
                        <Button text="Відкласти половину грошей, а на залишок купити солодощі (ціна 50 монет)." onClick={() => handleClickWasteHalfOFMoney("wasteHalfMoney")} />
                        <Button text="Витратити всі гроші. Кататися на картингу, купити солодощі і іграшку." onClick={() => handleClickWasteAllMoney("wasteAllMoney")} />
                    </div>
                    {choose === "notWasteMoney" && <p>Ти вирішив нічого не витрачати - це дуже обережно і мудро. Так ти матимеш багато можливостей у наступних рівнях!</p>}
                    {choose === "wasteHalfMoney" && <p>Чудовий баланс!</p>}
                    {advice === "notWasteMoney" && <p>Порада: Але пам'ятай: інколи можна дозволяти собі маленькі радощі, це теж важливо.</p>}
                    {advice === "wasteHalfMoney" && <p>Порада: Такі рішення допомагають мати і радість зараз, і гроші пізніше.</p>}
                    <NavLink to="/level-one-output">Далі</NavLink>
                </>
            )}
            <ToastContainer />
        </section>
    );
};

export default ScenarioLevelOne;
