import React, { useEffect, useState } from 'react'
import { useUser } from '../../../context/UserContext.jsx';
import { advices } from '../../../constants/constants.jsx';


const GoalNotAchieved = () => {
    const { user } = useUser();
    const [behaviorType, setBehaviorType] = useState('');
    const [adviceText, setAdviceText] = useState([]);
    const [showAnalysis, setShowAnalysis] = useState(false);
    const [showChoices, setShowChoices] = useState(false);

    // Function to convert choice code to readable text
    const getChoiceText = (level, choiceCode) => {
        const choiceTexts = {
            1: {
                'notWasteMoney': "Les pièces n'ont pas été dépensées",
                'wasteHalfMoney': 'La moitié des pièces dépensées',
                'wasteAllMoney': 'Toutes les pièces dépensées'
            },
            2: {
                'notBuy': 'Ne pas acheter',
                'marketplace': 'Marketplace (25 pièces)',
                'professional': 'Ensemble professionnel (60 pièces)'
            },
            3: {
                'saveAll': 'Toutes les pièces mises de côté',
                'save80': 'La plus petite partie mise de côté',
                'save40': 'La plus grande partie mise de côté'
            },
            4: {
                'postpone': 'Reporter à plus tard',
                'repair': 'Réparer (-15 pièces)',
                'buyNew': 'Acheter un nouveau (-45 pièces)'
            },
            5: {
                'bracelets': 'Bracelets en élastiques',
                'cookies': 'Biscuits pour les voisins',
                'flowers': 'Plantes en pots'
            }
        };

        return choiceTexts[level]?.[choiceCode] || 'Non choisi';
    };

    useEffect(() => {
        // Show choices after 1 second
        setTimeout(() => {
            setShowChoices(true);
        }, 1000);

        // Show analysis after 7 seconds
        setTimeout(() => {
            setShowAnalysis(true);
        }, 7000);
    }, []);

    useEffect(() => {
        if (!user?.result) return;

        const { impulsivepattern = 0, econompattern = 0, strategicalpattern = 0 } = user.result;
        
        // Determine behavior type
        if (impulsivepattern >= 4) {
            // Impulsive behavior: chose option 3 on ≥4 levels
            setBehaviorType('💸 Comportement impulsif');
            setAdviceText(advices.impulsivepattern);
        } else {
            // Check for mixed behavior: two patterns appear 2+ times
            const patterns = [
                { name: 'impulsive', count: impulsivepattern },
                { name: 'econom', count: econompattern },
                { name: 'strategic', count: strategicalpattern }
            ];
            
            const patternsWithTwoOrMore = patterns.filter(p => p.count >= 2);
            
            if (patternsWithTwoOrMore.length >= 2) {
                // Mixed behavior: at least two patterns with 2+ occurrences
                setBehaviorType('⚖️ Comportement mixte');
                setAdviceText(advices.mixedpattern);
            } else if (econompattern > impulsivepattern && econompattern > strategicalpattern) {
                setBehaviorType('💰 Comportement économe');
                setAdviceText([advices.econompattern]);
            } else if (strategicalpattern > impulsivepattern && strategicalpattern > econompattern) {
                setBehaviorType('📊 Comportement stratégique');
                setAdviceText([advices.strategicalpattern]);
            } else {
                setBehaviorType('⚖️ Comportement mixte');
                setAdviceText(advices.mixedpattern);
            }
        }
    }, [user]);

    const choices = [
        { level: 1, choice: user?.choiselevelone },
        { level: 2, choice: user?.choiseleveltwo },
        { level: 3, choice: user?.choiselevelthree },
        { level: 4, choice: user?.choiselevelfour },
        { level: 5, choice: user?.choiselevelfive }
    ];

    // Debug: log choices to see what's stored
    console.log('User choices:', {
        choiselevelone: user?.choiselevelone,
        choiseleveltwo: user?.choiseleveltwo,
        choiselevelthree: user?.choiselevelthree,
        choiselevelfour: user?.choiselevelfour,
        choiselevelfive: user?.choiselevelfive
    });

    return (
        <div className="game-page">
            <div className="game-card" style={{maxWidth: '800px'}}>
                <h1 className="game-title">😔 Tu n'as pas économisé pour ton rêve</h1>
                
                <div className="game-message-info" style={{marginBottom: '2rem'}}>
                    <p style={{fontSize: '1.125rem', textAlign: 'center'}}>
                        Pourquoi cela s'est-il passé? Regardons ensemble.
                    </p>
                </div>

                {/* Choices visualization */}
                {showChoices && (
                    <div style={{marginBottom: '2rem'}}>
                        <h3 className="game-subtitle">📋 Tes choix:</h3>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '0.75rem'}}>
                            {choices.map((item, index) => (
                                <div 
                                    key={index}
                                    className="game-message-info"
                                    style={{
                                        animation: `fadeIn 0.5s ease-out ${index * 0.8}s both`,
                                        padding: '0.75rem 1rem'
                                    }}
                                >
                                    <strong>Niveau {item.level}:</strong> {getChoiceText(item.level, item.choice)}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Behavior analysis */}
                {showAnalysis && (
                    <div className="game-message-warning" style={{animation: 'fadeIn 0.5s ease-out'}}>
                        <h3 className="game-subtitle" style={{marginBottom: '1rem'}}>
                            {behaviorType}
                        </h3>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                            {adviceText.map((advice, index) => (
                                <p key={index} style={{fontSize: '1.125rem', lineHeight: '1.75', margin: 0}}>
                                    {advice}
                                </p>
                            ))}
                        </div>
                    </div>
                )}

                <div className="game-choices" style={{marginTop: '2rem'}}>
                    <button className="game-button" onClick={() => window.location.href = '/money-city'}>
                        🔄 Réessayer
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GoalNotAchieved
