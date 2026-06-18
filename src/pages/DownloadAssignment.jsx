import React from 'react';

export default function DownloadAssignment() {
  const assignmentsList = [
    { id: 1, title: "واجب الفلسفة - أولى ثانوي الترم الثاني", link: "#", date: "2026-06-18" },
    { id: 2, title: "تمرين على قواعد اللغة الإنجليزية", link: "#", date: "2026-06-19" }
  ];

  return (
    <div>
      <h3 style={{ color: '#1e293b', marginBottom: '15px' }}>📥 تحميل الواجبات المتاحة للطلاب</h3>
      <p style={{ color: '#64748b', marginBottom: '20px' }}>اضغط على زر التحميل لتنزيل ملف الأسئلة وبدء الحل:</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {assignmentsList.map(asm => (
          <div key={asm.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #edf2f7' }}>
            <div>
              <h4 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>{asm.title}</h4>
              <small style={{ color: '#94a3b8' }}>تاريخ النشر: {asm.date}</small>
            </div>
            <button onClick={() => alert('جاري تحميل ملف الواجب...')} style={{ background: '#10b981', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.9rem' }}>تحميل الملف 📁</button>
          </div>
        ))}
      </div>
    </div>
  );
}
