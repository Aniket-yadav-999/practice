import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiInfo, FiX } from "react-icons/fi";
import toast from "react-hot-toast";
import AssignModal from "../sections/PendingAssign/AssignModal";

/* =====================================================
   🔹 AXIOS INSTANCE (TOKEN ATTACHED)
===================================================== */
const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      toast.error("Session expired. Please login again.");
    }
    return Promise.reject(error);
  }
);

const PendingAssessments = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔹 Modals
  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const [showStatusModal, setShowStatusModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const [showAssignModal, setShowAssignModal] = useState(false);
  const [assignRow, setAssignRow] = useState(null);

  /* =========================
     FETCH PRODUCTS
  ========================= */
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const res = await api.get("/products");

      if (!Array.isArray(res.data)) {
        setRows([]);
        return;
      }

      const flattened = res.data.flatMap((product) =>
        (product.components || []).map((comp) => ({
          productId: product._id,
          componentId: comp._id,

          productName: product.productName,
          productCode: product.productCode,

          componentName: comp.name,
          componentCode: comp.code,

          weightPerUnit: comp.weightPerUnit,
          costPerUnit: comp.costPerUnit,
          salePerUnit: comp.salePerUnit,
          volumeUnitPerYear: comp.volumeUnitPerYear,

          supplierName: comp.supplierName,
          supplierEmail: comp.email,

          status: "Pending",
          ragStatus: "TBA",
        }))
      );

      setRows(flattened);
    } catch (error) {
      console.error("❌ Fetch error:", error);
      toast.error("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  /* =========================
       DELETE COMPONENT SAFELY
    ========================= */
  const handleDelete = async (productId, componentId) => {
    if (!productId || !componentId) return;
    if (!window.confirm("Are you sure you want to delete this row?")) return;

    try {
      // Call backend safe delete route
      await api.delete(`/products/delete-component/${productId}/${componentId}`);
      // Remove row from UI
      setRows((prev) =>
        prev.filter((row) => row.componentId !== componentId)
      );

      toast.success("✅ Component deleted successfully");
    } catch (error) {
      console.error("❌ Delete failed:", error);
      // Check if backend validation error
      const msg = error.response?.data?.message;
      if (msg?.includes("At least one component")) {
        toast.error("Cannot delete last component of product");
      } else {
        toast.error(msg || "Delete failed");
      }
    }

  };

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-500">
        Loading products...
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">

        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-green-800">
            Pending Assessment
          </h2>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr className="text-left text-gray-600 font-medium">
                <th className="px-6 py-3">#</th>
                <th className="px-6 py-3">Product Name</th>
                <th className="px-6 py-3">Component Name</th>
                <th className="px-6 py-3">Product Code</th>
                <th className="px-6 py-3">Component Code</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {rows.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-4 text-center text-gray-400">
                    No pending assessments
                  </td>
                </tr>
              ) : (
                rows.map((item, index) => (
                  <tr
                    key={item.componentId}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">{index + 1}</td>

                    <td className="px-6 py-4 font-medium flex items-center gap-2">
                      {item.productName}
                      <FiInfo
                        className="text-blue-500 cursor-pointer"
                        onClick={() => {
                          setSelectedRow(item);
                          setShowProductModal(true);
                        }}
                      />
                    </td>

                    <td className="px-6 py-4">{item.componentName}</td>
                    <td className="px-6 py-4">{item.productCode}</td>
                    <td className="px-6 py-4">{item.componentCode}</td>

                    <td className="px-6 py-4 flex items-center gap-2">
                      <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs">
                        {item.status}
                      </span>
                      <FiInfo
                        className="text-gray-400 cursor-pointer"
                        onClick={() => {
                          setSelectedStatus(item);
                          setShowStatusModal(true);
                        }}
                      />
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">

                        <button className="px-4 py-2 rounded-lg bg-green-500 text-white text-sm">
                          Start Assessment
                        </button>

                        <button
                          onClick={() => {
                            setAssignRow(item);
                            setShowAssignModal(true);
                          }}
                          className="px-4 py-2 rounded-lg border border-blue-400 text-blue-500 text-sm"
                        >
                          Assign
                        </button>

                        <button
                          onClick={() =>
                            handleDelete(
                              item.productId,
                              item.componentId
                            )
                          }
                          className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm"
                        >
                          Delete
                        </button>

                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ASSIGN MODAL */}
      {showAssignModal && assignRow && (
        <AssignModal
          row={assignRow}
          onClose={() => {
            setShowAssignModal(false);
            setAssignRow(null);
          }}
        />
      )}

      {/* PRODUCT INFO MODAL */}
      {showProductModal && selectedRow && (
        <Modal
          title="Product Information"
          onClose={() => {
            setShowProductModal(false);
            setSelectedRow(null);
          }}
        >
          <Info label="Product Code" value={selectedRow.productCode} />
          <Info label="Product Name" value={selectedRow.productName} />
          <Info label="Component Code" value={selectedRow.componentCode} />
          <Info label="Weight per unit" value={selectedRow.weightPerUnit} />
          <Info label="Cost per unit" value={selectedRow.costPerUnit} />
          <Info label="Volume / Year" value={selectedRow.volumeUnitPerYear} />
        </Modal>
      )}

      {/* STATUS MODAL */}
      {showStatusModal && selectedStatus && (
        <Modal
          title="Status Details"
          onClose={() => {
            setShowStatusModal(false);
            setSelectedStatus(null);
          }}
        >
          <Info label="Status" value={selectedStatus.status} />
          <Info label="RAG" value={selectedStatus.ragStatus} />
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
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500"
      >
        <FiX size={18} />
      </button>

      <h3 className="text-lg font-semibold mb-4 text-green-700">
        {title}
      </h3>

      <div className="grid grid-cols-2 gap-4 text-sm">
        {children}
      </div>
    </div>
  </div>
);

const Info = ({ label, value }) => (
  <div>
    <p className="text-gray-500 text-xs">{label}</p>
    <p className="font-medium text-gray-800">{value ?? "-"}</p>
  </div>
);

export default PendingAssessments;
