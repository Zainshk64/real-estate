import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import HouseDetail from "./components/BuyItem/HouseDetails.jsx";
import BuyPage from "./pages/BuyPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import SaleTeamPage from "./pages/SaleTeamPage.jsx";
import MarketingPage from "./pages/MarketingPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import FeaturePage from "./pages/FeaturePage.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import { useEffect } from "react";

function App() {

  return (
    <div className="min-h-screen bg-shell text-ink">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/house/:id" element={<HouseDetail />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/feature" element={<FeaturePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/saleteam" element={<SaleTeamPage />} />
          <Route path="/marketing" element={<MarketingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
