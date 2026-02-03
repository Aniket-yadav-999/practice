import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiX } from "react-icons/fi";

const AssignModal = ({ row, onClose }) => {
  const [delegateType, setDelegateType] = useState("within");
  const [email, setEmail] = useState("");
  const [userExists, setUserExists] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    password: "",
  });

  /* =========================
     LIVE EMAIL CHECK
  ========================= */
  useEffect(() => {
    if (!email) {
      setUserExists(null);
      return;
    }

    const delay = setTimeout(async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/assign/check-email?email=${email}`
        );
        setUserExists(res.data.exists);
      } catch (err) {
        console.error("Email check failed", err);
      }
    }, 500);

    return () => clearTimeout(delay);
  }, [email]);

  /* =========================
     ASSIGN BUTTON DISABLE LOGIC
  ========================= */
  const isAssignDisabled =
    !email ||
    loading ||
    (userExists === false &&
      (!form.fullName || !form.password));

  /* =========================
     ASSIGN
  ========================= */
  const handleAssign = async () => {
    try {
      setLoading(true);

      await axios.post("http://localhost:5000/api/assessments/assign", {
        email,
        delegateType,
        fullName: form.fullName,
        phone: form.phone,
        password: form.password,
        productId: row.productId,
        componentCode: row.componentCode,
      });

      alert("✅ Assigned successfully");
      onClose();
    } catch (error) {
      alert(error.response?.data?.message || "Assignment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[460px] rounded-xl shadow-xl relative overflow-hidden">
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-green-700">
            Assign Assessment
          </h2>
          <button onClick={onClose} className="text-gray-500">
            <FiX size={18} />
          </button>
        </div>

        {/* BODY */}
        <div className="px-6 py-5 space-y-4">
          {/* DELEGATE TYPE */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">
              Delegate Type
            </p>

            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="delegate"
                  checked={delegateType === "within"}
                  onChange={() => setDelegateType("within")}
                  className="accent-green-600"
                />
                <span className="text-sm">Within Org</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="delegate"
                  checked={delegateType === "outside"}
                  onChange={() => setDelegateType("outside")}
                  className="accent-green-600"
                />
                <span className="text-sm">Outside Org</span>
              </label>
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Email ID
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            {userExists === true && (
              <p className="text-green-600 text-xs mt-1">
                ✔ User exists — password not required
              </p>
            )}

            {userExists === false && (
              <p className="text-orange-500 text-xs mt-1">
                ❌ No user found — please create user
              </p>
            )}
          </div>

          {/* NEW USER FIELDS (SMOOTH EXPAND) */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              userExists === false
                ? "max-h-[300px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="space-y-2 pt-2">
              <input
                placeholder="Full Name"
                className="w-full px-3 py-2 border rounded-lg"
                value={form.fullName}
                onChange={(e) =>
                  setForm({ ...form, fullName: e.target.value })
                }
              />

              <input
                placeholder="Phone"
                className="w-full px-3 py-2 border rounded-lg"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />

              <input
                placeholder="Password"
                type="password"
                className="w-full px-3 py-2 border rounded-lg"
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
              />
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg text-sm"
          >
            Cancel
          </button>

          <button
            onClick={handleAssign}
            disabled={isAssignDisabled}
            className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm disabled:opacity-50"
          >
            {loading ? "Assigning..." : "Assign"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignModal;
