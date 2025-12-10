import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../constants/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        // Get saved language from localStorage or default to Ukrainian
        return localStorage.getItem('gameLanguage') || 'uk';
    });

    useEffect(() => {
        // Save language preference to localStorage
        localStorage.setItem('gameLanguage', language);
    }, [language]);

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    };

    // Translation function
    const t = (key) => {
        return translations[language]?.[key] || key;
    };

    const value = {
        language,
        changeLanguage,
        t,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
