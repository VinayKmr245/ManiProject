// This is the main entry point for the app. It renders the App component into the root element.
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import './App.css';
// import NotificationsPage from "./components/NotificationsPage";
import TimeTable from "./components/TimeTable";
import TimetableForm from "./components/TimetableForm";
import UserProfile from "./components/UserProfile";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      {/* <Route path="/login" element={<LoginPage />} /> */}
      <Route path="/login" element={<TimeTable />} />
      <Route path="/timetable" element={<TimetableForm />} />
      <Route path = "/account" element={<UserProfile/>} />
      {/* <Route path="/notifications" element={<NotificationsPage/>} /> */}
      {/* <Route path="/register" element={<RegistrationPage/>} /> */}
    </Routes>
  </BrowserRouter>
);

