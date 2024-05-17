import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

import Header from "./components/Header";
import { ThemeContextProvider } from "./redux/ThemeContext";
import i18next from "./assets/i18/i18nConfig";
import Footer from "components/Footer";
import { Box } from "@mui/material";
import { AppContainer, appStyles } from "AppStyles";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const VisasPage = React.lazy(() => import("./pages/VisasPage"));
const TranslationsPage = React.lazy(() => import("./pages/TranslationsPage"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));
const AboutUsPage = React.lazy(() => import("./pages/AboutUsPage"));
const VisasUSAPage = React.lazy(() => import("./pages/VisasUSAPage"));
const VisasCanadaPage = React.lazy(() => import("./pages/VisasCanadaPage"));
const VisasAustraliaPage = React.lazy(
  () => import("./pages/VisasAustraliaPage")
);

const App = () => {
  const handleRegisterClick = () => {};

  return (
    <ThemeContextProvider>
      <I18nextProvider i18n={i18next}>
        <Box sx={appStyles.boxHeader}>
          <Header onRegisterClick={handleRegisterClick} />
        </Box>
        <AppContainer>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/visas" element={<VisasPage />} />
              <Route path="/visas/usa" element={<VisasUSAPage />} />
              <Route path="/visas/canada" element={<VisasCanadaPage />} />
              <Route path="/visas/australia" element={<VisasAustraliaPage />} />
              <Route path="/translations" element={<TranslationsPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
            </Routes>
          </Suspense>
        </AppContainer>
        <Box sx={appStyles.boxFooter}>
          <Footer />
        </Box>
      </I18nextProvider>
    </ThemeContextProvider>
  );
};

export default App;
