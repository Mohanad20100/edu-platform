import React from 'react';

const Home = () => {
  // مصفوفة الفيديوهات التعليمية والتحفيزية الخاصة بالمنصة
  const videos = [
    {
      id: 1,
      title: "نصائح ذكية لتنظيم الوقت والدراسة",
      url: "https://assets.mixkit.co/videos/preview/mixkit-student-watching-an-online-course-on-a-laptop-42994-large.mp4",
      description: "فيديو إرشادي مميز يساعد الطلاب على ترتيب أولوياتهم اليومية وتنظيم ساعات المذاكرة."
    },
    {
      id: 2,
      title: "كيف تذاكر بذكاء وتتفوق؟",
      url: "https://assets.mixkit.co/videos/preview/mixkit-girl-studying-with-a-laptop-and-notebook-42475-large.mp4",
      description: "استراتيجيات عملية مجربة لتحسين الحفظ والفهم السريع للمناهج الدراسية."
    },
    {
      id: 3,
      title: "فيديو تحفيزي رائع: لا تستسلم واصنع مستقبلك",
      url: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-writing-on-a-notebook-42473-large.mp4",
      description: "جرعة تحفيزية قوية للطلاب لتجديد الشغف والطاقة والمثابرة نحو النجاح."
    }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', direction: 'rtl', maxWidth: '1200px', margin: '0 auto' }}>
      {/* الجزء العلوي - الترحيب بالطلاب */}
      <header style={{ textAlign: 'center', marginBottom: '40px', backgroundColor: '#f5f7fa', padding: '30px', borderRadius: '12px' }}>
        <h1 style={{ color: '#1e293b', fontSize: '2.5rem', marginBottom: '10px' }}>
          في منصتك التعليمية المتكاملة
        </h1>
        <p style={{ color: '#474747', fontSize: '1.2rem', margin: '0' }}>
          أهلاً بكم في العام الدراسي الجديد! نساعدكم على تحقيق التفوق والنجاح من خلال محتوى متميز.
        </p>
      </header>

      {/* قسم الفيديوهات */}
      <main>
        <h2 style={{ color: '#0f172a', marginBottom: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>
          الفيديوهات الإرشادية والتحفيزية
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
          {videos.map((video) => (
            <div key={video.id} style={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
              
              {/* مشغل الفيديو */}
              <video 
                src={video.url} 
                controls 
                style={{ width: '100%', height: '200px', objectFit: 'cover', backgroundColor: '#000' }}
              />
              
              {/* تفاصيل الفيديو */}
              <div style={{ padding: '15px' }}>
                <h3 style={{ color: '#1e293b', fontSize: '1.2rem', marginTop: '0', marginBottom: '10px' }}>
                  {video.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', margin: '0' }}>
                  {video.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
