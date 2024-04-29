import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

import Header from "./components/Header";
import { ThemeContextProvider } from "./redux/ThemeContext";
import i18next from "./assets/i18/i18nConfig";
import Footer from "components/Footer";
import { Box } from "@mui/material";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const VisasPage = React.lazy(() => import("./pages/VisasPage"));
const TranslationsPage = React.lazy(() => import("./pages/TranslationsPage"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));
const AboutUsPage = React.lazy(() => import("./pages/AboutUsPage"));

const App = () => {
  const handleRegisterClick = () => {};

  return (
    <ThemeContextProvider>
      <I18nextProvider i18n={i18next}>
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
          <Box sx={{ position: "absolute", bottom: 0, width: "100%" }}>
            <Footer />
          </Box>
        </div>
      </I18nextProvider>
    </ThemeContextProvider>
  );
};

export default App;