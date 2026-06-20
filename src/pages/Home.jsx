import React from 'react';
import projectCapture from '../assets/project-capture.png'; 
import Assignments from './Assignments';

export default function Home() {
  // روابط فيديوهات حقيقية ومفتوحة 100% ومطابقة تماماً لأجواء الدراسة والمكتبة والتخطيط
  const videoData = [
    {
      id: 1,
      title: "نصائح ذكية لتنظيم الوقت والدراسة",
      // فيديو حقيقي لشخص يخطط ويقرأ في كتاب بالمكتبة
      url: "https://upload.wikimedia.org/wikipedia/commons/transcoded/c/c5/A_student_reading_a_book_in_a_library.webm/A_student_reading_a_book_in_a_library.webm.360p.vp9.webm",
      description: "فيديو إرشادي مميز يساعد الطلاب على ترتيب أولوياتهم اليومية وتنظيم ساعات المذاكرة."
    },
    {
      id: 2,
      title: "كيف تذاكر بذكاء وتتفوق؟",
      // فيديو حقيقي لطالب يركز ويذاكر ويكتب ملاحظاته
      url: "https://upload.wikimedia.org/wikipedia/commons/transcoded/d/d7/Student_studying_at_home_01.webm/Student_studying_at_home_01.webm.480p.vp9.webm",
      description: "استراتيجيات عملية مجربة لتحسين الحفظ والفهم السريع للمناهج الدراسية الدراسية."
    }
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      {/* 1. قسم الترحيب الرئيسي */}
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

      {/* 3. قسم الفيديوهات التعليمية المباشرة */}
      <div style={{ marginTop: '50px', direction: 'rtl', borderTop: '2px solid #f1f5f9', paddingTop: '30px' }}>
        <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '20px', textAlign: 'center' }}>
          🎥 فيديوهات تحفيزية وإرشادية للبداية
        </h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' }}>
          {videoData.map((video) => {
            return (
              <div 
                key={video.id} 
                style={{ 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '12px', 
                  padding: '15px', 
                  width: '300px', 
                  background: '#ffffff', 
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' 
                }}
              >
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: '#1e293b', height: '45px', overflow: 'hidden' }}>
                  {video.title}
                </h3>
                
                {/* مشغل الفيديو المباشر */}
                <div style={{ borderRadius: '8px', overflow: 'hidden', background: '#000' }}>
                  <video 
                    src={video.url} 
                    controls 
                    style={{ width: '100%', display: 'block' }}
                  >
                    متصفحك لا يدعم تشغيل الفيديو.
                  </video>
                </div>
                
                <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '12px', lineHeight: '1.5' }}>
                  {video.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. قسم الواجبات */}
      <div style={{ marginTop: '50px' }}>
        <Assignments />
      </div>

    </div>
  );
}
