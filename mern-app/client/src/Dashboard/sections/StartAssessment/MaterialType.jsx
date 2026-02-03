import React, { useState } from "react";

const materials = [
  {
    id: "paper",
    title: "Paper/Cardboard",
    desc: "Paper and cardboard packaging materials",
    icon: "📦",
  },
  {
    id: "plastic-flex",
    title: "Plastic (Flexibles)",
    desc: "Flexible plastic materials such as films and wraps",
    icon: "🛍️",
  },
  {
    id: "plastic-rigid",
    title: "Plastic (Rigids)",
    desc: "Rigid plastics such as bottles and containers",
    icon: "🍼",
  },
  {
    id: "aluminium",
    title: "Aluminium",
    desc: "Aluminium cans, foils and containers",
    icon: "🥫",
  },
  {
    id: "steel",
    title: "Steel",
    desc: "Steel cans and metal packaging",
    icon: "🔧",
  },
  {
    id: "glass",
    title: "Glass",
    desc: "Glass bottles and containers",
    icon: "🥛",
  },
  {
    id: "wood",
    title: "Wood",
    desc: "Wood-based packaging materials",
    icon: "🪵",
  },
  {
    id: "fibre",
    title: "Fibre-based Composite Materials",
    desc: "Composite materials made from fibers like paper or plastic",
    icon: "🧻",
  },
  {
    id: "other",
    title: "Other Materials",
    desc: "Materials not categorized above",
    icon: "📁",
  },
];

const MaterialType = () => {
  const [selected, setSelected] = useState("steel");

  return (
    <div className="mt-10 rounded-xl border border-gray-200 bg-white p-6">
      {/* Section Header */}
      <div className="mb-6 rounded-lg bg-green-100 px-5 py-3">
        <div className="flex items-center gap-2 text-green-800">
          <span className="h-3 w-3 rotate-45 border-2 border-green-600"></span>
          <h2 className="text-lg font-semibold">Material Type</h2>
        </div>
      </div>

      <p className="mb-6 text-sm font-medium text-gray-800">
        RAM Qualification Check
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {materials.map((item) => {
          const isActive = selected === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setSelected(item.id)}
              className={`rounded-xl border p-6 text-left transition-all duration-300
                ${
                  isActive
                    ? "border-green-500 bg-green-50 shadow-md"
                    : "border-gray-200 hover:border-green-300 hover:shadow"
                }`}
            >
              <div className="mb-3 text-3xl">{item.icon}</div>
              <h3 className="text-base font-semibold text-green-800">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Continue Button */}
      <div className="mt-8 flex justify-end">
        <button className="rounded-lg bg-green-600 px-6 py-2.5 text-sm font-semibold text-white shadow hover:bg-green-700">
          Continue
        </button>
      </div>
    </div>
  );
};

export default MaterialType;
