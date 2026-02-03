import React from "react";

const inputClass =
  "w-full border rounded-md px-3 py-2 text-sm " +
  "focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500";

const ProductForm = ({ product, productCode, onChange }) => {
  return (
    <div className="grid grid-cols-3 gap-5 mb-6">
      {/* Product Name */}
      <Input
        label="Product Name *"
        name="productName"
        placeholder="Enter product name"
        value={product.productName}
        onChange={onChange}
      />

      {/* Product Code */}
      <Input
        label="Product Code (Auto-generated)"
        value={productCode}
        disabled
        className="bg-gray-100 cursor-not-allowed"
      />

      {/* Product Category */}
      <Input
        label="Product Category"
        name="productCategory"
        placeholder="Enter product category"
        value={product.productCategory}
        onChange={onChange}
      />

      {/* Product Description */}
      <Input
        label="Product Description"
        name="productDescription"
        placeholder="Enter product description"
        value={product.productDescription}
        onChange={onChange}
      />

      {/* Product Image */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Upload Product Image *
        </label>
        <input
          type="file"
          name="productImage"
          onChange={onChange}
          className={`${inputClass} cursor-pointer`}
        />
      </div>
    </div>
  );
};

const Input = ({ label, className = "", ...props }) => (
  <div>
    <label className="block text-sm font-medium mb-1 text-gray-700">
      {label}
    </label>
    <input
      {...props}
      className={`${inputClass} ${className}`}
    />
  </div>
);

export default ProductForm;
