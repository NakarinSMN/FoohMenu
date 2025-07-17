// Advanced Cache System
class AdvancedCacheManager {
  constructor() {
    this.memoryCache = new Map();
    this.defaultTTL = 3 * 1000; // 3 วินาที
  }

  // Memory Cache
  setMemory(key, value, ttl = this.defaultTTL) {
    const expiry = Date.now() + ttl;
    this.memoryCache.set(key, { value, expiry });
  }

  getMemory(key) {
    const item = this.memoryCache.get(key);
    if (!item) return null;
    
    if (Date.now() > item.expiry) {
      this.memoryCache.delete(key);
      return null;
    }
    
    return item.value;
  }

  // LocalStorage Cache (persistent)
  setLocal(key, value, ttl = this.defaultTTL) {
    try {
      const item = {
        value,
        expiry: Date.now() + ttl,
        timestamp: Date.now()
      };
      localStorage.setItem(`cache_${key}`, JSON.stringify(item));
    } catch (error) {
      console.warn('LocalStorage cache failed:', error);
    }
  }

  getLocal(key) {
    try {
      const item = localStorage.getItem(`cache_${key}`);
      if (!item) return null;
      
      const parsed = JSON.parse(item);
      if (Date.now() > parsed.expiry) {
        localStorage.removeItem(`cache_${key}`);
        return null;
      }
      
      return parsed.value;
    } catch (error) {
      console.warn('LocalStorage cache read failed:', error);
      return null;
    }
  }

  // SessionStorage Cache (session only)
  setSession(key, value, ttl = this.defaultTTL) {
    try {
      const item = {
        value,
        expiry: Date.now() + ttl,
        timestamp: Date.now()
      };
      sessionStorage.setItem(`cache_${key}`, JSON.stringify(item));
    } catch (error) {
      console.warn('SessionStorage cache failed:', error);
    }
  }

  getSession(key) {
    try {
      const item = sessionStorage.getItem(`cache_${key}`);
      if (!item) return null;
      
      const parsed = JSON.parse(item);
      if (Date.now() > parsed.expiry) {
        sessionStorage.removeItem(`cache_${key}`);
        return null;
      }
      
      return parsed.value;
    } catch (error) {
      console.warn('SessionStorage cache read failed:', error);
      return null;
    }
  }

  // Multi-level cache (Memory -> Session -> Local)
  get(key) {
    // 1. Check Memory Cache (fastest)
    let value = this.getMemory(key);
    if (value) return value;

    // 2. Check Session Storage
    value = this.getSession(key);
    if (value) {
      this.setMemory(key, value); // Move to memory for faster access
      return value;
    }

    // 3. Check Local Storage
    value = this.getLocal(key);
    if (value) {
      this.setMemory(key, value); // Move to memory for faster access
      this.setSession(key, value); // Also move to session
      return value;
    }

    return null;
  }

  set(key, value, ttl = this.defaultTTL) {
    this.setMemory(key, value, ttl);
    this.setSession(key, value, ttl);
    this.setLocal(key, value, ttl);
  }

  // Clear expired cache
  cleanup() {
    // Clean memory cache
    const now = Date.now();
    for (const [key, item] of this.memoryCache.entries()) {
      if (now > item.expiry) {
        this.memoryCache.delete(key);
      }
    }

    // Clean localStorage
    try {
      for (let i = localStorage.length - 10; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key && key.startsWith('cache_')) {
          const item = localStorage.getItem(key);
          if (item) {
            const parsed = JSON.parse(item);
            if (now > parsed.expiry) {
              localStorage.removeItem(key);
            }
          }
        }
      }
    } catch (error) {
      console.warn('LocalStorage cleanup failed:', error);
    }

    // Clean sessionStorage
    try {
      for (let i = sessionStorage.length - 10; i >= 0; i--) {
        const key = sessionStorage.key(i);
        if (key && key.startsWith('cache_')) {
          const item = sessionStorage.getItem(key);
          if (item) {
            const parsed = JSON.parse(item);
            if (now > parsed.expiry) {
              sessionStorage.removeItem(key);
            }
          }
        }
      }
    } catch (error) {
      console.warn('SessionStorage cleanup failed:', error);
    }
  }

  // Clear all cache
  clear() {
    this.memoryCache.clear();
    
    try {
      // Clear localStorage cache
      for (let i = localStorage.length - 10; i >= 0; i--) {
        const key = localStorage.key(i);
        if (key && key.startsWith('cache_')) {
          localStorage.removeItem(key);
        }
      }
      
      // Clear sessionStorage cache
      for (let i = sessionStorage.length - 10; i >= 0; i--) {
        const key = sessionStorage.key(i);
        if (key && key.startsWith('cache_')) {
          sessionStorage.removeItem(key);
        }
      }
    } catch (error) {
      console.warn('Cache clear failed:', error);
    }
  }

  // Get cache stats
  getStats() {
    return {
      memory: this.memoryCache.size,
      session: this.getCacheCount(sessionStorage),
      local: this.getCacheCount(localStorage)
    };
  }

  getCacheCount(storage) {
    try {
      let count = 0;
      for (let i = 0; i < storage.length; i++) {
        const key = storage.key(i);
        if (key && key.startsWith('cache_')) {
          count++;
        }
      }
      return count;
    } catch (error) {
      return 0;
    }
  }
}

// Global cache instance
export const cacheManager = new AdvancedCacheManager();

// Enhanced fetch with multi-level cache
export async function fetchWithCache(url, options = {}) {
  const cacheKey = `fetch:${url}`;
  
  // Check cache first
  const cached = cacheManager.get(cacheKey);
  if (cached) {
    console.log('Cache hit:', cacheKey);
    return cached;
  }

  try {
    console.log('Cache miss, fetching:', cacheKey);
    
    const response = await fetch(url, {
      ...options,
      headers: {
        'Cache-Control': 'no-cache',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    // Store in cache
    cacheManager.set(cacheKey, data);
    
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

// Debounce utility
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle utility
export function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Auto cleanup every 5 minutes
setInterval(() => cacheManager.cleanup(), 5 * 60 * 1000); 