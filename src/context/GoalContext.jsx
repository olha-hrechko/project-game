import { createContext, useContext, useState } from "react";

const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
  const [goal, setGoal] = useState(localStorage.getItem('goal') || '');

    return (
    <GoalContext.Provider value={{ goal, setGoal }}>
        {children}
    </GoalContext.Provider>
    );
    }
    
export const useGoal = () => useContext(GoalContext);