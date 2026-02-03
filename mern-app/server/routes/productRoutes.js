import express from "express";

import {
  addProduct,
  generateProductCode,
  getAllProducts,
  deleteProduct,
  deleteComponent,   // 🆕 NEW
} from "../controllers/productController.js";

import { upload } from "../middleware/upload.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

/* =====================================================
   🔹 Get All Products (USER-WISE)
   GET /api/products
   ===================================================== */
router.get(
  "/",
  authMiddleware,
  getAllProducts
);

/* =====================================================
   🔹 Generate Product Code
   GET /api/products/generate-code
   ===================================================== */
router.get(
  "/generate-code",
  authMiddleware,
  generateProductCode
);

/* =====================================================
   🔹 Add Product (Product Image + Component Images)
   POST /api/products/add
   ===================================================== */
router.post(
  "/add",
  authMiddleware,
  upload.fields([
    { name: "productImage", maxCount: 1 },
    { name: "componentImages", maxCount: 20 },
  ]),
  addProduct
);

/* =====================================================
   🔹 Delete Whole Product (OWNER ONLY)
   DELETE /api/products/delete/:id
   ===================================================== */
router.delete(
  "/delete/:id",
  authMiddleware,
  deleteProduct
);

/* =====================================================
   🔹 Delete Single Component (ROW-WISE FIX 🔥)
   DELETE /api/products/delete-component/:productId/:componentId
   ===================================================== */
router.delete(
  "/delete-component/:productId/:componentId",
  authMiddleware,
  deleteComponent
);

export default router;
