import React from 'react';
import './LanguageSwitcher.css';

const LanguageSwitcher = ({ language, onLanguageChange }) => {
    const languages = [
        { code: 'uk', label: '🇺🇦', fullName: 'Українська' },
        { code: 'fr', label: '🇫🇷', fullName: 'Français' }
    ];

    return (
        <div className="language-switcher">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    className={`language-button ${language === lang.code ? 'active' : ''}`}
                    onClick={() => onLanguageChange(lang.code)}
                    title={lang.fullName}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
