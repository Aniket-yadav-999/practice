import express from "express";
import { assignEmailCheckController } from "../controllers/assignEmailCheckController.js";

const router = express.Router();

// 🔍 Assign Email Check
router.get("/check-email", assignEmailCheckController);

export default router;
