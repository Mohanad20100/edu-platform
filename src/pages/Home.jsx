import React, { useState } from 'react';
import videoData from '../data/videos.json';
import bannerData from '../data/banners.json'; // 1. استدعاء ملف البانرات الجديد

export default function Home() {
  // استخدام State لعرض البانر الأول كبداية
  const [currentBanner, setCurrentBanner] = useState(bannerData[0]);

  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px', direction: 'rtl', fontFamily: 'Arial, sans-serif' }}>
      
      {/* 2. تعديل الهيدر لعرض البانر المتحمس */}
      <div style={{ 
        background: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(59, 130, 246, 0.85)), url(${currentBanner.image_url})`, // إضافة الصورة كخلفية
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px 20px', // زيادة البادينج قليلاً لإبراز الصورة
        borderRadius: '16px', 
        textAlign: 'center', 
        marginBottom: '40px', 
        color: '#fff',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)', // إضافة ظل خفيف
        position: 'relative'
      }}>
        {/* نصوص البانر */}
        <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          {currentBanner.title} {/* عرض عنوان البانر الحالي */}
        </h1>
        <p style={{ fontSize: '1.4rem', opacity: '0.95', textShadow: '1px 1px 2px rgba(0,0,0,0.5)', maxWidth: '800px', margin: '0 auto' }}>
          {currentBanner.description} {/* عرض وصف البانر الحالي */}
        </p>

        {/* 3. إضافة أزرار للتنقل بين البانرات (اختياري ولكن جميل) */}
        <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px' }}>
          {bannerData.map((banner) => (
            <button 
              key={banner.id}
              onClick={() => setCurrentBanner(banner)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: currentBanner.id === banner.id ? '#fff' : 'rgba(255,255,255,0.5)',
                border: 'none',
                cursor: 'pointer'
              }}
            />
          ))}
        </div>
      </div>

      {/* قسم كروت الترحيب والتعريف (لم يتغير) */}
      <div style={{ marginTop: '20px' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '30px', textAlign: 'center', fontWeight: '700' }}>
          👋 ابدأ من هنا.. فيديوهات ترحيبية وإرشادية هامّة
        </h2>
        
        {/* حاوية الكروت المرنة المتجاوبة (لم تتغير) */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
          {videoData.map((video) => (
            
            /* الكارت المنفصل بتصميم عصري جذاب (لم يتغير) */
            <div 
              key={video.id} 
              style={{ 
                border: '1px solid #e2e8f0', 
                borderRadius: '20px', 
                width: '340px', 
                background: '#ffffff', 
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* مشغل الفيديو الذكي (لم يتغير) */}
              <div style={{ background: '#000', width: '100%', aspectRatio: '16/9' }}>
                <video 
                  src={video.url} 
                  controls 
                  playsInline
                  preload="metadata"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                >
                  المتصفح لا يدعم تشغيل الفيديو.
                </video>
              </div>

              {/* نصوص وتفاصيل الكارت (لم يتغير) */}
              <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: '#1e293b', fontWeight: '700', lineHeight: '1.5' }}>
                  {video.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.6', margin: '0' }}>
                  {video.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
