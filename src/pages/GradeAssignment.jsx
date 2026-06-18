
import React from 'react';

export default function GradeAssignment() {
  const submissions = [
    { id: 1, studentName: "محمود أحمد", assignmentTitle: "واجب الفلسفة", file: "homework_solution.pdf", grade: "لم تقيم بعد" }
  ];

  return (
    <div>
      <h3 style={{ color: '#1e293b', marginBottom: '15px' }}>💯 لوحة تقييم المعلم ورصد الدرجات</h3>
      <p style={{ color: '#64748b', marginBottom: '20px' }}>تظهر هنا الملفات المرفوعة من الطلاب لإعطائهم الدرجة المناسبة:</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {submissions.map(sub => (
          <div key={sub.id} style={{ padding: '15px', background: '#f8fafc', borderRadius: '10px', border: '1px solid #edf2f7' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <strong style={{ color: '#1e293b' }}>👨‍🎓 الطالب: {sub.studentName}</strong>
              <span style={{ background: '#fef3c7', color: '#d97706', padding: '3px 8px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold' }}>{sub.grade}</span>
            </div>
            <p style={{ margin: '0 0 15px 0', fontSize: '0.95rem', color: '#475569' }}>الملف المستلم: <span style={{ color: '#2563eb', textDecoration: 'underline', cursor: 'pointer' }}>{sub.file}</span></p>
            
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type="text" placeholder="مثال: 10/10 ممتاز" style={{ padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.9rem', flex: 1 }} />
              <button onClick={() => alert('تم رصد وحفظ الدرجة بنجاح!')} style={{ background: '#10b981', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>حفظ الدرجة</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
