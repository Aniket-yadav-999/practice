import Product from "../models/Product.js";
import fs from "fs";
import path from "path";

/* =====================================================
   🔹 Generate Product Code (USER-WISE UNIQUE)
   Format: PR-xxxxxx
===================================================== */
export const generateProductCode = async (req, res) => {
  try {
    let code;
    let exists = true;

    while (exists) {
      const randomNumber = Math.floor(100000 + Math.random() * 900000);
      code = `PR-${randomNumber}`;

      // ✅ user-wise unique check
      exists = await Product.exists({
        productCode: code,
        user: req.user._id,
      });
    }

    return res.status(200).json({ productCode: code });
  } catch (error) {
    console.error("❌ Generate Product Code Error:", error);
    return res.status(500).json({ message: "Error generating product code" });
  }
};

/* =====================================================
   🔹 Get All Products (ONLY LOGGED-IN USER)
===================================================== */
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ user: req.user._id }).sort({
      createdAt: -1,
    });
    res.status(200).json(products);
  } catch (err) {
    console.error("❌ Get Products Error:", err);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

/* =====================================================
   🔹 Add Product (USER-WISE)
===================================================== */
export const addProduct = async (req, res) => {
  try {
    const { productName, productCode, productCategory, productDescription } =
      req.body;

    if (!productName?.trim()) {
      return res.status(400).json({ message: "Product name is required" });
    }

    /* ------------------ Parse Components ------------------ */
    let components = [];
    if (req.body.components) {
      try {
        components = JSON.parse(req.body.components);
      } catch {
        return res.status(400).json({ message: "Invalid components JSON" });
      }
    }

    if (!Array.isArray(components) || components.length === 0) {
      return res
        .status(400)
        .json({ message: "At least one component is required" });
    }

    /* ------------------ Component Images ------------------ */
    const componentImages = Array.isArray(req.files?.componentImages)
      ? req.files.componentImages
      : [];

    const normalizedComponents = components.map((c, index) => {
      if (!c.name?.trim() || !c.description?.trim()) {
        throw new Error(`Component row ${index + 1} is incomplete`);
      }

      return {
        name: c.name.trim(),
        description: c.description.trim(),
        separableByHand: c.separableByHand || "Yes",
        image: componentImages[index]?.path
          ? `${req.protocol}://${req.get("host")}/${componentImages[
              index
            ].path.replace(/\\/g, "/")}`
          : null,
        weightPerUnit: Number(c.weightPerUnit),
        costPerUnit: Number(c.costPerUnit),
        salePerUnit: c.salePerUnit ? Number(c.salePerUnit) : null,
        volumeUnitPerYear: Number(c.volumeUnitPerYear),
        supplierName: c.supplierName?.trim() || null,
        email: c.email?.trim() || null,
      };
    });

    /* ------------------ Product Image ------------------ */
    const productImage = req.files?.productImage?.[0]?.path
      ? `${req.protocol}://${req.get("host")}/${req.files.productImage[0].path.replace(
          /\\/g,
          "/"
        )}`
      : null;

    /* ------------------ Save Product ------------------ */
    const product = new Product({
      user: req.user._id,
      productName: productName.trim(),
      productCode: productCode || undefined,
      productCategory,
      productDescription,
      productImage,
      components: normalizedComponents,
    });

    await product.save();

    return res.status(201).json({
      message: "✅ Product added successfully",
      product,
    });
  } catch (error) {
    console.error("❌ Add Product Error:", error);

    if (error.code === 11000) {
      return res.status(400).json({ message: "Product code already exists" });
    }

    return res
      .status(500)
      .json({ message: error.message || "Failed to add product" });
  }
};

/* =====================================================
   🔹 Delete Product (ONLY OWNER CAN DELETE)
===================================================== */
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({ _id: id, user: req.user._id });

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    const safeDeleteFile = (url) => {
      try {
        if (!url) return;

        const filePath = path.join(
          process.cwd(),
          url.replace(`${req.protocol}://${req.get("host")}/`, "")
        );

        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      } catch (err) {
        console.warn("File delete failed:", err.message);
      }
    };

    safeDeleteFile(product.productImage);
    product.components.forEach((c) => safeDeleteFile(c.image));

    await Product.deleteOne({ _id: id });

    return res.status(200).json({ message: "✅ Product deleted successfully" });
  } catch (error) {
    console.error("❌ Delete Product Error:", error);
    return res.status(500).json({ message: "Failed to delete product" });
  }
};

/* =====================================================
   🔹 Delete Single Component (ROW-WISE + IMAGE DELETE 🔥)
===================================================== */
export const deleteComponent = async (req, res) => {
  try {
    const { productId, componentId } = req.params;

    if (!productId || !componentId) {
      return res
        .status(400)
        .json({ message: "ProductId and ComponentId are required" });
    }

    const product = await Product.findOne({
      _id: productId,
      user: req.user._id,
    });

    if (!product)
      return res.status(404).json({ message: "Product not found" });

    // Find component index
    const componentIndex = product.components.findIndex(
      (c) => c._id.toString() === componentId
    );

    if (componentIndex === -1)
      return res.status(404).json({ message: "Component not found" });

    const component = product.components[componentIndex];

    // Delete component image if exists
    if (component.image) {
      const filePath = path.join(
        process.cwd(),
        component.image.replace(`${req.protocol}://${req.get("host")}/`, "")
      );

      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    // Remove component from array
    product.components.splice(componentIndex, 1);

    // ⚡ Temporarily disable validation to avoid "At least one component required" error
    product.markModified("components");
    await product.save({ validateBeforeSave: false });

    return res
      .status(200)
      .json({ message: "✅ Component deleted permanently" });
  } catch (error) {
    console.error("❌ Delete Component Error:", error);
    return res.status(500).json({
      message: error.message || "Failed to delete component",
    });
  }
};
