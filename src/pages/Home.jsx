import React from 'react';
import projectCapture from '../assets/project-capture.png'; 
import Assignments from './Assignments';

export default function Home() {
  const videoData = [
    {
      id: 1,
      title: "نصائح ذكية لتنظيم الوقت والدراسة",
      url: "https://www.youtube.com/embed/S7gI8N_9z38",
      description: "فيديو إرشادي مميز يساعد الطلاب على ترتيب أولوياتهم اليومية وتنظيم ساعات المذاكرة."
    },
    {
      id: 2,
      title: "كيف تذاكر بذكاء وتتفوق؟",
      url: "https://www.youtube.com/embed/7V-p2rG_X_E",
      description: "استراتيجيات عملية مجربة لتحسين الحفظ والفهم السريع للمناهج الدراسية الدراسية."
    }
  ];

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px', textAlign: 'center' }}>
      <h2>🎥 فيديوهات تحفيزية وإرشادية للبداية</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
        {videoData.map((video) => (
          <div key={video.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '300px' }}>
            <h3>{video.title}</h3>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
              <iframe
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src={video.url}
                title={video.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '30px' }}><Assignments /></div>
    </div>
  );
}
