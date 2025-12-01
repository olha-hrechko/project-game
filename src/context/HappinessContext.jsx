import { createContext, useContext, useState } from "react";

const HappinessContext = createContext();

export const HappinessProvider = ({ children }) => {
  const [happiness, setHappiness] = useState(100);
    return (
        <HappinessContext.Provider value={{happiness, setHappiness}}>
            {children}
        </HappinessContext.Provider>
    );
};

export const useHappiness = () => useContext(HappinessContext);