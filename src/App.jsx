import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile.jsx";
import DeleteAccount from "./pages/DeleteAccount/DeleteAccount.jsx";
import Introduction from "./pages/Introduction/Introduction.jsx";
import Header from "./components/Header/Header.jsx";
import GreetingPage from "./pages/GreetingPage/GreetingPage.jsx";
import MoneyCity from "./pages/MoneyCity/MoneyCity.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import GamePage from "./pages/GamePage/GamePage.jsx";
import LevelOne from "./pages/LevelOne/LevelOne.jsx";
import ScenarioLevelOne from "./pages/ScenarioLevelOne/ScenarioLevelOne.jsx";
import LevelOneOutput from "./pages/LevelOneOutput/LevelOneOutput.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/game-page" element={<GamePage />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/greeting" element={<GreetingPage />} />
        <Route path="/money-city" element={<MoneyCity />} />
        <Route path="/level-one" element={<LevelOne />} />
        <Route path="/scenario-level-one" element={<ScenarioLevelOne />} />
        <Route path="/level-one-output" element={<LevelOneOutput />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
