
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/HomePage/Homepage.jsx'
import Auth from './pages/Auth/Auth.jsx'
import Introduction from './pages/Introduction/Introduction.jsx'
import Header from './components/Header/Header.jsx'
import GreetingPage from './pages/GreetingPage/GreetingPage.jsx'
import MoneyCity from './pages/MoneyCity/Moneycity.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'


function App() {

  return ( 
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/greeting" element={<GreetingPage />} />
        <Route path="/money-city" element={<MoneyCity />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
