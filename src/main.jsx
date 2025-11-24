import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './context/UserContext.jsx'
import { GoalProvider } from './context/GoalContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <GoalProvider>
      <App />
      </GoalProvider>
    </UserProvider>
  </StrictMode>,
)
