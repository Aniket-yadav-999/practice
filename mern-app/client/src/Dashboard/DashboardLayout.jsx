import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import DashboardNavbar from "./DashboardNavbar";

import Dashboard from "./sections/Dashboard";
import AddProduct from "./sections/AddProduct";
import PendingAssessments from "./sections/PendingAssessments";
import DelegatedAssessments from "./sections/DelegatedAssessments";
import CompletedAssessments from "./sections/CompletedAssessments";

export default function DashboardLayout() {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("dashboard");

  /* =====================================================
     🔐 AUTH CHECK
     ===================================================== */
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/login");
  }, [navigate]);

  /* =====================================================
     🔹 Render Section
     ===================================================== */
  const renderSection = () => {
    switch (activeSection) {
      case "add-product":
        return (
          <AddProduct
            onClose={() => setActiveSection("dashboard")} // ✅ FIX
          />
        );

      case "pending":
        return <PendingAssessments />;

      case "delegated":
        return <DelegatedAssessments />;

      case "completed":
        return <CompletedAssessments />;

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <DashboardNavbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 p-6 overflow-auto">
          {renderSection()}
        </main>
      </div>
    </div>
  );
}
