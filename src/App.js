import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import GitHubPage from "./Pages/GitHubPage";

const MainApp = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/github" element={<GitHubPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default MainApp;
