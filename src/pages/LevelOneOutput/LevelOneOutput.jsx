import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
//import ProgressBar from "@ramonak/react-progress-bar";
import ProgressBar from '../ProgressBar/ProgressBar.jsx';
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext.jsx";
import { updatePlayerData } from "../../firebase";
import Button from "../../components/Button/Button.jsx";

const LevelOneOutput = () => {
    const navigate = useNavigate();
    const { user, setUser } = useUser();


    const handleClickStart = async () => {
        const newWallet = 0
        //setWallet(newWallet);
        const newWisdom = 0
        //setWisdom(newWisdom);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            wisdom: newWisdom,
            happiness: 0
        });
        setUser({
            ...user,
            wallet: newWallet,
            wisdom: newWisdom,
            happiness: 0
        })
        navigate("/scenario-level-one");
    }
    return (
        <section>
            <p>Wallet: {user.wallet}</p>
            <p>Happiness: {user.happiness}</p>
            <p>Wisdom: {user.wisdom}</p>
            <ProgressBar
                /*completed={user.progressbar}
                maxCompleted={100}
                labelAlignment="center"
                labelColor="#000000"
                bgColor="#4caf50"
                height="20px"
                width="300px"
                disabled={true}*/
                value = {user.progressbar}
                max = {100}
                pixelCount = {10}
                pixelSize = {20}
                filledColor = "#4caf50"
                emptyColor = "#e0e0e0"
            />
            <Button onClick={handleClickStart} text="Restart Level One" />
        </section>
    )
}

export default LevelOneOutput;





