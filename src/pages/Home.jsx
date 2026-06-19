import React from 'react';
import projectCapture from '../assets/project-capture.png'; 
import Assignments from './Assignments'; 
import videoData from '../data.json';

export default function Home() {
  return (
    {/* قسم الفيديوهات الترحيبية والتحفيزية */}
<div style={{ marginTop: '40px', direction: 'rtl' }}>
  <h2 style={{ fontSize: '1.8rem', color: '#1a1a1a', marginBottom: '20px' }}>🎥 فيديوهات تحفيزية للبداية</h2>
  
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
    {videoData.map((video) => {
      // تحويل رابط يوتيوب العادي إلى رابط embed ليشتغل داخل الموقع دون مشاكل
      const embedUrl = video.url.replace("watch?v=", "embed/");

      return (
        <div key={video.id} style={{ border: '1px solid #e0e0e0', borderRadius: '12px', padding: '15px', width: '320px', background: '#ffffff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#333' }}>{video.title}</h3>
          
          {/* حاوية الفيديو لجعلها متجاوبة مع الشاشات */}
          <div style={{ overflow: 'hidden', paddingBottom: '56.25%', position: 'relative', height: 0, borderRadius: '8px' }}>
            <iframe
              style={{ left: 0, top: 0, height: '100%', width: '100%', position: 'absolute' }}
              src={embedUrl}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px', lineHeight: '1.4' }}>{video.description}</p>
        </div>
      );
    })}
  </div>
</div>
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
