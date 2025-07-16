"use client";
import { createContext, useState } from "react";
import { menuItems } from "../data/menuItems";

export const CategoryContext = createContext();

const categoryIcons = {
  "เมนูแนะนำ": "fa-star",
  "อาหารจานเดียว": "fa-bowl-food",
  "เครื่องดื่ม": "fa-mug-hot",
  "ของหวาน": "fa-ice-cream",
  "อาหารว่าง": "fa-utensils",
  "อาหารเจ": "fa-leaf",
  "อาหารทะเล": "fa-fish",
  "สลัด": "fa-seedling",
  "อาหารญี่ปุ่น": "fa-shrimp",
};

function CategoryBar({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="category-bar">
      <button
        className={`category-btn${selectedCategory === "all" ? " selected" : ""}`}
        onClick={() => setSelectedCategory("all")}
        aria-label="All"
      >
        <i className="fas fa-th-large"></i>
        <span className="label">ทั้งหมด</span>
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          className={`category-btn${selectedCategory === cat ? " selected" : ""}`}
          onClick={() => setSelectedCategory(cat)}
          aria-label={cat}
        >
          <i className={`fas ${categoryIcons[cat] || "fa-utensils"}`}></i>
          <span className="label">{cat}</span>
        </button>
      ))}
    </div>
  );
}

export default function CategoryBarClient({ children }) {
  // เพิ่มหมวดหมู่ใหม่
  const extraCategories = ["อาหารเจ", "อาหารทะเล", "สลัด", "อาหารญี่ปุ่น"];
  const categories = menuItems.reduce((acc, item) => {
    if (!acc.includes(item.category)) acc.push(item.category);
    return acc;
  }, []);
  extraCategories.forEach(cat => {
    if (!categories.includes(cat)) categories.push(cat);
  });
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory, categories }}>
      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {children}
    </CategoryContext.Provider>
  );
} 