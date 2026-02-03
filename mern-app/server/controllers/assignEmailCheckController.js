import User from "../models/User.js";

export const assignEmailCheckController = async (req, res) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(200).json({
        exists: true,
        message: "User found",
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
        },
      });
    }

    return res.status(200).json({
      exists: false,
      message: "User not found",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
