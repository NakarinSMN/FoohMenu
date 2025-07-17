// Server-side cache
let cache = null;
let cacheTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 นาที

export async function GET(req) {
  try {
    // ตรวจสอบ cache ก่อน
    const now = Date.now();
    if (cache && (now - cacheTime) < CACHE_DURATION) {
      return new Response(JSON.stringify(cache), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=300' // Browser cache 5 นาที
        }
      });
    }

    // Fetch ข้อมูลใหม่
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // Timeout 10 วินาที

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzwDckZvQ8dSV7ikbDEL1xw7COSSQFTV-k0AKVG1x_ZagfnWPJaD7NWy-Iw_oxdYEB4/exec",
      { signal: controller.signal }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "ไม่สามารถโหลดข้อมูลได้" }), { status: 500 });
    }

    const data = await response.json();

    // เก็บใน cache
    cache = data;
    cacheTime = now;

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300'
      }
    });
  } catch (err) {
    if (err.name === 'AbortError') {
      return new Response(JSON.stringify({ error: "Timeout - โหลดข้อมูลช้าเกินไป" }), { status: 408 });
    }
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
} 