import React, { useState } from "react";

const options = [
  "Reused packaging (not imported into the UK)",
  "Packaging exported from the UK by the producer",
  "PET/Steel/Aluminium drinks containers under a Deposit Return Scheme (DRS)",
  "Non-household packaging",
  "None of the above apply",
];

const RAMQualificationCheck = () => {
  const [selected, setSelected] = useState([]);

  const isNoneSelected = selected.includes("None of the above apply");
  const hasExemption =
    selected.length > 0 && !isNoneSelected;

  const toggleOption = (label) => {
    if (label === "None of the above apply") {
      setSelected([label]);
    } else {
      setSelected((prev) => {
        const filtered = prev.filter(
          (item) => item !== "None of the above apply"
        );

        return filtered.includes(label)
          ? filtered.filter((item) => item !== label)
          : [...filtered, label];
      });
    }
  };

  return (
    <div className="mt-10 space-y-6">
      {/* Header */}
      <div className="rounded-xl border border-green-200 bg-green-50 px-6 py-8 text-center">
        <h1 className="text-2xl font-semibold text-green-800">
          RAM Qualification Check
        </h1>
        <p className="mt-2 text-sm text-green-700">
          Please provide information about your packaging material
        </p>
      </div>

      {/* RAM Exemption */}
      <div className="rounded-xl border border-green-200 bg-white">
        <div className="rounded-t-xl bg-green-100 px-5 py-3 font-semibold text-green-800">
          RAM Exemption
        </div>

        <div className="px-6 py-5 space-y-3">
          <p className="text-sm font-medium text-gray-800">
            Is your packaging exempt from the RAM assessment?
          </p>

          {options.map((label) => (
            <label
              key={label}
              className="flex cursor-pointer items-start gap-3 text-sm"
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
      </div>

      {/* ⚠️ Warning Alert */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          hasExemption ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-lg border border-yellow-300 bg-yellow-50 px-5 py-4 text-sm text-yellow-800">
          ⚠️ You have selected a RAM exemption. Do you want to continue with
          further assessment?
        </div>
      </div>

      {/* ✅ Success Alert */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          hasExemption ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-lg border border-green-300 bg-green-50 px-5 py-4 text-sm text-green-800">
          ✅ Exemption selected — no further RAG classification required.
        </div>
      </div>
    </div>
  );
};

export default RAMQualificationCheck;
