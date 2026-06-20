import React from 'react';
import projectCapture from '../assets/project-capture.png'; 

export default function Home() {
  // روابط فيديوهات MP4 مباشرة وسريعة جداً - صامتة وممتازة عن الدراسة والتركيز ومستحيل تقفل
  const videoData = [
    {
      id: 1,
      title: "نصائح ذكية لتنظيم الوقت والدراسة",
      url: "https://res.cloudinary.com/dmo7v6g6w/video/upload/v1718894000/study1.mp4",
      description: "فيديو إرشادي مميز يساعد الطلاب على ترتيب أولوياتهم اليومية وتنظيم ساعات المذاكرة."
    },
    {
      id: 2,
      title: "كيف تذاكر بذكاء وتتفوق؟",
      url: "https://res.cloudinary.com/dmo7v6g6w/video/upload/v1718894000/study2.mp4",
      description: "استراتيجيات عملية مجربة لتحسين الحفظ والفهم السريع للمناهج الدراسية الدراسية."
    }
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', direction: 'rtl', fontFamily: 'Arial, sans-serif' }}>
      
      {/* 1. قسم الترحيب الرئيسي */}
      <div style={{ background: '#f1f5f9', padding: '30px', borderRadius: '12px', textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.2rem', color: '#1e293b', marginBottom: '15px' }}>
          مرحباً بك في منصتك التعليمية المتكاملة 🎓
        </h1>
        <p style={{ color: '#475569', fontSize: '1.2rem' }}>
          مكانك الأول لتلقي الشروحات المبسطة ومتابعة تقدمك الدراسي بكل سهولة وإتقان.
        </p>
      </div>

      {/* 2. عرض الصورة الترحيبية */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <img src={projectCapture} alt="معاينة" style={{ width: '100%', maxWidth: '600px', borderRadius: '12px' }} />
      </div>

      {/* 3. قسم الفيديوهات المباشرة */}
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '20px' }}>
          🎥 فيديوهات تحفيزية وإرشادية للبداية
        </h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' }}>
          {videoData.map((video) => (
            <div key={video.id} style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '15px', width: '300px', background: '#ffffff', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: '#1e293b' }}>{video.title}</h3>
              
              {/* مشغل الفيديو المباشر المستقر */}
              <div style={{ borderRadius: '8px', overflow: 'hidden', background: '#000' }}>
                <video 
                  src={video.url} 
                  controls 
                  playsInline
                  preload="metadata"
                  style={{ width: '100%', display: 'block' }}
                >
                  متصفحك لا يدعم تشغيل الفيديو.
                </video>
              </div>
              
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '12px', lineHeight: '1.5' }}>{video.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. قسم الواجبات */}
      <div style={{ marginTop: '60px', background: '#fff', padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '20px', textAlign: 'center' }}>
          📝 قـسـم الـواجبـات والـتدريـبـات
        </h2>
        <p style={{ textAlign: 'center', color: '#64748b' }}>جاهز لاستقبال التدريبات والأسئلة الخاصة بك قريباً!</p>
      </div>

    </div>
  );
}
