import React from 'react';
import projectCapture from '../assets/project-capture.png'; 
// 📥 الاستدعاء الصحيح والمباشر لملف الفيديوهات باستخدام (../) للخروج من مجلد pages
import videoData from 'src/data/videos.json';

export default function Home() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', direction: 'rtl', fontFamily: 'Arial, sans-serif' }}>
      
      {/* 1. قسم الترحيب الرئيسي للمنصة */}
      <div style={{ background: '#f1f5f9', padding: '30px', borderRadius: '12px', textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.2rem', color: '#1e293b', marginBottom: '15px' }}>
          مرحباً بك في منصتك التعليمية المتكاملة 🎓
        </h1>
        <p style={{ color: '#475569', fontSize: '1.2rem' }}>
          مكانك الأول لتلقي الشروحات المبسطة ومتابعة تقدمك الدراسي بكل سهولة وإتقان.
        </p>
      </div>

      {/* 2. عرض الصورة الترحيبية للموقع */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <img 
          src={projectCapture} 
          alt="معاينة" 
          style={{ width: '100%', maxWidth: '600px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
        />
      </div>

      {/* 3. قسم كروت الفيديوهات المجلوبة من ملف الـ JSON */}
      <div style={{ marginTop: '50px' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '25px', textAlign: 'center' }}>
          🎥 فيديوهات تحفيزية وإرشادية للبداية
        </h2>
        
        {/* الحاوية المرنة لترتيب الكروت بجانب بعضها */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', padding: '10px' }}>
          {videoData.map((video) => (
            
            /* 📦 كارت الفيديو المنفصل بناءً على الـ id الخاص به */
            <div 
              key={video.id} 
              style={{ 
                border: '1px solid #e2e8f0', 
                borderRadius: '16px', 
                padding: '0', 
                width: '320px', 
                background: '#ffffff', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* أ) مشغل الفيديو المباشر (.mp4) المنفصل لكل كارت */}
              <div style={{ background: '#000', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                <video 
                  src={video.url} 
                  controls 
                  playsInline
                  preload="metadata"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                >
                  متصفحك لا يدعم تشغيل الفيديو.
                </video>
              </div>

              {/* ب) تفاصيل ونص الكارت بالأسفل */}
              <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#1e293b', fontWeight: '700', lineHeight: '1.4' }}>
                  {video.title}
                </h3>
                
                <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '5px', lineHeight: '1.6', margin: '0' }}>
                  {video.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* 4. قسم الواجبات والتدريبات المدمج */}
      <div style={{ marginTop: '60px', background: '#fff', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '20px', textAlign: 'center' }}>
          📝 قـسـم الـواجبـات والـتدريـبـات
        </h2>
        <p style={{ textAlign: 'center', color: '#64748b' }}>جاهز استقبال التدريبات والأسئلة الخاصة بك قريباً!</p>
      </div>

    </div>
  );
}
