import React, { useEffect, useState } from 'react'
import { useUser } from '../../../context/UserContext.jsx';
import { advices } from '../../../constants/constants.jsx';


const GoalNotAchieved = () => {
    const { user } = useUser();
    const [advicelevel, setAdvicelevel] = useState ('');

    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
       setTimeout(() => {
              setIsVisible(true);
       }, 7000);
    }, []);

    useEffect(() => {
        if (user.progressbar <= 2 ) {
            setAdvicelevel(advices.impulsivepattern);
        }
        if (user.progressbar > 2 && user.progressbar < 10 ) {
            setAdvicelevel(advices.mixedpattern);}
            
        if (user.progressbar >= 10 && user.wallet >= 250 && user.wisdom < 15) {
            setAdvicelevel(advices.strategicalpattern);
        }
        if (user.progressbar >= 10 && user.wallet >= 350) {
        setAdvicelevel(advices.econompattern);
        }
    }, []);

    return (
        <div>
            <p>Не Накопичив</p>
            {!isVisible && <p>ЗАМІНИТИ_Трохи не вистачило… Але подивімося, чому так війшло. Це цікаво!</p>}
            {isVisible && (
                <div>
                    <p>{user?.choiselevelone}</p>
                    <p>{user?.choiseleveltwo}</p>
                    <p>{user?.choiselevelthree}</p>
                    <p>{user?.choiselevelfour}</p>
                    <p>{user?.choiselevelfive}</p>
                </div>
            )}
        </div>
    )
}

export default GoalNotAchieved
