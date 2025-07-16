"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbzwDckZvQ8dSV7ikbDEL1xw7COSSQFTV-k0AKVG1x_ZagfnWPJaD7NWy-Iw_oxdYEB4/exec")
      .then(res => {
        if (!res.ok) throw new Error("ไม่สามารถโหลดข้อมูลได้");
        return res.json();
      })
      .then(data => {
        setMenu(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{textAlign:'center',marginTop:40}}>กำลังโหลดเมนู...</div>;
  if (error) return <div style={{color:'red',textAlign:'center',marginTop:40}}>{error}</div>;

  return (
    <div id="menu-container">
      <div className="menu-body" id="menu-items">
        {menu.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#aaa', marginTop: 40 }}>ไม่พบเมนู</div>
        ) : (
          menu.map((item, idx) => (
            <div className="menu-item" key={item.id || idx}>
              <h3>{item.menulist}</h3>
              <div className="price">{item.price} บาท</div>
              <footer>{item.category}</footer>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
