"use client";
import { useContext, useState } from "react";
import { menuItems } from "../data/menuItems";
import { CategoryContext } from "./CategoryBarClient";

const categoryIcons = {
  "เมนูแนะนำ": "fa-star",
  "เมนูอาหารจานเดียว": "fa-bowl-food",
  "เมนูเครื่องดื่ม": "fa-mug-hot",
  "เมนูของหวาน": "fa-ice-cream",
  // เพิ่มหมวดหมู่อื่นๆ ตามต้องการ
};

// function SearchCard({ search, setSearch }) {
//   return (
//     <div className="search-card">
//       <i className="fas fa-search search-icon"></i>
//       <input
//         type="text"
//         placeholder="Find your dishes"
//         value={search}
//         onChange={e => setSearch(e.target.value)}
//       />
//       <button className="filter-btn"><i className="fas fa-sliders-h"></i></button>
//     </div>
//   );
// }

function SectionHeader({ title, onAll, showAll = true }) {
  return (
    <div className="section-header">
      <span className="title">{title}</span>
      {showAll && (
        <button className="all-btn" onClick={onAll}>
          All <i className="fas fa-arrow-right"></i>
        </button>
      )}
    </div>
  );
}

function MenuCard({ item }) {
  return (
    <div className="menu-item">
      <h3>{item.name}</h3>
      <div className="price">{item.price}</div>
      <footer>{item.description}</footer>
    </div>
  );
}

export default function Home() {
  // ใช้ context สำหรับ category
  const { selectedCategory, setSelectedCategory, categories } = useContext(CategoryContext);
  // const [search, setSearch] = useState("");

  // ฟิลเตอร์เมนูตามหมวดหมู่ (ไม่ต้องค้นหาแล้ว)
  const filteredMenu = menuItems.filter(item =>
    (selectedCategory === "all" || item.category === selectedCategory)
  );

  return (
    <div id="menu-container">
      {/* <SearchCard search={search} setSearch={setSearch} /> */}
      {/* <SectionHeader title="Categories" showAll={true} onAll={() => setSelectedCategory("all")} /> */}
      {/* <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      /> */}
      <div className="menu-body" id="menu-items">
        {filteredMenu.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#aaa', marginTop: 40 }}>ไม่พบเมนูที่ค้นหา</div>
        ) : (
          filteredMenu.map((item, idx) => (
            <MenuCard item={item} key={item.name + idx} />
          ))
        )}
      </div>
    </div>
  );
}
