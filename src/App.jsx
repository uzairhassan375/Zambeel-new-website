import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import Zambeel360Page from "./pages/Zambeel360Page";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-transparent">
        <Header />
        <main className="flex-grow bg-transparent">
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
    </Router>
  );
}

export default App;
