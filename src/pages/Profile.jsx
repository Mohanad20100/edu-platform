
import React from 'react';

export default function Profile() {
  // بيانات الطالب والمؤشرات الدراسية الافتراضية
  const studentData = {
    name: 'محمود أحمد',
    grade: 'الصف الأول الثانوي (Grade 10)',
    joinDate: 'فبراير 2026',
    stats: [
      { courseName: 'اللغة الإنجليزية - الترم الثاني', progress: 75, color: '#2563eb' },
      { courseName: 'التاريخ - الحضارات القديمة', progress: 40, color: '#f59e0b' },
      { courseName: 'الفيزياء - الميكانيكا والطاقة', progress: 90, color: '#10b981' }
    ],
    badges: [
      { title: '🥇 الطالب المثالي', desc: 'مواظبة على الدروس أسبوعياً' },
      { title: '⚡ بطل الفيزياء', desc: 'تجاوز نسبة 80% في مادة الفيزياء' },
      { title: '📝 المدوّن الذكي', desc: 'استخدام كشكول الملاحظات باستمرار' }
    ]
  };

  return (
    <div style={{ maxWidth: '650px', margin: '0 auto', fontFamily: 'system-ui, sans-serif', padding: '0 10px' }}>
      
      {/* 👤 كارت هيدر الحساب الشخصي */}
      <div style={{
        background: 'white',
        border: '1px solid #e2e8f0',
        borderRadius: '16px',
        padding: '25px',
        textAlign: 'center',
        boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
        marginBottom: '30px'
      }}>
        <div style={{ fontSize: '4.5rem', marginBottom: '15px' }}>👨‍🎓</div>
        <h2 style={{ fontSize: '1.5rem', color: '#0f172a', fontWeight: 'bold', margin: '0 0 5px 0' }}>{studentData.name}</h2>
        <p style={{ color: '#2563eb', fontWeight: '600', margin: '0 0 5px 0', fontSize: '0.95rem' }}>{studentData.grade}</p>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0 }}>تاريخ الانضمام: {studentData.joinDate}</p>
      </div>

      {/* 📊 مؤشرات التقدم الدراسي (Progress Bars) */}
      <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '25px', marginBottom: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#1e3a8a', fontWeight: 'bold', marginBottom: '20px' }}>📊 مؤشرات تقدمك الأكاديمي</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {studentData.stats.map((item, index) => (
            <div key={index}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', marginBottom: '8px', fontWeight: '600', color: '#334155' }}>
                <span>{item.courseName}</span>
                <span style={{ color: item.color }}>{item.progress}%</span>
              </div>
              {/* شريط التقدم الخلفي */}
              <div style={{ width: '100%', height: '10px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
                {/* الشريط الملون الديناميكي */}
                <div style={{ width: `${item.progress}%`, height: '100%', background: item.color, borderRadius: '999px', transition: 'width 0.5s ease-in-out' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🏅 أوسمة وشارات التميز (Badges) */}
      <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '25px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#1e3a8a', fontWeight: 'bold', marginBottom: '20px' }}>🏅 شارات التميز الأكاديمي</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '15px' }}>
          {studentData.badges.map((badge, index) => (
            <div 
              key={index}
              style={{
                background: '#f8fafc',
                border: '1px solid #cbd5e1',
                borderRadius: '12px',
                padding: '15px',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '6px' }}>
                {badge.title}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: '1.4' }}>
                {badge.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
