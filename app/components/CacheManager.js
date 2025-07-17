"use client";
import { useState, useEffect } from "react";
import { cacheManager } from "../utils/cache";

export default function CacheManager() {
  const [stats, setStats] = useState({ memory: 0, session:0, local:0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    updateStats();
    const interval = setInterval(updateStats, 5000); // Update every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const updateStats = () => {
    setStats(cacheManager.getStats());
  };

  const clearAllCache = () => {
    cacheManager.clear();
    updateStats();
  };

  const clearExpiredCache = () => {
    cacheManager.cleanup();
    updateStats();
  };

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          padding: '8px 12px',
          backgroundColor: '#7c3aed',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: 12,
          zIndex: 1000
        }}
      >
        Cache Stats
      </button>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: 'white',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: 16,
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      minWidth: '250px',
      zIndex: 100
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <h4 style={{ margin: 0, fontSize: '14px' }}>Cache Manager</h4>
        <button
          onClick={() => setIsVisible(false)}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '18px',
            cursor: 'pointer',
            color: '#666'
          }}
        >
          ×
        </button>
      </div>

      <div style={{ marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
          <span style={{ fontSize: '12px' }}>Memory Cache:</span>
          <span style={{ fontSize: 12, fontWeight: 'bold' }}>{stats.memory}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
          <span style={{ fontSize: 12 }}>Session Cache:</span>
          <span style={{ fontSize: 12, fontWeight: 'bold' }}>{stats.session}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '12px' }}>Local Cache:</span>
          <span style={{ fontSize: 12, fontWeight: 'bold' }}>{stats.local}</span>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={clearExpiredCache}
          style={{
            padding: '6px 10px',
            backgroundColor: '#ffc107',
            color: '#000',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontSize: '11px',
            flex: 1
          }}
        >
          Clear Expired
        </button>
        <button
          onClick={clearAllCache}
          style={{
            padding: '6px 10px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontSize: '11px',
            flex: 1
          }}
        >
          Clear All
        </button>
      </div>
    </div>
  );
} 