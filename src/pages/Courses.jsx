
import React from 'react';
import { Link } from 'react-router-dom';

export default function Courses() {
  // مصفوفة المواد الدراسية المتاحة (يمكنك التعديل عليها وزيادتها لاحقاً)
  const coursesList = [
    {
      id: 'english-101',
      title: 'اللغة الإنجليزية - الترم الثاني',
      description: 'شرح تفصيلي لقواعد القراءة، القواعد النحوية، وتحليل الروايات المقررة.',
      icon: '🇬🇧📘',
      lessonsCount: 8,
      teacher: 'أ. محمود أحمد'
    },
    {
      id: 'history-101',
      title: 'التاريخ - الحضارات القديمة',
      description: 'دراسة شاملة لحضارة بلاد الرافدين، مصر القديمة، وأبرز المظاهر التاريخية.',
      icon: '🏛️📜',
      lessonsCount: 6,
      teacher: 'أ. علي محمد'
    },
    {
      id: 'physics-101',
      title: 'الفيزياء - الميكانيكا والطاقة',
      description: 'قوانين الحركة، الشغل، والطاقة مع تطبيقات ومسائل تفاعلية مبسطة.',
      icon: '⚛️⚡',
      lessonsCount: 10,
      teacher: 'أ. سامح فاروق'
    }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif', padding: '0 10px' }}>
      
      {/* العنوان الرئيسي للمكتبة التعليمية */}
      <div style={{ textAlign: 'center', marginBottom: '35px' }}>
        <h2 style={{ fontSize: '1.7rem', color: '#1e3a8a', fontWeight: 'bold' }}>المواد الدراسية المتاحة 📚</h2>
        <p style={{ color: '#64748b', marginTop: '8px', fontSize: '1rem' }}>اختر المادة التي ترغب في مراجعتها واستكمال محاضراتها اليوم</p>
      </div>

      {/* 📦 شبكة عرض الكروت (Courses Grid) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {coursesList.map((course) => (
          <div 
            key={course.id}
            style={{
              background: 'white',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '15px'
            }}
          >
            {/* الجزء الأيمن: أيقونة المادة والمعلومات */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '3rem', background: '#f1f5f9', padding: '12px', borderRadius: '12px' }}>
                {course.icon}
              </span>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: '#0f172a', fontWeight: 'bold', margin: '0 0 6px 0' }}>
                  {course.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#475569', margin: '0 0 10px 0', lineHeight: '1.5' }}>
                  {course.description}
                </p>
                <div style={{ display: 'flex', gap: '15px', fontSize: '0.8rem', color: '#64748b' }}>
                  <span>👨‍🏫 المدرس: {course.teacher}</span>
                  <span>📁 عدد الدروس: {course.lessonsCount}</span>
                </div>
              </div>
            </div>

            {/* الجزء الأيسر: زر الدخول للمادة */}
            <Link 
              to={`/course/${course.id}`}
              style={{
                background: '#2563eb',
                color: 'white',
                textDecoration: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: '600',
                whiteSpace: 'nowrap',
                fontSize: '0.9rem',
                textAlign: 'center'
              }}
            >
              استعراض 📂
            </Link>

          </div>
        ))}
      </div>

    </div>
  );
}
