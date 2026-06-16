import React from 'react';
import { Link } from 'react-router-dom';
import projectCapture from '../assets/project-capture.png'; // 👈 هذا هو سطر استدعاء الصورة الذي يسأل عنه السيرفر!

export default function Home() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif', padding: '20px 10px', textAlign: 'center' }}>
      
      {/* قسم الترحيب الرئيسي */}
      <div style={{ background: '#f1f5f9', padding: '40px 20px', borderRadius: '24px', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.2rem', color: '#1e3a8a', fontWeight: 'bold', margin: '0 0 10px 0' }}>
          مرحباً بك في منصتك التعليمية المتكاملة 🎓
        </h1>
        <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 25px auto', lineHeight: '1.6' }}>
          خطوتك الذكية نحو تنظيم محاضراتك، تدوين ملاحظاتك، ومتابعة تقدمك الدراسي بكل سهولة وإتقان.
        </p>

        {/* 🖼️ هنا يتم عرض الصورة التي استدعيناها في الأعلى */}
        <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto 25px auto', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
          <img 
            src={projectCapture} 
            alt="معاينة المنصة" 
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
{/* 🧭 أزرار التنقل السريع */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexDirection: 'column', width: '100%', marginTop: '20px' }}>
        <Link to="/courses" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card">📚 تصفح المواد الدراسية</div>
        </Link>

        <Link to="/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card">👤 الملف الشخصي</div>
        </Link>

        <Link to="/discussion" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="card">💬 تصفح مجتمعات النقاش</div>
        </Link>
      </div>
        
}
