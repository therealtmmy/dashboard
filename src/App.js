import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Teachers from "./Components/Teachers/Teachers.jsx";
import Home from "./Components/Home/Home.jsx";
import Students from "./Components/Students/Students.jsx";
import Billing from "./Components/Billing/Billing.jsx";
import Set from "./Components/Set/Set.jsx";
import Exams from "./Components/Exams/Exams.jsx";
import Features from "./Components/Features/Features.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Students />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/settings" element={<Set />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/feature" element={<Features />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
