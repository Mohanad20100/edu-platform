
import React from 'react';

export default function SubmitAssignment() {
  return (
    <div>
      <h3 style={{ color: '#1e293b', marginBottom: '15px' }}>📤 نموذج تسليم حل الواجب للأستاذ</h3>
      
      <form onSubmit={(e) => { e.preventDefault(); alert('تم رفع واجبك بنجاح للمراجعة!'); }} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>اختر المادة والواجب الدراسي:</label>
          <select style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem' }}>
            <option>واجب الفلسفة - أولى ثانوي الترم الثاني</option>
            <option>تمرين على قواعد اللغة الإنجليزية</option>
          </select>
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>ارفع ملف الحل الخاص بك (PDF أو صورة):</label>
          <input type="file" style={{ width: '100%', padding: '15px', background: '#f8fafc', borderRadius: '6px', border: '1px dashed #cbd5e1' }} required />
        </div>
        
        <button type="submit" style={{ background: '#2563eb', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem', marginTop: '10px' }}>إرسال الحل الآن 🚀</button>
      </form>
    </div>
  );
}
