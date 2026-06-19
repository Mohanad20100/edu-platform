import React from 'react';
import projectCapture from '../assets/project-capture.png'; 
import Assignments from './Assignments'; 
import videoData from './data.json';
export default function Home() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif', padding: '20px 10px', textAlign: 'center' }}>
      
      {/* 1. قسم الترحيب الرئيسي المعتاد */}
      <div style={{ background: '#f1f5f9', padding: '40px 20px', borderRadius: '24px', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.2rem', color: '#1e3a8a', fontWeight: 'bold', margin: '0 0 10px 0' }}>
          مرحباً بك في منصتك التعليمية المتكاملة 🎓
        </h1>
        
        <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '500px', margin: '0 auto 25px auto', lineHeight: '1.6' }}>
          خطوتك الذكية نحو تنظيم محاضراتك، تدوين ملاحظاتك، ومتابعة تقدمك الدراسي بكل سهولة وإتقان.
        </p>

        {/* عرض الصورة الترحيبية */}
        <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)' }}>
          <img src={projectCapture} alt="معاينة المنصة" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>

      <hr style={{ border: '0', height: '1px', background: '#e2e8f0', margin: '40px 0' }} />

      {/* 2. 👇 هذا هو السطر الأخير والناقص الذي يقوم بعرض اللوحة */}
      <div style={{ textAlign: 'right' }}>
        <Assignments />
      </div>

    </div>
  );
}
