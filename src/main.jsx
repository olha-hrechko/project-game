import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './context/UserContext.jsx'
import { GoalProvider } from './context/GoalContext.jsx'
import { ProgressBarProvider } from './context/ProgressBarContext.jsx';
import { HappinessProvider } from './context/HappinessContext.jsx'
import { ReputationProvider } from './context/ReputationContext.jsx'
import { WalletProvider } from './context/WalletContext.jsx'
import { WisdomProvider } from './context/WithdomContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <GoalProvider>
        <ProgressBarProvider>
          <WalletProvider>
            <WisdomProvider>
              <HappinessProvider>
                <ReputationProvider>
                  <App />
                </ReputationProvider>
              </HappinessProvider>
            </WisdomProvider>
          </WalletProvider>
      </ProgressBarProvider>
    </GoalProvider>
  </UserProvider>
  </StrictMode >
)
