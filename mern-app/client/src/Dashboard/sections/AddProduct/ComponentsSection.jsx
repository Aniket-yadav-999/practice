import React from "react";
import { Plus, Info } from "lucide-react";
import ComponentRow from "./ComponentRow";

const ComponentsSection = ({ components, onAdd, onChange, onRemove }) => {
  return (
    <>
      {/* ================= Header ================= */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2 text-blue-700 font-semibold">
          Packaging or Component Breakdown
          <Info size={16} className="opacity-70" />
        </div>

        <button
          type="button"
          onClick={onAdd}
          className="
            bg-purple-600 hover:bg-purple-700
            text-white px-4 py-2 rounded-md
            flex items-center gap-2 text-sm
            transition-colors
          "
        >
          <Plus size={18} />
          Add Row
        </button>
      </div>

      {/* ================= Table ================= */}
      <div className="overflow-x-auto border rounded-lg max-h-[400px]">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr className="text-gray-600">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Code</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Separable</th>
              <th className="p-2 border">Image</th>
              <th className="p-2 border">Weight</th>
              <th className="p-2 border">Cost</th>
              <th className="p-2 border">Sale</th>
              <th className="p-2 border">Volume</th>
              <th className="p-2 border">Supplier</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {components.length === 0 ? (
              <tr>
                <td
                  colSpan={12}
                  className="p-4 text-center text-gray-400"
                >
                  No components added yet
                </td>
              </tr>
            ) : (
              components.map((row, index) => (
                <ComponentRow
                  key={index}
                  row={row}
                  index={index}
                  onChange={onChange}
                  onRemove={onRemove}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ComponentsSection;
