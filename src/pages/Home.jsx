import React from 'react';
import videoData from '../data/videos.json'; // استدعاء ملف الـ JSON السالف ذكره

export default function Home() {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '20px', direction: 'rtl', fontFamily: 'Arial, sans-serif' }}>
      
      {/* هيدر ترحيبي حماسي بالطلاب */}
      <div style={{ background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)', padding: '40px 20px', borderRadius: '16px', textAlign: 'center', marginBottom: '40px', color: '#fff' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '15px', fontWeight: 'bold' }}>
          منصتك التعليمية الأولى للقمة 🎓
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9' }}>
          هنا بنبسط لك المناهج.. عشان تفهم صح وتضمن مجموعك وأنت مرتاح!
        </p>
      </div>

      {/* قسم كروت الترحيب والتعريف */}
      <div style={{ marginTop: '20px' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '30px', textAlign: 'center', fontWeight: '700' }}>
          👋 ابدأ من هنا.. فيديوهات ترحيبية وإرشادية هامّة
        </h2>
        
        {/* حاوية الكروت المرنة المتجاوبة */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
          {videoData.map((video) => (
            
            /* الكارت المنفصل بتصميم عصري جذاب */
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
              {/* مشغل الفيديو الذكي */}
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

              {/* نصوص وتفاصيل الكارت */}
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
