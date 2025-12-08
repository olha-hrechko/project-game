import { createContext, useContext, useState } from 'react';

const HeaderVisibilityContext = createContext();

export const HeaderVisibilityProvider = ({ children }) => {
    const [hideStats, setHideStats] = useState(false);

    return (
        <HeaderVisibilityContext.Provider value={{ hideStats, setHideStats }}>
            {children}
        </HeaderVisibilityContext.Provider>
    );
};

export const useHeaderVisibility = () => {
    const context = useContext(HeaderVisibilityContext);
    if (!context) {
        throw new Error('useHeaderVisibility must be used within HeaderVisibilityProvider');
    }
    return context;
};
