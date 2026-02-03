import React from "react";
import {
  Squares2X2Icon,
  PlusCircleIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar({ isOpen, activeSection, setActiveSection }) {
  const menu = [
    { id: "dashboard", label: "Dashboard", icon: Squares2X2Icon },
    { id: "add-product", label: "Add Product", icon: PlusCircleIcon },
    { id: "pending", label: "Pending Assessments", icon: ClockIcon },
    { id: "delegated", label: "Delegated Assessments", icon: UserGroupIcon },
    { id: "completed", label: "Completed Assessments", icon: CheckCircleIcon },
  ];

  return (
    <aside
      className={`bg-white border-r transition-all duration-300 overflow-hidden
      ${isOpen ? "w-64" : "w-0"}`}
    >
      <div className="p-4 text-lg font-bold text-green-700">
        EPR Manage
      </div>

      <nav className="px-2 space-y-1">
        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm
            ${
              activeSection === item.id
                ? "bg-green-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
