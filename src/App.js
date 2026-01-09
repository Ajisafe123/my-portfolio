import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import GitHubPage from "./Pages/GitHubPage";
import ResumePage from "./Pages/ResumePage";

const MainApp = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/github" element={<GitHubPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default MainApp;
