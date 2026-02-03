import React from "react";
import { useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function DashboardNavbar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="bg-white border-b px-4 py-3 flex justify-between items-center">
      <button onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? (
          <XMarkIcon className="w-6 h-6 text-green-700" />
        ) : (
          <Bars3Icon className="w-6 h-6 text-green-700" />
        )}
      </button>

      <button
        onClick={handleLogout}
        className="border border-red-600 text-red-600 px-4 py-1 rounded hover:bg-red-50"
      >
        Logout
      </button>
    </header>
  );
}
