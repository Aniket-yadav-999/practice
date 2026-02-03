import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },

    componentCode: {
      type: String,
      required: true,
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    delegateType: {
      type: String,
      enum: ["within", "outside"],
      required: true,
    },

    assignedEmail: {
      type: String,
      required: true,
    },

    assignedName: {
      type: String,
    },

    status: {
      type: String,
      enum: ["Assigned", "Started", "Completed"],
      default: "Assigned",
    },
  },
  {
    timestamps: true,
  }
);

const AssessmentAssignment = mongoose.model(
  "AssessmentAssignment",
  assignmentSchema
);

export default AssessmentAssignment;
