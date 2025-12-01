import { createContext, useContext, useState } from "react";

const WisdomContext = createContext();

export const WisdomProvider = ({ children }) => {
    const [wisdom, setWisdom] = useState(0);
    return (
        <WisdomContext.Provider value={{wisdom, setWisdom}}>
            {children}
        </WisdomContext.Provider>
    );
};

export const useWisdom = () => useContext(WisdomContext);