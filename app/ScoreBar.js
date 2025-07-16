"use client";

export default function ScoreBar() {
  // ตัวอย่างคะแนน (สามารถแก้ไข logic ได้ภายหลัง)
  const score = 4.8;
  const maxScore = 5;
  const percent = (score / maxScore) * 100;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '8px 0 12px 0', width: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, color: '#1976d2', fontSize: '1.1em' }}>
        <i className="fas fa-star" style={{ color: '#ffb300', fontSize: '1.2em' }}></i>
        <span>{score} / {maxScore}</span>
      </div>
      <div style={{ width: '90%', height: 8, background: '#e3f2fd', borderRadius: 8, marginTop: 4, overflow: 'hidden' }}>
        <div style={{ width: `${percent}%`, height: '100%', background: '#1976d2', borderRadius: 8, transition: 'width 0.3s' }}></div>
      </div>
    </div>
  );
} 