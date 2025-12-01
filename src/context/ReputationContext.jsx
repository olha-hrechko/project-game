import {createContext, useContext, useState} from "react";

const ReputationContext = createContext();

export const ReputationProvider = ({children}) => {
    const [reputation, setReputation] = useState(0);
    return (
        <ReputationContext.Provider value={{reputation, setReputation}}>
            {children}
        </ReputationContext.Provider>
    );
};

export const useReputation = () => useContext(ReputationContext);