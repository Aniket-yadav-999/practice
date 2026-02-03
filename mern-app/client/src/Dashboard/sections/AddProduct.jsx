import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";

import ProductForm from "../sections/AddProduct/ProductForm";
import ComponentsSection from "../sections/AddProduct/ComponentsSection";
import {
  productInitialState,
  componentInitialRow,
} from "../sections/AddProduct/initialState";
import { generateProductCode, addProduct } from "../sections/AddProduct/api";

const AddProduct = ({ onClose }) => {
  const [productCode, setProductCode] = useState("");
  const [product, setProduct] = useState(productInitialState);
  const [components, setComponents] = useState([]);

  /* =========================
     LOAD PRODUCT CODE
  ========================= */
  useEffect(() => {
    const loadCode = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          toast.error("Authentication required. Please login again.");
          return;
        }

        const res = await generateProductCode(token);
        const code = res.data.productCode;

        setProductCode(code);

        // Initialize first component row
        setComponents([
          {
            ...componentInitialRow,
            code: `${code}-01`,
          },
        ]);
      } catch (err) {
        console.error("Generate Product Code Error:", err);
        toast.error(
          err.response?.data?.message || "Failed to generate product code"
        );
      }
    };

    loadCode();
  }, []);

  /* =========================
     PRODUCT CHANGE
  ========================= */
  const handleProductChange = (e) => {
    const { name, value, files } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: files?.[0] || value,
    }));
  };

  /* =========================
     COMPONENT CHANGE
  ========================= */
  const handleComponentChange = (index, e) => {
    const { name, value, files } = e.target;
    setComponents((prev) => {
      const updated = [...prev];
      updated[index][name] = files?.[0] || value;
      return updated;
    });
  };

  /* =========================
     VALIDATE COMPONENT ROW
  ========================= */
  const validateRow = (row) => {
    const errors = [];
    if (!row.name?.trim()) errors.push("Name is required");
    if (!row.description?.trim()) errors.push("Description is required");
    if (!row.weightPerUnit || Number(row.weightPerUnit) <= 0)
      errors.push("Weight must be > 0");
    if (!row.costPerUnit || Number(row.costPerUnit) <= 0)
      errors.push("Cost must be > 0");
    if (!row.volumeUnitPerYear || Number(row.volumeUnitPerYear) <= 0)
      errors.push("Volume must be > 0");
    return errors;
  };

  /* =========================
     ADD ROW
  ========================= */
  const handleAddRow = () => {
    const lastRow = components[components.length - 1];
    const errors = validateRow(lastRow);

    if (errors.length) {
      toast.error(errors.join(", "));
      return;
    }

    const index = components.length + 1;
    setComponents([
      ...components,
      {
        ...componentInitialRow,
        code: `${productCode}-${String(index).padStart(2, "0")}`,
      },
    ]);
  };

  /* =========================
     REMOVE ROW
  ========================= */
  const handleRemoveRow = (removeIndex) => {
    const filtered = components.filter((_, i) => i !== removeIndex);
    const reIndexed = filtered.map((row, i) => ({
      ...row,
      code: `${productCode}-${String(i + 1).padStart(2, "0")}`,
    }));
    setComponents(reIndexed);
  };

  /* =========================
     SUBMIT
  ========================= */
  const handleSubmit = async () => {
    if (!product.productName?.trim()) {
      toast.error("Product name is required");
      return;
    }

    if (!product.productImage) {
      toast.error("Product image is required");
      return;
    }

    for (let i = 0; i < components.length; i++) {
      const errors = validateRow(components[i]);
      if (errors.length) {
        toast.error(`Row ${i + 1}: ${errors.join(", ")}`);
        return;
      }
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Authentication required. Please login again.");
        return;
      }

      const formData = new FormData();

      // 🔹 Product fields
      formData.append("productName", product.productName);
      formData.append("productCategory", product.productCategory || "");
      formData.append("productDescription", product.productDescription || "");
      formData.append("productCode", productCode);

      if (product.productImage instanceof File) {
        formData.append("productImage", product.productImage);
      }

      // 🔹 Components data
      const cleanComponents = components.map(
        ({ image, imagePreview, ...rest }) => ({
          ...rest,
          weightPerUnit: Number(rest.weightPerUnit),
          costPerUnit: Number(rest.costPerUnit),
          salePerUnit:
            rest.salePerUnit === "" || rest.salePerUnit == null
              ? undefined
              : Number(rest.salePerUnit),
          volumeUnitPerYear: Number(rest.volumeUnitPerYear),
        })
      );

      formData.append("components", JSON.stringify(cleanComponents));

      components.forEach((c) => {
        if (c.image instanceof File) {
          formData.append("componentImages", c.image);
        }
      });

      await addProduct(formData, token);

      toast.success("✅ Product added successfully");
      onClose();
    } catch (error) {
      console.error("Add Product Error:", error);
      toast.error(
        error.response?.data?.message || "Failed to add product"
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white w-[95%] max-w-7xl p-6 rounded-xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500"
        >
          <X />
        </button>

        <h2 className="text-2xl font-semibold mb-6">
          Add Product Details
        </h2>

        <ProductForm
          product={product}
          productCode={productCode}
          onChange={handleProductChange}
        />

        <ComponentsSection
          components={components}
          onAdd={handleAddRow}
          onChange={handleComponentChange}
          onRemove={handleRemoveRow}
        />

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-6 py-2 border rounded-md"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-teal-600 text-white px-6 py-2 rounded"
          >
            Save Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
