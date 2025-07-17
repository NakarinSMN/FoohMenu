"use client";
import { createContext, useState, useEffect, useMemo } from "react";
import { fetchWithCache } from "./utils/cache";
import { cacheManager } from './utils/cache';

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
    return (
      <div className="category-bar" style={{ justifyContent: 'center', padding: '18px 0', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 20, height: 20, border: '2px solid #f3f3f3', borderTop: '2px solid #3498db', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
        กำลังโหลดหมวดหมู่...
      </div>
    );
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

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // ใช้ fetchWithCache แทน fetch ตรงๆ
      const data = await fetchWithCache("/api/menu");
      const cats = Array.from(new Set(data.map(item => item.category))).filter(Boolean);
      setCategories(cats);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    cacheManager.clear();
    fetchCategories();
  }, []);

  const contextValue = useMemo(() => ({
    selectedCategory,
    setSelectedCategory,
    categories,
    loading,
    error,
    refetch: fetchCategories
  }), [selectedCategory, categories, loading, error]);

  return (
    <CategoryContext.Provider value={contextValue}>
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