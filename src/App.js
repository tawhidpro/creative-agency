import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomeMain from './components/pages/Home/HomeMain/HomeMain';
import PortfolioMain from './components/pages/Portfolio/PortfolioMain/PortfolioMain';
import TeamMain from './components/pages/Team/TeamMain/TeamMain';
import LoginMain from './components/pages/Login/LoginMain/LoginMain';
import ContactMain from './components/pages/Contact/ContactMain/ContactMain';

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<HomeMain />} />
              <Route exact path="/home" element={<HomeMain />} />
              <Route exact path="/portfolio" element={<PortfolioMain />} />
              <Route exact path="/team" element={<TeamMain />} />
              <Route exact path="/login" element={<LoginMain />} />
              <Route exact path="/contact" element={<ContactMain />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
