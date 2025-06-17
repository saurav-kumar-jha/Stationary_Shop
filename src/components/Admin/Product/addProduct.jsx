import React, { useState } from "react";
import { Plus, Image as ImageIcon } from "lucide-react";

export default function Add_Product() {
  // ----------------------- state -----------------------
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    discount: "",
    stock: "",
    category: "",
    newCategory: "",
    image: null,
  });

  const existingCategories = [
    "School",
    "Office",
    "Gifting",
    "Snacks",
    "Toys",
  ];

  // -------------------- handlers -----------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      category: value === "__new__" ? "" : value,
      newCategory: value === "__new__" ? "" : form.newCategory,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalCategory =
      form.category || form.newCategory || "Uncategorized";

    const payload = {
      name: form.name,
      description: form.description,
      price: parseFloat(form.price),
      discount: parseFloat(form.discount),
      stock: parseInt(form.stock, 10),
      category: finalCategory,
      image: form.image,
    };

    console.log("Product Payload →", payload);
    setForm({name: "",
        description: "",
        price: "",
        discount: "",
        stock: "",
        category: "",
        newCategory: "",
        image: null,})
  };

  // --------------- UI ----------------
  return (
    <div className="flex justify-center mt-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white dark:bg-zinc-800 shadow-lg rounded-xl p-8 space-y-6"
      >
        <h1 className="text-2xl font-bold text-center text-zinc-800 dark:text-zinc-100">
          <Plus className="inline-block w-5 h-5 mr-2" />
          Add New Product
        </h1>

        {/* Name */}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product name"
          className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          rows={3}
          className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <div className="grid sm:grid-cols-3 gap-4">
          {/* Price */}
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price (₹)"
            min="0"
            className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          {/* Discount */}
          <input
            type="number"
            name="discount"
            value={form.discount}
            onChange={handleChange}
            placeholder="Discount (%)"
            min="0"
            max="100"
            className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Stock */}
          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            placeholder="Stock qty"
            min="0"
            className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Category Select */}
        <select
          value={form.category || "__placeholder__"}
          onChange={handleCategoryChange}
          className="w-full border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="__placeholder__" disabled>
            -- Select Category --
          </option>
          {existingCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
          <option value="__new__">➕ Add new category</option>
        </select>

        {/* New Category Field (conditional) */}
        {form.category === "" && (
          <input
            type="text"
            name="newCategory"
            value={form.newCategory}
            onChange={handleChange}
            placeholder="New category name"
            className="w-full border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        )}

        {/* Image Upload */}
        <label className="flex items-center gap-3 cursor-pointer">
          <span className="flex items-center gap-2 border border-dashed rounded-lg px-4 py-2">
            <ImageIcon className="w-5 h-5 text-zinc-500" />
            {form.image ? form.image.name : "Upload product image"}
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="hidden"
          />
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 active:scale-95 transition"
        >
          Post Product
        </button>
      </form>
    </div>
  );
}
