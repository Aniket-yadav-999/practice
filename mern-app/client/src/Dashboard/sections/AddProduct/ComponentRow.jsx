import React from "react";

const inputClass =
  "w-full border px-2 py-1 rounded-md text-sm " +
  "focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500";

const readOnlyClass =
  "w-full border px-2 py-1 rounded-md text-sm bg-gray-100 cursor-not-allowed";

const ComponentRow = ({ row, index, onChange, onRemove }) => {
  return (
    <tr>
      {/* NAME */}
      <td className="p-2 border">
        <input
          name="name"
          placeholder="Name"
          value={row.name}
          onChange={(e) => onChange(index, e)}
          className={inputClass}
        />
      </td>

      {/* CODE (AUTO-GENERATED, READ-ONLY) */}
      <td className="p-2 border">
        <input
          name="code"
          placeholder="Auto Code"
          value={row.code || ""}
          readOnly
          className={readOnlyClass}
        />
      </td>

      {/* DESCRIPTION */}
      <td className="p-2 border">
        <input
          name="description"
          placeholder="Description"
          value={row.description}
          onChange={(e) => onChange(index, e)}
          className={inputClass}
        />
      </td>

      {/* SEPARABLE */}
      <td className="p-2 border">
        <select
          name="separableByHand"
          value={row.separableByHand}
          onChange={(e) => onChange(index, e)}
          className={inputClass}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </td>

      {/* IMAGE */}
      <td className="p-2 border">
        <input
          type="file"
          name="image"
          onChange={(e) => onChange(index, e)}
          className="text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </td>

      {/* WEIGHT */}
      <td className="p-2 border">
        <input
          type="number"
          name="weightPerUnit"
          placeholder="Weight (g)"
          value={row.weightPerUnit}
          onChange={(e) => onChange(index, e)}
          className={inputClass}
        />
      </td>

      {/* COST */}
      <td className="p-2 border">
        <input
          type="number"
          name="costPerUnit"
          placeholder="Cost (£)"
          value={row.costPerUnit}
          onChange={(e) => onChange(index, e)}
          className={inputClass}
        />
      </td>

      {/* SALE */}
      <td className="p-2 border">
        <input
          type="number"
          name="salePerUnit"
          placeholder="Sale (£)"
          value={row.salePerUnit}
          onChange={(e) => onChange(index, e)}
          className={inputClass}
        />
      </td>

      {/* VOLUME */}
      <td className="p-2 border">
        <input
          type="number"
          name="volumeUnitPerYear"
          placeholder="Volume / Year"
          value={row.volumeUnitPerYear}
          onChange={(e) => onChange(index, e)}
          className={inputClass}
        />
      </td>

      {/* SUPPLIER */}
      <td className="p-2 border">
        <input
          name="supplierName"
          placeholder="Supplier Name"
          value={row.supplierName}
          onChange={(e) => onChange(index, e)}
          className={inputClass}
        />
      </td>

      {/* EMAIL */}
      <td className="p-2 border">
        <input
          name="email"
          placeholder="Email"
          value={row.email}
          onChange={(e) => onChange(index, e)}
          className={inputClass}
        />
      </td>

      {/* ACTION */}
      <td className="p-2 border text-center">
        <button
          type="button"
          onClick={() => onRemove(index)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default ComponentRow;
