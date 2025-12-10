import React from 'react'
import { NavLink } from 'react-router-dom';
import Dictionary from '../../../components/Dictionary/Dictionary.jsx';

const LevelFive = () => {
  const levelFiveWords = [
    {
      icon: '💼',
      word: 'Gagner',
      definition: 'Gagner de l\'argent, c\'est l\'obtenir pour ton travail, ta créativité ou la vente de quelque chose d\'utile. Par exemple, fabriquer quelque chose de tes mains et le vendre, ou aider quelqu\'un pour une récompense. C\'est un moyen important d\'avoir son propre argent.'
    },
    {
      icon: '📈',
      word: 'Profit',
      definition: 'Le profit, c\'est la différence entre ce que tu as gagné et ce que tu as dépensé. Par exemple, si tu as acheté des matériaux pour 10 pièces et vendu ton produit pour 20 pièces, ton profit est de 10 pièces. Le profit montre si ton affaire est rentable.'
    },
    {
      icon: '🎲',
      word: 'Risque',
      definition: 'Le risque, c\'est la possibilité que quelque chose ne se passe pas comme prévu. Par exemple, tu peux dépenser de l\'argent sur des matériaux mais ton produit ne se vendra pas, ou ne sera pas comme tu le voulais. Il est important de savoir évaluer les risques et d\'être prêt à différents résultats.'
    }
  ];

  return (
    <div className="game-page">
      <div className="game-card" style={{maxWidth: '800px'}}>
        <h1 className="game-title">💰 Niveau Cinq</h1>
        <h2 className="game-subtitle" style={{marginBottom: '2rem'}}>Premier argent gagné</h2>
        
        <Dictionary words={levelFiveWords} />
        
        <div className="game-choices" style={{marginTop: '2rem'}}>
          <NavLink to="/scenario-level-five" className="game-link">
            ▶️ Suivant
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default LevelFive
