import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components.css'
import App from './App.jsx'
import { UserProvider } from './context/UserContext.jsx'
import { HeaderVisibilityProvider } from './context/HeaderVisibilityContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <HeaderVisibilityProvider>
        <App />
      </HeaderVisibilityProvider>
    </UserProvider>
  </StrictMode >
)