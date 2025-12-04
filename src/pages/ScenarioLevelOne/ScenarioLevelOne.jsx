import { useState, useEffect } from "react";
import { savePlayerData, updatePlayerData } from '../../firebase';
import { useUser } from '../../context/UserContext';
import Button from "../../components/Button/Button.jsx";
import { NavLink } from "react-router-dom";
import React from "react";
import { ToastContainer, toast } from 'react-toastify';

const ScenarioLevelOne = () => {
    const [choose, setChoose] = useState("");
    const [advice, setAdvice] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    //const { wallet, setWallet } = useWallet();
    //const { happiness, setHappiness } = useHappiness();
    //const { wisdom, setWisdom } = useWisdom();
    const { user, setUser } = useUser();
    console.log (isDisabled);

    useEffect(() => {
        if (choose) {  // Запускати таймер тільки якщо choose не порожній
            const timer = setTimeout(() => {
                setAdvice(choose);
                setChoose("");
            }, 3000);

            // Cleanup function - очищує таймер при розмонтуванні компонента
            return () => clearTimeout(timer);
        }
    }, [choose]);


    const handleClickNotWasteMoney = async(selection) => {
        if (isDisabled) {
            toast.info("Ви вже зробили вибір, чекайте на пораду");
            return;
        }
        setIsDisabled(true);
        const newWallet = user.wallet + 100;
        //setWallet(newWallet);
        const newWisdom = user.wisdom + 3;
        //setWisdom(newWisdom);
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            wisdom: newWisdom
        });
        setUser ({
            ...user,
            wallet: newWallet,
            wisdom: newWisdom
        })
        // Logic for not wasting money
    }
    const handleClickWasteHalfOFMoney = async(selection) => {
        if (isDisabled) {
            toast.info("Ви вже зробили вибір, чекайте на пораду");
            return;
        }
        setIsDisabled(true);
        const newWallet = user.wallet + 50;
        //setWallet(newWallet);
        const newHappiness = user.happiness + 1;
        //setHappiness(newHappiness);
        const newWisdom = user.wisdom + 1;
        //setWisdom(newWisdom);
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            happiness: newHappiness,
            wisdom: newWisdom
        });
        setUser({
            ...user,
            wallet: newWallet,
            happiness: newHappiness,
            wisdom: newWisdom
        });
        // Logic for wasting half of the money
    }
    const handleClickWasteAllMoney = async(selection) => {
        if (isDisabled) {
            toast.info("Ви вже зробили вибір, чекайте на пораду");
            return;
        }
        setIsDisabled(true);
        //setWallet(prev => prev + 0);
        const newHappiness = user.happiness + 3;
        //setHappiness(newHappiness);
        setChoose(selection);
        await updatePlayerData(user.uid, {
            wallet: user.wallet + 0,
            happiness: newHappiness
        });
        setUser({
            ...user,
            wallet: user.wallet + 0,
            happiness: newHappiness
        });
        // Logic for wasting all the money
    }
    return (
        <section>
            <div>
                <p>Герою дали 100 монет кишенькових. Він гуляє містом, бачить магазин іграшок,
                    смаколики, картінг. Йому хочеться щось купити.  Що він буде робити?</p>
                <Button text="Не витрачати гроші.  Відкласти." onClick={() => handleClickNotWasteMoney("notWasteMoney")} />
                <Button text="Відкласти половину грошей, а на залишок купити солодощі (ціна 50 монет)." onClick={() => handleClickWasteHalfOFMoney("wasteHalfMoney")} />
                <Button text="Витратити всі гроші. Кататися на картингу, купити солодощі і іграшку." onClick={() => handleClickWasteAllMoney("wasteAllMoney")} />
            </div>
            {choose === "notWasteMoney" && <p>Ти вирішив нічого не витрачати - це дуже обережно і мудро. Так ти матимеш багато можливостей у наступних рівнях!</p>}
            {choose === "wasteHalfMoney" && <p>Чудовий баланс!</p>}
            {choose === "wasteAllMoney" && <p>Було дуже весело! Але тепер у тебе не залишилося зовсім грошей на інші пригоди цього тижня.</p>}
            {advice === "notWasteMoney" && <p>Порада: Але пам’ятай: інколи можна дозволяти собі маленькі радощі, це теж важливо.</p>}
            {advice === "wasteHalfMoney" && <p>Порада: Такі рішення допомагають мати і радість зараз, і гроші пізніше.</p>}
            {advice === "wasteAllMoney" && <p>Порада: Наступного разу подумай, чи варто витрачати все одразу. Інколи варто залишити хоча б трохи.</p>}
            <ToastContainer />
            <NavLink to="/level-one-output">Далі</NavLink>
        </section>
    );
};

export default ScenarioLevelOne;
