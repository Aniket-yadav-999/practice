import React, { useState } from "react";

const options = [
  "Contains integrated electrical components or batteries (e.g., LED lights in boxes)",
  "Contains SVHCs (Substances of Very High Concern) above thresholds under UK REACH",
  "Uses inks not compliant with the EuPIA Exclusion Policy",
  "Recyclability details not available to complete assessment",
  "None of the above apply",
];

const ProblematicPackagingCheck = () => {
  const [selected, setSelected] = useState([]);

  const isNoneSelected = selected.includes("None of the above apply");
  const isRed = selected.length > 0 && !isNoneSelected;

  const toggleOption = (label) => {
    if (label === "None of the above apply") {
      setSelected([label]);
    } else {
      setSelected((prev) => {
        const withoutNone = prev.filter(
          (item) => item !== "None of the above apply"
        );

        return withoutNone.includes(label)
          ? withoutNone.filter((item) => item !== label)
          : [...withoutNone, label];
      });
    }
  };

  return (
    <div className="mt-10 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 rounded-xl bg-green-100 px-6 py-4 text-green-900">
        <div className="h-4 w-4 rotate-45 border-2 border-green-700" />
        <h2 className="text-lg font-semibold">
          Problematic packaging Component Check
        </h2>
      </div>

      {/* Question */}
      <div className="space-y-4">
        <p className="text-sm font-medium text-gray-800">
          Does your packaging or Component meet any of the following conditions?
        </p>

        {options.map((label) => (
          <label
            key={label}
            className="flex items-start gap-3 text-sm cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selected.includes(label)}
              onChange={() => toggleOption(label)}
              className="mt-1 h-4 w-4 rounded border-green-500 text-green-600 focus:ring-green-500"
            />
            <span>{label}</span>
          </label>
        ))}
      </div>

      {/* 🔴 RED Alert */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isRed ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-lg border border-red-300 bg-red-50 px-5 py-4 text-sm text-red-700 flex items-center gap-2">
          <span className="text-lg">⚠️</span>
          <span>
            As per <strong>UK RAM 2025</strong>, your packaging is automatically
            classified as{" "}
            <strong className="text-red-600">🔴 RED</strong>.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProblematicPackagingCheck;
