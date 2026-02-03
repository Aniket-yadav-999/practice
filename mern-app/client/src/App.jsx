import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import HowitHelps from "./pages/HowitHelps";
import Manual from "./pages/Manual";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";

/* ✅ DASHBOARD IMPORT */
import DashboardLayout from "./Dashboard/DashboardLayout";
import StartAssessment from "./Dashboard/sections/StartAssessment";

function App() {
  return (
    <Router>
      {/* ✅ GLOBAL TOASTER (bottom-right) */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#ef4444", // red
            color: "#fff",
            fontSize: "14px",
          },
        }}
      />

      <Routes>
        {/* 🌐 Public Website Routes */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />

        <Route
          path="/how-it-helps"
          element={
            <>
              <Navbar />
              <HowitHelps />
              <Footer />
            </>
          }
        />

        <Route
          path="/manual"
          element={
            <>
              <Navbar />
              <Manual />
              <Footer />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <SignIn />
              <Footer />
            </>
          }
        />

        <Route
          path="/register"
          element={
            <>
              <Navbar />
              <Register />
              <Footer />
            </>
          }
        />

        {/* ✅ EMAIL RESET LINK */}
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* 🧠 DASHBOARD (NO PUBLIC NAVBAR / FOOTER) */}
        <Route path="/dashboard/*" element={<DashboardLayout />} />
        <Route path="/assessment" element={<StartAssessment />} />
      </Routes>
    </Router>
  );
}

export default App;
