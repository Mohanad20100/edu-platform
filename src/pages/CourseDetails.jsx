import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function CourseDetails() {
  // جلب معرف المادة من الرابط ديناميكياً
  const { id } = useParams();

  // قاعدة بيانات تجريبية لمحاضرات مادة اللغة الإنجليزية (الترم الثاني) كمثال
  const courseInfo = {
    id: 'english-101',
    title: 'اللغة الإنجليزية - الترم الثاني',
    teacher: 'أ. محمود أحمد',
    chapters: [
      {
        chapterTitle: 'الوحدة الأولى: قواعد وتراكيب الجمل (Grammar)',
        lessons: [
          'الدرس الأول: زمن المستقبل البسيط واستخدامات Will & Going to',
          'الدرس الثاني: الأفعال السببية (Causative Verbs)',
          'الدرس الثالث: حل تدريبات تفاعلية على قواعد الوحدة الأولى'
        ]
      },
      {
        chapterTitle: 'الوحدة الثانية: تحليل القصة والأدب (Literature)',
        lessons: [
          'الدرس الأول: مقدمة في رواية العجوز والبحر (The Old Man and the Sea)',
          'الدرس الثاني: تحليل شخصية سانتياغو والصراع مع الطبيعة',
          'الدرس الثالث: مناقشة الأسئلة النقدية المتوقعة في الامتحان'
        ]
      }
    ]
  };

  return (
    <div style={{ maxWidth: '750px', margin: '0 auto', fontFamily: 'system-ui, sans-serif', padding: '0 10px' }}>
      
      {/* 🔙 زر العودة المريح في الهواتف */}
      <Link to="/courses" style={{ textDecoration: 'none', color: '#2563eb', fontWeight: '600', display: 'inline-block', marginBottom: '20px' }}>
        ← العودة لقائمة المواد
      </Link>

      {/* 📘 بطاقة ترويسة المادة */}
      <div style={{
        background: 'white',
        border: '1px solid #e2e8f0',
        borderRadius: '16px',
        padding: '25px',
        marginBottom: '30px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
          <span style={{ fontSize: '2.5rem' }}>🇬🇧</span>
          <h2 style={{ fontSize: '1.5rem', color: '#1e3a8a', margin: 0, fontWeight: 'bold' }}>{courseInfo.title}</h2>
        </div>
        <p style={{ color: '#475569', margin: 0, fontSize: '0.95rem' }}>👨‍🏫 المحاضر: <strong>{courseInfo.teacher}</strong></p>
      </div>

      {/* 📂 هيكل المنهج والدروس */}
      <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '15px', fontWeight: 'bold' }}>خطة المنهج الدراسي 📋</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {courseInfo.chapters.map((chapter, chIndex) => (
          <div key={chIndex} style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '12px', overflow: 'hidden' }}>
            
            {/* عنوان الوحدة/الفصل */}
            <div style={{ background: '#e2e8f0', padding: '12px 20px', fontWeight: 'bold', color: '#1e3a8a', fontSize: '1rem' }}>
              {chapter.chapterTitle}
            </div>

            {/* قائمة الدروس بالداخل */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {chapter.lessons.map((lesson, lIndex) => (
                <div 
                  key={lIndex} 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '15px 20px',
                    borderBottom: lIndex === chapter.lessons.length - 1 ? 'none' : '1px solid #e2e8f0',
                    background: 'white'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: '#10b981' }}>▶️</span>
                    <span style={{ fontSize: '0.95rem', color: '#334155' }}>{lesson}</span>
                  </div>
                  
                  {/* رابط الانتقال لصفحة المشغل ودفتر الملاحظات */}
                  <Link 
                    to={`/lesson/${courseInfo.id}/${chIndex}-${lIndex}`}
                    style={{
                      background: '#10b981',
                      color: 'white',
                      textDecoration: 'none',
                      padding: '6px 14px',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      fontWeight: '600'
                    }}
                  >
                    مشاهدة 📺
                  </Link>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
