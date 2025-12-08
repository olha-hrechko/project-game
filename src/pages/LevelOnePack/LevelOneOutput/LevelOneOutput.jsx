//import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../context/UserContext.jsx";
import { updatePlayerData } from "../../../firebase.js";
import Button from "../../../components/Button/Button.jsx";
import PixelProgressBar from '../../../components/ProgressBar/ProgressBar.jsx';
import { NavLink } from 'react-router-dom';

const LevelOneOutput = () => {
    const navigate = useNavigate();
    const { user, setUser } = useUser();


    const handleClickStart = async () => {
        const newWallet = 0
        //setWallet(newWallet);
        const newWisdom = 0
        //setWisdom(newWisdom);
        const newHappiness = 0
        //setHappiness(newHappiness);
        const newProgressBar = 0
        //setProgress(newProgressBar);
        await updatePlayerData(user.uid, {
            wallet: newWallet,
            wisdom: newWisdom,
            happiness: newHappiness,
            progressbar: newProgressBar,
            level: 0,
            goal: ''
        });

        setUser({
            ...user,
            wallet: newWallet,
            wisdom: newWisdom,
            happiness: newHappiness,
            progressbar: newProgressBar,
            level: 0,
            goal: ''
        })
        navigate("/money-city");
    }

    return (
        <section>
            <p>Wallet: {user.wallet}</p>
            <p>Happiness: {user.happiness}</p>
            <p>Wisdom: {user.wisdom}</p>
            <PixelProgressBar value={user.progressbar} />
            <Button onClick={handleClickStart} text="Restart Level One" />
            <NavLink to="/level-two">Next Level</NavLink>
        </section>
        );  
    };

export default LevelOneOutput;





