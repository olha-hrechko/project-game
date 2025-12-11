import React from 'react';

const Dictionary = ({ words, title = "📚 Dictionnaire" }) => {
  return (
    <div className="dictionary-card">
      <h3 className="dictionary-title">
        {title}
      </h3>
      <div className="space-y-2">
        {words.map((item, index) => (
          <div key={index} className="dictionary-item">
            <div className="dictionary-icon">{item.icon}</div>
            <div className="dictionary-content">
              <div className="dictionary-word">{item.word}</div>
              <div className="dictionary-definition">{item.definition}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dictionary;
