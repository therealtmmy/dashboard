import React from "react";
import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Link from "./Components/Login/Link.jsx";
import Hero from "./Components/Login/Hero.jsx";
import SignUp from "./Components/Login/SignUp.jsx";
import Dashboard from "./Components/Dashboard/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import Teachers from "./Components/Teachers/Teachers.jsx";
import Students from "./Components/Students/Students.jsx";
import Billing from "./Components/Billing/Billing.jsx";
import Set from "./Components/Set/Set.jsx";
import Exams from "./Components/Exams/Exams.jsx";
import Features from "./Components/Features/Features.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page Route */}
        <Route path="/" element={<Link />}>
          <Route index element={<Hero />} />
          <Route path="hero" element={<Hero setUser={setUser}></Hero>} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        {/* Dashboard Route */}
        <Route path="/" element={<Sidebar />}>
          <Route
            index
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="teachers"
            element={
              <ProtectedRoute user={user}>
                <Teachers user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="students"
            element={
              <ProtectedRoute user={user}>
                <Students user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="billing"
            element={
              <ProtectedRoute user={user}>
                <Billing user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="settings"
            element={
              <ProtectedRoute user={user}>
                <Set user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="exams"
            element={
              <ProtectedRoute user={user}>
                <Exams user={user} />
              </ProtectedRoute>
            }
          />
          <Route
            path="feature"
            element={
              <ProtectedRoute user={user}>
                <Features user={user} />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
