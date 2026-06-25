import React from 'react';
// 📥 استدعاء البيانات مباشرة من المسار الصحيح
import videoData from '../data/videos.json';

export default function Home() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', direction: 'rtl', fontFamily: 'Arial, sans-serif' }}>
      
      <div style={{ background: '#f1f5f9', padding: '30px', borderRadius: '12px', textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.2rem', color: '#1e293b', marginBottom: '15px' }}>
          منصة تعليمية 🎓
        </h1>
        <p style={{ color: '#475569', fontSize: '1.2rem' }}>
          مرحباً بكم يا شباب في منصتكم التعليمية المتكاملة.
        </p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '25px', textAlign: 'center' }}>
          🎥 فيديوهات ترحيبية وإرشادية للبداية
        </h2>
        
        {/* حاوية الكروت */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
          {videoData.map((video) => (
            
            /* كارت الفيديو المنفصل */
            <div 
              key={video.id} 
              style={{ 
                border: '1px solid #e2e8f0', 
                borderRadius: '16px', 
                width: '320px', 
                background: '#ffffff', 
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* مشغل الفيديو المباشر (.mp4) */}
              <div style={{ background: '#000', width: '100%', aspectRatio: '16/9' }}>
                <video 
                  src={video.url} 
                  controls 
                  playsInline
                  preload="metadata"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                >
                  متصفحك لا يدعم تشغيل الفيديو.
                </video>
              </div>

              {/* تفاصيل الكارت */}
              <div style={{ padding: '20px', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.1rem', color: '#1e293b', fontWeight: '700', marginBottom: '10px' }}>
                  {video.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.5', margin: '0' }}>
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
