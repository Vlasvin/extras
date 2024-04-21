import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import Header from "./components/Header";
import { theme } from "./redux/ThemeManager";

const VisasPage = React.lazy(() => import("./pages/VisasPage"));
const TranslationsPage = React.lazy(() => import("./pages/TranslationsPage"));
const ServicesPage = React.lazy(() => import("./pages/ServicesPage"));
const AboutUsPage = React.lazy(() => import("./pages/AboutUsPage"));

const App = () => {
  const handleRegisterClick = () => {};

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header onRegisterClick={handleRegisterClick} />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/visas" element={<VisasPage />} />
            <Route path="/translations" element={<TranslationsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about_us" element={<AboutUsPage />} />
          </Routes>
        </Suspense>
      </div>
    </ThemeProvider>
  );
};

export default App;
