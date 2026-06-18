import React, { useState } from 'react';

// 📥 استدعاء الصفحات الثلاثة المنفصلة من نفس المجلد
import DownloadAssignment from './DownloadAssignment';
import SubmitAssignment from './SubmitAssignment';
import GradeAssignment from './GradeAssignment';

export default function Assignments() {
  const [activeTab, setActiveTab] = useState('download');

  return (
    <div style={{ maxWidth: '850px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, sans-serif', direction: 'rtl' }}>
      
      <h2 style={{ color: '#1e3a8a', textAlign: 'center', marginBottom: '30px' }}>📝 نظام إدارة الواجبات المدرسية</h2>

      {/* 🧭 شريط التنقل العلوي الموحد بين الملفات الثلاثة */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '30px', background: '#f1f5f9', padding: '8px', borderRadius: '12px' }}>
        <button 
          onClick={() => setActiveTab('download')}
          style={{ flex: 1, padding: '12px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold', backgroundColor: activeTab === 'download' ? '#2563eb' : 'transparent', color: activeTab === 'download' ? 'white' : '#475569', transition: 'all 0.3s' }}>
          📥 تنزيل الواجبات
        </button>
        <button 
          onClick={() => setActiveTab('submit')}
          style={{ flex: 1, padding: '12px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold', backgroundColor: activeTab === 'submit' ? '#2563eb' : 'transparent', color: activeTab === 'submit' ? 'white' : '#475569', transition: 'all 0.3s' }}>
          📤 تسليم الطلاب
        </button>
        <button 
          onClick={() => setActiveTab('grade')}
          style={{ flex: 1, padding: '12px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold', backgroundColor: activeTab === 'grade' ? '#2563eb' : 'transparent', color: activeTab === 'grade' ? 'white' : '#475569', transition: 'all 0.3s' }}>
          💯 تقييم ورصد الدرجات
        </button>
      </div>

      {/* 📄 هنا يتم عرض محتوى الملف الفرعي بناءً على التبويب النشط */}
      <div style={{ background: 'white', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
        {activeTab === 'download' && <DownloadAssignment />}
        {activeTab === 'submit' && <SubmitAssignment />}
        {activeTab === 'grade' && <GradeAssignment />}
      </div>

    </div>
  );
}
