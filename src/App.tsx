import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import { ThemeContextProvider } from "./redux/ThemeContext";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const VisasPage = React.lazy(() => import("./pages/VisasPage"));
const TranslationsPage = React.lazy(() => import("./pages/TranslationsPage"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));
const AboutUsPage = React.lazy(() => import("./pages/AboutUsPage"));

const App = () => {
  const handleRegisterClick = () => {};
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <ThemeContextProvider>
      <div className="App">
        <Header onRegisterClick={handleRegisterClick} />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/visas" element={<VisasPage />} />
            <Route path="/translations" element={<TranslationsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
          </Routes>
        </Suspense>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
