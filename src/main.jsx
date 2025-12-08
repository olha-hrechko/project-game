import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './context/UserContext.jsx'
import { ProgressBarProvider } from './context/ProgressBarContext.jsx'
import { HeaderVisibilityProvider } from './context/HeaderVisibilityContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <ProgressBarProvider>
        <HeaderVisibilityProvider>
          <App />
        </HeaderVisibilityProvider>
      </ProgressBarProvider>
    </UserProvider>
  </StrictMode >
)