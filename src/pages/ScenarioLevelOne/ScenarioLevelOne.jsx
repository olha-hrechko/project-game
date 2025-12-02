import { useState, useEffect } from "react";
import Button from "../../components/Button/Button.jsx";
import { useWallet } from "../../context/WalletContext.jsx";
import { useHappiness } from "../../context/HappinessContext.jsx";
import { useWisdom } from "../../context/WithdomContext.jsx";
import { NavLink } from "react-router-dom"; 

const ScenarioLevelOne = () => {
    const [choose, setChoose] = useState("");
    const [advice, setAdvice] = useState("");
    const { setWallet } = useWallet();
    const { setHappiness } = useHappiness();
    const { setWisdom } = useWisdom();

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


    const handleClickNotWasteMoney = (selection) => {
        setWallet(prev => prev + 100);
        setWisdom(prev => prev + 3);
        setChoose(selection);
        // Logic for not wasting money
    }
    const handleClickWasteHalfOFMoney = (selection) => {
        setWallet(prev => prev + 50);
        setHappiness(prev => prev + 1);
        setWisdom(prev => prev + 1);
        setChoose(selection);
        // Logic for wasting half of the money
    }
    const handleClickWasteAllMoney = (selection) => {
        setWallet(prev => prev + 0);
        setHappiness(prev => prev + 3);
        setChoose(selection);
        // Logic for wasting all the money
    }
    return (
        <section>
            <div>
                <p>Герою дали 100 монет кишенькових. Він гуляє містом, бачить магазин іграшок,
                    смаколики, картінг. Йому хочеться щось купити.  Що він буде робити?</p>
                <Button disabled={!!choose} text="Не витрачати гроші.  Відкласти." onClick={() => handleClickNotWasteMoney("notWasteMoney")} />
                <Button disabled={!!choose} text="Відкласти половину грошей, а на залишок купити солодощі (ціна 50 монет)." onClick={() => handleClickWasteHalfOFMoney("wasteHalfMoney")} />
                <Button disabled={!!choose} text="Витратити всі гроші. Кататися на картингу, купити солодощі і іграшку." onClick={() => handleClickWasteAllMoney("wasteAllMoney")} />
            </div>
            {choose === "notWasteMoney" && <p>Ти вирішив нічого не витрачати - це дуже обережно і мудро. Так ти матимеш багато можливостей у наступних рівнях!</p>}
            {choose === "wasteHalfMoney" && <p>Чудовий баланс!</p>}
            {choose === "wasteAllMoney" && <p>Було дуже весело! Але тепер у тебе не залишилося зовсім грошей на інші пригоди цього тижня.</p>}
            {advice === "notWasteMoney" && <p>Порада: Але пам’ятай: інколи можна дозволяти собі маленькі радощі, це теж важливо.</p>}
            {advice === "wasteHalfMoney" && <p>Порада: Такі рішення допомагають мати і радість зараз, і гроші пізніше.</p>}
            {advice === "wasteAllMoney" && <p>Порада: Наступного разу подумай, чи варто витрачати все одразу. Інколи варто залишити хоча б трохи.</p>}

            <NavLink to="/level-one-output">Наступний рівень</NavLink>
        </section>
    );
};

export default ScenarioLevelOne;
