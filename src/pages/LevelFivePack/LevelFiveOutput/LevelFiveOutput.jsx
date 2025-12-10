import React from 'react'
import { NavLink } from 'react-router-dom';
import { useUser } from '../../../context/UserContext.jsx';
import { useNavigate } from "react-router-dom";
import { updatePlayerData } from "../../../firebase.js";
import Button from "../../../components/Button/Button.jsx";
import PixelProgressBar from '../../../components/ProgressBar/ProgressBar.jsx';

const LevelFiveOutput = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  // Визначаємо ціну цілі як в Header
  const goalprise = user?.goal === 'emo' ? 120 : user?.goal === 'velo' ? 160 : user?.goal === 'gamecomputer' ? 200 : 0;

  const handleClickRestart = async () => {
    const newWallet = 0
    const newWisdom = 0
    const newHappiness = 0
    const newProgressBar = 0
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
      <h2>Рівень П'ять</h2>
      <p>Wallet: {user.wallet}</p>
      <p>Happiness: {user.happiness}</p>
      <p>Wisdom: {user.wisdom}</p>
      <PixelProgressBar value={user.wallet} max={goalprise} pixelCount={10} />
      <Button onClick={handleClickRestart} text="Restart Level Five" />
      
      {user.progressbar >= 10 && (
        <>
          <NavLink to="/goal-achieved">Далі</NavLink>
        </>
      )}
      {user.progressbar < 10 && (
        <>
          <NavLink to="/goal-not-achieved">Далі</NavLink>
        </>
      )}
    </section>
  )
}

export default LevelFiveOutput
