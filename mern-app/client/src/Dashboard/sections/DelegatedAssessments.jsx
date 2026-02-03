import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiInfo, FiX } from "react-icons/fi";
import toast from "react-hot-toast";

/* =====================================================
   🔹 AXIOS INSTANCE (TOKEN ATTACHED)
===================================================== */
const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) toast.error("Session expired. Please login again.");
    return Promise.reject(error);
  }
);

const DelegatedAssessments = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showModal, setShowModal] = useState(false);

  /* =========================
     FETCH DELEGATED ASSESSMENTS
  ========================= */
  useEffect(() => {
    fetchDelegated();
  }, []);

  const fetchDelegated = async () => {
    try {
      setLoading(true);
      const res = await api.get("/assignments/delegated"); // 🔹 Endpoint to get delegated assessments
      if (!Array.isArray(res.data)) {
        setRows([]);
        return;
      }
      setRows(res.data);
    } catch (error) {
      console.error("❌ Fetch error:", error);
      toast.error("Failed to fetch delegated assessments");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading delegated assessments...
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-green-800">
            Delegated Assessments
          </h2>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr className="text-left text-gray-600 font-medium">
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Component</th>
                <th className="px-6 py-3">Assigned To</th>
                <th className="px-6 py-3">Delegate Type</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-4 text-center text-gray-400">
                    No delegated assessments
                  </td>
                </tr>
              ) : (
                rows.map((item, index) => (
                  <tr key={item._id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4 flex items-center gap-2">
                      {item.productName}
                      <FiInfo
                        className="text-blue-500 cursor-pointer"
                        onClick={() => {
                          setSelectedRow(item);
                          setShowModal(true);
                        }}
                      />
                    </td>
                    <td className="px-6 py-4">{item.componentName}</td>
                    <td className="px-6 py-4">{item.assignedName}</td>
                    <td className="px-6 py-4">{item.delegateType}</td>
                    <td className="px-6 py-4">{item.status}</td>
                    <td className="px-6 py-4">
                      <button
                        className="px-3 py-1 rounded-lg bg-green-500 text-white text-sm"
                        onClick={() => toast.success("Assessment started")}
                      >
                        Start
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      {showModal && selectedRow && (
        <Modal
          title="Assessment Details"
          onClose={() => {
            setShowModal(false);
            setSelectedRow(null);
          }}
        >
          <Info label="Product" value={selectedRow.productName} />
          <Info label="Component" value={selectedRow.componentName} />
          <Info label="Assigned To" value={selectedRow.assignedName} />
          <Info label="Delegate Type" value={selectedRow.delegateType} />
          <Info label="Status" value={selectedRow.status} />
        </Modal>
      )}
    </div>
  );
};

/* =========================
   REUSABLE COMPONENTS
========================= */
const Modal = ({ title, children, onClose }) => (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative">
      <button onClick={onClose} className="absolute top-4 right-4 text-gray-500">
        <FiX size={18} />
      </button>
      <h3 className="text-lg font-semibold mb-4 text-green-700">{title}</h3>
      <div className="grid grid-cols-2 gap-4 text-sm">{children}</div>
    </div>
  </div>
);

const Info = ({ label, value }) => (
  <div>
    <p className="text-gray-500 text-xs">{label}</p>
    <p className="font-medium text-gray-800">{value ?? "-"}</p>
  </div>
);

export default DelegatedAssessments;
