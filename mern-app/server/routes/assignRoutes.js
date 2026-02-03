import express from "express";
import { assignAssessment } from "../controllers/assignController.js";

const router = express.Router();

router.post("/assign", assignAssessment);

export default router;
