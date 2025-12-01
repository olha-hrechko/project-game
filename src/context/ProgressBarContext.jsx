import React, { createContext, useState, useContext } from 'react';

export const ProgressBarContext = createContext();
export const ProgressBarProvider = ({ children }) => {

const [progress, setProgress] = useState(0);

  return (
    <ProgressBarContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressBarContext.Provider>
  );
};

export const useProgressBar = () => useContext(ProgressBarContext);