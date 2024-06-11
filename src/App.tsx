import React from "react";
import "./App.css";
import "./assets/css/style.css";
import { Routes, Route } from "react-router-dom";
import LoginGuard from "./guards/LoginGuard";
import HomePage from "./pages/HomePage";
import MainLayout from "./components/MainLayout";
import ProfilePage from "./pages/Profile";

const Dashboard: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LoginGuard>
            <MainLayout />
          </LoginGuard>
        }
      />

      <Route
        path="/home"
        element={
          <LoginGuard>
            <HomePage />
          </LoginGuard>
        }
      />
      <Route
        path="/profile"
        element={
          <LoginGuard>
            <ProfilePage />
          </LoginGuard>
        }
      />
    </Routes>
  );
};

export default Dashboard;
