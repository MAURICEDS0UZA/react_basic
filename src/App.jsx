import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import JobsPage from "./pages/JobsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainLayout/>}>
          <Route index element={<HomePage />} />
          <Route exact path="/jobs" element={<JobsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
