import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import Zambeel360Page from "./pages/Zambeel360Page";

function AppContent() {
  const location = useLocation();
  const shouldHavePadding = location.pathname === "/" || location.pathname === "/about" || location.pathname === "/team";
  
  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <Header theme={location.pathname === "/zambeel-360" ? "light" : "dark"} />
      <main className={`flex-grow bg-transparent ${shouldHavePadding ? "pt-20" : ""}`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/zambeel-360" element={<Zambeel360Page />} />
          </Routes>
        </main>
        <div className="w-full blue-gradient-bg">
          <Footer />
        </div>
      </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
