import React from 'react';
// استخدام HashRouter لمنع مشكلة الشاشة البيضاء تماماً عند التحديث (Refresh) على الاستضافات
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

// 📥 استدعاء الصفحات الخمس المنفصلة من مجلدهاpages بنفس الحروف الظاهرة في مستودعك
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import LessonView from './pages/LessonView';
import Profile from './pages/Profile';
import Discussion from './pages/Discussion';

export default function App() {
  return (
    <Router>
      <div style={{ direction: 'rtl', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh', background: '#f8fafc', color: '#1e293b' }}>
        
        {/* 🧭 شريط التنقل العلوي الاحترافي الموحد (Navbar) */}
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 40px', background: 'linear-gradient(135deg, #1e3a8a, #2563eb)', color: 'white', alignItems: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
          <h2 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 'bold' }}>منصتي التعليمية 🎓</h2>
          <nav style={{ display: 'flex', gap: '15px' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: '600', padding: '6px 12px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)' }}>الرئيسية</Link>
            <Link to="/courses" style={{ color: 'white', textDecoration: 'none', fontWeight: '600', padding: '6px 12px' }}>المواد الدراسية</Link>
            <Link to="/profile" style={{ color: 'white', textDecoration: 'none', fontWeight: '600', padding: '6px 12px' }}>الملف الشخصي</Link>
          </nav>
        </header>

        {/* 📦 المساحة الديناميكية لعرض ومبادلة محتوى الصفحات الخمس تلقائياً */}
        <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <Routes>
            {/* 1. فتح صفحة الرئيسية تلقائياً عند دخول الموقع */}
            <Route path="/" element={<Home />} />
            
            {/* 2. فتح صفحة قائمة المواد الدراسية */}
            <Route path="/courses" element={<Courses />} />
            
            {/* 3. فتح صفحة تفاصيل المادة المختارة (تمرير الـ id ديناميكياً) */}
            <Route path="/course/:id" element={<CourseDetails />} />
            
            {/* 4. فتح صفحة مشغل المحاضرة والفيديو (تمرير معرف المادة ورقم الدرس) */}
            <Route path="/lesson/:id/:index" element={<LessonView />} />
            
            {/* 5. فتح صفحة حساب ومستوى الطالب الأكاديمي */}
            <Route path="/profile" element={<Profile />} />
           {/* 👇 هنا تضع السطر الجديد تماماً قبل كلمة </Routes> */}
            <Route path="/discussion" element={<Discussion />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}
