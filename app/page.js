"use client";
import { useEffect, useState, useContext, useMemo } from "react";
import { CategoryContext } from "./CategoryBarClient";
import { fetchWithCache, cacheManager } from "./utils/cache";

//Custom hook สำหรับจัดการข้อมูลเมนู
function useMenuData() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMenu = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchWithCache(
        "/api/menu"
      );
      setMenu(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return { menu, loading, error, refetch: fetchMenu };
}

export default function Home() {
  const { selectedCategory, refetch: refetchCategories } = useContext(CategoryContext);
  const { menu, loading, error, refetch } = useMenuData();

  // Memoize filtered menu เพื่อเพิ่มประสิทธิภาพ
  const filteredMenu = useMemo(() => {
    if (selectedCategory === "all") {
      return menu;
    }
    return menu.filter(item => item.category === selectedCategory);
  }, [menu, selectedCategory]);

  // ปุ่มรีเฟรชที่มุมขวาบนของเมนูลิสต์
  const handleRefresh = async () => {
    cacheManager.clear();
    await refetchCategories?.();
    await refetch();
  };

  return (
    <div id="menu-container" style={{ position: 'relative' }}>
      {/* ปุ่มรีเฟรชเล็กที่มุมขวาบน */}
      <button
        onClick={handleRefresh}
        title="รีเฟรชเมนู"
        style={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 10,
          border: 'none',
          borderRadius: '50%',
          width: 20,
          height: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <i className="fas fa-sync-alt" style={{ fontSize: 16, color: '#666' }}></i>
      </button>
      <div className="menu-body" id="menu-items">
        {loading ? (
          <div style={{
            textAlign: 'center',
            marginTop: 40,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10
          }}>
            <div style={{
              width: 40,
              height: 40,
              border: '4px solid #f3f3f3',
              borderTop: '4px solid #3498db',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
            <div>กำลังโหลดเมนู...</div>
          </div>
        ) : error ? (
          <div style={{
            color: 'red',
            textAlign: 'center',
            marginTop: 40,
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10
          }}>
            <div>{error}</div>
            <button
              onClick={refetch}
              style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer'
              }}
            >
              ลองใหม่
            </button>
          </div>
        ) : (
          filteredMenu.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#aaa', marginTop: 40 }}>ไม่พบเมนู</div>
          ) : (
            filteredMenu.map((item, idx) => (
              <div className="menu-item" key={item.id || idx}>
                <div className="menu-item-row">
                  <img
                    src={item.image || "/no-image.png"}
                    alt={item.menulist}
                    className="menu-img"
                    width={120}
                    height={120}
                    style={{
                      objectFit: 'cover',
                      borderRadius: 16,
                      background: '#eee',
                      alignSelf: 'flex-start',
                      marginTop: 0
                    }}
                    loading="lazy"
                  />
                  <div className="menu-info">
                    <h3>
                      <span style={{ color: '#888', marginRight: 8 }}>{item.id}</span>
                      {item.menulist}
                    </h3>
                    <div className="price">{item.price} บาท</div>
                    <footer>{item.category}</footer>
                  </div>
                </div>
              </div>
            ))
          )
        )}
      </div>
    </div>
  );
}
