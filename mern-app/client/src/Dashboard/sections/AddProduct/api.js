import axios from "axios";

const BASE_URL = "http://localhost:5000/api/products";

/* =====================================================
   🔹 AXIOS INSTANCE (TOKEN AUTO ATTACHED)
===================================================== */
const api = axios.create({
  baseURL: BASE_URL,
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
      console.error("❌ Unauthorized – Token missing or expired");
    }
    return Promise.reject(error);
  }
);

/* =====================================================
   🔹 Generate Product Code
   Endpoint: GET /api/products/generate-code
===================================================== */
export const generateProductCode = () => {
  return api.get("/generate-code");
};

/* =====================================================
   🔹 Add Product
   Endpoint: POST /api/products/add
===================================================== */
export const addProduct = (formData) => {
  return api.post("/add", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

/* =====================================================
   🔹 Delete Product
   Endpoint: DELETE /api/products/delete/:id
===================================================== */
export const deleteProductById = (id) => {
  return api.delete(`/delete/${id}`);
};
