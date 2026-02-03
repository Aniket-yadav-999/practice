import express from "express";
import {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
} from "../controllers/authController.js";

const router = express.Router();

/* =====================================================
   🔐 AUTH ROUTES
   Base URL: /api/auth
   ===================================================== */

/**
 * @route   POST /api/auth/register
 * @desc    Register new user
 * @access  Public
 */
router.post("/register", registerUser);

/**
 * @route   POST /api/auth/login
 * @desc    Login user
 * @access  Public
 */
router.post("/login", loginUser);

/**
 * @route   POST /api/auth/forgot-password
 * @desc    Send reset password email
 * @access  Public
 */
router.post("/forgot-password", forgotPassword);

/**
 * @route   PUT /api/auth/reset-password/:token
 * @desc    Reset password using token
 * @access  Public
 */
router.put("/reset-password/:token", resetPassword);

export default router;
