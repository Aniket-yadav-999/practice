import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import assignRoutes from "./routes/assignRoutes.js";
import assignEmailCheckRoutes from "./routes/assignEmailCheckRoutes.js";

dotenv.config();
connectDB();

const app = express();

/* =====================================================
   🔹 Fix __dirname in ES Modules
   ===================================================== */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* =====================================================
   🔹 Middlewares
   ===================================================== */

// CORS (frontend → backend)
app.use(
  cors({
    origin: "http://localhost:5173", // change to your frontend URL if different
    credentials: true,
  })
);

// JSON (for normal requests)
app.use(express.json());

// URL Encoded (for FormData text fields)
app.use(express.urlencoded({ extended: true }));

// Static folder for uploaded images (so URL paths work)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* =====================================================
   🔹 Routes
   ===================================================== */
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/assessments", assignRoutes);
app.use("/api/assign", assignEmailCheckRoutes);

/* =====================================================
   🔹 Health Check (optional but useful)
   ===================================================== */
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

/* =====================================================
   🔹 Server Start
   ===================================================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});