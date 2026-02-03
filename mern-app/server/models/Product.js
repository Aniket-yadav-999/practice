import mongoose from "mongoose";

/* =========================
   COMPONENT SCHEMA
========================= */
const componentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Component name is required"],
      trim: true,
    },

    // Auto-generated: PR-xxxxxx-01, PR-xxxxxx-02 ...
    code: {
      type: String,
      index: true,
    },

    description: {
      type: String,
      required: [true, "Component description is required"],
      trim: true,
    },

    separableByHand: {
      type: String,
      enum: ["Yes", "No"],
      default: "Yes",
    },

    image: {
      type: String,
      default: null,
    },

    weightPerUnit: {
      type: Number,
      required: [true, "Weight per unit is required"],
      min: [0.01, "Weight must be greater than 0"],
    },

    costPerUnit: {
      type: Number,
      required: [true, "Cost per unit is required"],
      min: [0.01, "Cost must be greater than 0"],
    },

    salePerUnit: {
      type: Number,
      min: 0,
      default: null,
    },

    volumeUnitPerYear: {
      type: Number,
      required: [true, "Volume per year is required"],
      min: [1, "Volume must be greater than 0"],
    },

    supplierName: {
      type: String,
      trim: true,
      default: null,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: null,
    },
  },
  {
    timestamps: false,
  }
);

/* =========================
   PRODUCT SCHEMA
========================= */
const productSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    productName: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },

    productCode: {
      type: String,
      unique: true,
      index: true,
    },

    productCategory: {
      type: String,
      trim: true,
      default: null,
    },

    productDescription: {
      type: String,
      trim: true,
      default: null,
    },

    productImage: {
      type: String,
      default: null,
    },

    components: {
      type: [componentSchema],
      required: true,
      validate: {
        validator: function (val) {
          return Array.isArray(val) && val.length > 0;
        },
        message: "At least one component is required",
      },
    },
  },
  {
    timestamps: true,
  }
);

/* =========================
   AUTO GENERATE CODES
========================= */
productSchema.pre("save", async function () {
  // Generate Product Code if missing
  if (!this.productCode) {
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    this.productCode = `PR-${randomNumber}`;
  }

  // Generate Component Codes (row-wise)
  if (Array.isArray(this.components)) {
    this.components.forEach((component, index) => {
      if (!component.code) {
        const rowNumber = String(index + 1).padStart(2, "0");
        component.code = `${this.productCode}-${rowNumber}`;
      }
    });
  }
});

/* =========================
   CUSTOM METHOD TO REMOVE COMPONENT SAFELY
   Avoids "At least one component required" error
========================= */
productSchema.methods.removeComponentSafely = async function (componentId) {
  const index = this.components.findIndex(
    (c) => c._id.toString() === componentId
  );
  if (index === -1) return false;

  this.components.splice(index, 1);
  this.markModified("components"); // ⚡ ensure Mongoose notices change
  await this.save({ validateBeforeSave: false }); // ⚡ skip validation temporarily
  return true;
};

export default mongoose.model("Product", productSchema);
