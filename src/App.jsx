import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import LandingNavBar from "./components/LandingNavBar";
import AppNavBar from "./components/AppNavBar";

import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import SummaryPage from "./pages/SummaryPage";
import LegalInfoPage from "./pages/LegalInfoPage";

import ChatBot from "./components/ChatBot";

function Layout() {
  const location = useLocation();

  // Show landing navbar only on homepage
  const isLanding = location.pathname === "/";

  return (
    <div>
      {isLanding ? <LandingNavBar /> : <AppNavBar />}

      <div style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/legal-info" element={<LegalInfoPage />} />
        </Routes>
      </div>

      {!isLanding && <ChatBot />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
