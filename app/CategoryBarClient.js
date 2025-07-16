"use client";
import { createContext, useState, useEffect } from "react";

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

function CategoryBar({ categories, selectedCategory, setSelectedCategory, loading }) {
  if (loading) {
    return <div className="category-bar" style={{justifyContent:'center',padding:'18px 0'}}>กำลังโหลดหมวดหมู่...</div>;
  }
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
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbzwDckZvQ8dSV7ikbDEL1xw7COSSQFTV-k0AKVG1x_ZagfnWPJaD7NWy-Iw_oxdYEB4/exec")
      .then(res => res.json())
      .then(data => {
        const cats = Array.from(new Set(data.map(item => item.category))).filter(Boolean);
        setCategories(cats);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory, categories, loading }}>
      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        loading={loading}
      />
      {children}
    </CategoryContext.Provider>
  );
} 