import React from 'react';
import projectCapture from '../assets/project-capture.png'; 
import Assignments from './Assignments';
import videoData from '../data.json';

export default function Home() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      {/* 1. قسم الترحيب الرئيسي المعتاد */}
      <div style={{ background: '#f1f5f9', padding: '30px', borderRadius: '12px', textAlign: 'center', marginBottom: '30px', direction: 'rtl' }}>
        <h1 style={{ fontSize: '2.2rem', color: '#1e293b', marginBottom: '15px' }}>
          مرحباً بك في منصتك التعليمية المتكاملة 🎓
        </h1>
        <p style={{ color: '#475569', fontSize: '1.2rem', lineHeight: '1.6' }}>
          مكانك الأول لتلقي الشروحات المبسطة، حل التدريبات، تدوين ملاحظاتك، ومتابعة تقدمك الدراسي بكل سهولة وإتقان.
        </p>
      </div>

      {/* 2. عرض الصورة الترحيبية */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <img 
          src={projectCapture} 
          alt="معاينة المنصة" 
          style={{ width: '100%', maxWidth: '600px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} 
        />
      </div>

      {/* 3. قسم الفيديوهات الترحيبية والتحفيزية للطلاب */}
      <div style={{ marginTop: '50px', direction: 'rtl', borderTop: '2px solid #f1f5f9', paddingTop: '30px' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '20px', textAlign: 'center' }}>
          🎥 فيديوهات تحفيزية وإرشادية للبداية
        </h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' }}>
          {videoData.map((video) => {
            // استخراج كود الفيديو لعرض صورة الغلاف الرسمية بتاعته من يوتيوب
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            const match = video.url.match(regExp);
            const videoId = (match && match[2].length === 11) ? match[2] : null;
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

            return (
              <div 
                key={video.id} 
                style={{ 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '12px', 
                  padding: '15px', 
                  width: '300px', 
                  background: '#ffffff', 
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'between'
                }}
              >
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: '#1e293b', height: '45px', overflow: 'hidden' }}>
                  {video.title}
                </h3>
                
                {/* عرض صورة غلاف الفيديو مع زر تشغيل وهمي بديل الـ iframe المقفول */}
                <a href={video.url} target="_blank" rel="noopener noreferrer" style={{ position: 'relative', display: 'block', borderRadius: '8px', overflow: 'hidden', cursor: 'pointer' }}>
                  <img src={thumbnailUrl} alt={video.title} style={{ width: '100%', display: 'block', borderRadius: '8px' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ background: '#ff0000', color: '#fff', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}>
                      ▶
                    </div>
                  </div>
                </a>
                
                <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '12px', lineHeight: '1.5', flexGrow: 1 }}>
                  {video.description}
                </p>

                <a 
                  href={video.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ display: 'block', textAlign: 'center', background: '#0070f3', color: '#fff', padding: '10px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', marginTop: '15px', transition: '0.2s' }}
                >
                  اضغط لمشاهدة الفيديو 📺
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. قسم الواجبات أو التكليفات إن وجد */}
      <div style={{ marginTop: '50px' }}>
        <Assignments />
      </div>

    </div>
  );
}
