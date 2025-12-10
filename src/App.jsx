import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile.jsx";
import DeleteAccount from "./pages/DeleteAccount/DeleteAccount.jsx";
import Header from "./components/Header/Header.jsx";
import GreetingPage from "./pages/StartingTheGame/GreetingPage/GreetingPage.jsx";
import MoneyCity from "./pages/StartingTheGame/MoneyCity/MoneyCity.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import GamePage from "./pages/StartingTheGame/GamePage/GamePage.jsx";
import LevelOne from "./pages/LevelOnePack/LevelOne/LevelOne.jsx";
import ScenarioLevelOne from "./pages/LevelOnePack/ScenarioLevelOne/ScenarioLevelOne.jsx";
import LevelOneOutput from "./pages/LevelOnePack/LevelOneOutput/LevelOneOutput.jsx";
import LevelTwo from "./pages/LevelTwoPack/LevelTwo/LevelTwo.jsx";
import ScenarioLevelTwo from "./pages/LevelTwoPack/ScenarioLevelTwo/ScenarioLevelTwo.jsx";
import LevelTwoOutput from "./pages/LevelTwoPack/LevelTwoOutput/LevelTwoOutput.jsx";
import LevelThree from "./pages/LevelThreePack/LevelThree/LevelThree.jsx";
import ScenarioLevelThree from "./pages/LevelThreePack/ScenarioLevelThree/ScenarioLevelThree.jsx";
import LevelThreeOutput from "./pages/LevelThreePack/LevelThreeOutput/LevelThreeOutput.jsx";
import LevelFour from "./pages/LevelFourPack/LevelFour/LevelFour.jsx";
import ScenarioLevelFour from "./pages/LevelFourPack/ScenarioLevelFour/ScenarioLevelFour.jsx";
import LevelFourOutput from "./pages/LevelFourPack/LevelFourOutput/LevelFourOutput.jsx";
import LevelFive from "./pages/LevelFivePack/LevelFive/LevelFive.jsx";
import ScenarioLevelFive from "./pages/LevelFivePack/ScenarioLevelFive/ScenarioLevelFive.jsx";
import LevelFiveOutput from "./pages/LevelFivePack/LevelFiveOutput/LevelFiveOutput.jsx";
import GoalNotAchieved from "./pages/FinalPages/GoalNotAchieved/GoalNotAchieved.jsx";
import GoalAchieved from "./pages/FinalPages/GoalAchieved/GoalAchieved.jsx";
import FinancialPassport from "./pages/FinalPages/FinancialPassport/FinancialPassport.jsx";

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
        <Route path="/greeting" element={<GreetingPage />} />
        <Route path="/money-city" element={<MoneyCity />} />
        <Route path="/level-one" element={<LevelOne />} />
        <Route path="/scenario-level-one" element={<ScenarioLevelOne />} />
        <Route path="/level-one-output" element={<LevelOneOutput />} />
        <Route path="/level-two" element={<LevelTwo />} />
        <Route path="/scenario-level-two" element={<ScenarioLevelTwo />} />
        <Route path="/level-two-output" element={<LevelTwoOutput />} />
        <Route path="/level-three" element={<LevelThree />} />
        <Route path="/scenario-level-three" element={<ScenarioLevelThree />} />
        <Route path="/level-three-output" element={<LevelThreeOutput />} />
        <Route path="/level-four" element={<LevelFour />} />
        <Route path="/scenario-level-four" element={<ScenarioLevelFour />} />
        <Route path="/level-four-output" element={<LevelFourOutput />} />
        <Route path="/level-five" element={<LevelFive />} />
        <Route path="/scenario-level-five" element={<ScenarioLevelFive />} />
        <Route path="/level-five-output" element={<LevelFiveOutput />} />
        <Route path="/goal-not-achieved" element={<GoalNotAchieved />} />
        <Route path="/goal-achieved" element={<GoalAchieved />} />
        <Route path="/financial-passport" element={<FinancialPassport />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
