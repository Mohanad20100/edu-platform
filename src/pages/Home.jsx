import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  // بيانات تجريبية سريعة لعرض الكارت المتميز كما في الصورة
  const featuredCourse = {
    id: 'english-101',
    title: 'مادة اللغة الإنجليزية - الترم الثاني',
    tag: 'FEATURED COURSE'
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* 🟦 الجزء العلوي: البانر الأزرق الترحيبي */}
      <div style={{
        background: 'linear-gradient(180deg, #1e40af, #3b82f6)',
        color: 'white',
        padding: '30px 20px',
        borderRadius: '0 0 20px 20px',
        textAlign: 'center',
        position: 'relative',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ fontSize: '1.6rem', marginBottom: '15px', fontWeight: 'bold', lineHeight: '1.4' }}>
          مرحباً بك في منصتك التعليمية الرقمية (Edu-Platform) 🎓
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: '0.9' }}>
          أهلاً بك، محمود! 👋 تم تسجيل دخولك بنجاح. ابدأ رحلة التعلم الخاصة بك الآن.
        </p>
      </div>

      {/* 🎯 الجزء الأوسط: كارت المادة المتميزة المستوحى من الصورة */}
      <div style={{ padding: '20px 10px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
          borderRadius: '16px',
          padding: '25px 20px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
          border: '1px solid #bfdbfe',
          textAlign: 'center',
          marginBottom: '25px'
        }}>
          <span style={{ 
            fontSize: '0.8rem', 
            fontWeight: 'bold', 
            color: '#1d4ed8', 
            letterSpacing: '1px',
            display: 'block',
            marginBottom: '15px'
          }}>
            {featuredCourse.tag}
          </span>
          
          {/* أيقونة تعبيرية لكتاب اللغة الإنجليزية */}
          <div style={{ fontSize: '4rem', marginBottom: '15px' }}>🇬🇧📘</div>
          
          <h3 style={{ fontSize: '1.3rem', color: '#1e3a8a', marginBottom: '20px', fontWeight: 'bold' }}>
            {featuredCourse.title}
          </h3>
          
          <Link 
            to={`/course/${featuredCourse.id}`} 
            style={{
              display: 'inline-block',
              background: '#2563eb',
              color: 'white',
              textDecoration: 'none',
              padding: '10px 25px',
              borderRadius: '8px',
              fontWeight: '600',
              boxShadow: '0 4px 6px rgba(37, 99, 235, 0.2)'
            }}
          >
            دخول المحاضرة الآن 🚀
          </Link>
        </div>

        {/* 🧭 الجزء السفلي: أزرار الوصول السريع والخدمات */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          
          {/* زر عرض المواد */}
          <Link to="/courses" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#0f172a',
            color: 'white',
            padding: '18px 20px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: '600'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1.4rem' }}>🚀</span>
              <div>
                <div style={{ fontSize: '1rem' }}>عرض جميع المواد الدراسية</div>
                <div style={{ fontSize: '0.75rem', opacity: '0.6', marginTop: '2px' }}>تصفح المناهج والكتب المتاحة</div>
              </div>
            </div>
            <span style={{ fontSize: '1.2rem' }}>←</span>
          </Link>

          {/* زر متابعة المستوى */}
          <Link to="/profile" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#0f172a',
            color: 'white',
            padding: '18px 20px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontWeight: '600'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1.4rem' }}>🎯</span>
              <div>
                <div style={{ fontSize: '1rem' }}>متابعة مستواك الدراسي</div>
                <div style={{ fontSize: '0.75rem', opacity: '0.6', marginTop: '2px' }}>تميين مستواك ونسب تقدمك</div>
              </div>
            </div>
            <span style={{ fontSize: '1.2rem' }}>←</span>
          </Link>

          {/* زر مجتمعات النقاش */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#0f172a',
            color: 'white',
            padding: '18px 20px',
            borderRadius: '12px',
            cursor: 'pointer',
            opacity: '0.85'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1.4rem' }}>🤝</span>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: '600' }}>تصفح مجتمعات النقاش</div>
                <div style={{ fontSize: '0.75rem', opacity: '0.6', marginTop: '2px' }}>تصفح مجتمعات بث النقاش مع زملائك</div>
              </div>
            </div>
            <span style={{ fontSize: '1.2rem' }}>🔒</span>
          </div>

        </div>
      </div>

    </div>
  );
              }
