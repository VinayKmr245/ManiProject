// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import './App.css';
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import TimeTable from "./components/TimeTable";
import TimetableForm from "./components/TimetableForm";
import UserProfile from "./components/UserProfile";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { AuthProvider } from './context/AuthContext';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegistrationPage />} />
                <Route path="/timetable" element={<ProtectedRoutes><TimeTable /></ProtectedRoutes>} />
                <Route path="/create-timetable" element={<ProtectedRoutes><TimetableForm /></ProtectedRoutes>} />
                <Route path="/account" element={<ProtectedRoutes><UserProfile /></ProtectedRoutes>} />
            </Routes>
        </BrowserRouter>
    </AuthProvider>
);