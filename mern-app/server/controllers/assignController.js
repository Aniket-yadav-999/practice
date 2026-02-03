import User from "../models/User.js";
import Assignment from "../models/AssessmentAssignment.js";
import bcrypt from "bcryptjs";

export const assignAssessment = async (req, res) => {
  try {
    const {
      email,
      fullName,
      phone,
      password,
      productId,
      componentCode,
      delegateType,
    } = req.body;

    if (!email || !productId || !delegateType) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    let user = await User.findOne({ email });

    // ❌ USER DOES NOT EXIST
    if (!user) {
      if (!fullName || !password) {
        return res.status(400).json({
          message: "User not found. Please fill required details",
          userExists: false,
        });
      }

      const hashed = await bcrypt.hash(password, 10);

      user = await User.create({
        fullName,
        email,
        phone,
        password: hashed,
      });
    }

    const assignment = await Assignment.create({
      productId,
      componentCode,
      assignedTo: user._id,
      delegateType,
      assignedEmail: user.email,
      assignedName: user.fullName,
    });

    res.status(201).json({
      message: "Assessment assigned successfully",
      assignment,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
