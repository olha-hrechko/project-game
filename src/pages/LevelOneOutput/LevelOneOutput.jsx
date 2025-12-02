import { useState, useEffect } from "react";
import { useWallet } from "../../context/WalletContext.jsx";
import { useHappiness } from "../../context/HappinessContext.jsx";
import { useWisdom } from "../../context/WithdomContext.jsx";
import { NavLink } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

const LevelOneOutput = () => {
    const { wallet } = useWallet();
    const { happiness } = useHappiness();
    const { wisdom } = useWisdom();
    const [progress, setProgress] = useState(0);

    return (
        <section>
            <p>Wallet: {wallet}</p>
            <p>Happiness: {happiness}</p>
            <p>Wisdom: {wisdom}</p>
            <ProgressBar
                completed={progress}
                maxCompleted={100}
                labelAlignment="center"
                labelColor="#000000"
                bgColor="#4caf50"
                height="20px"
                width="300px"
                disabled={true}
            />
        </section>
    )
}

export default LevelOneOutput;





