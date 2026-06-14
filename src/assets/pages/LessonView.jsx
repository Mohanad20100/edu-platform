import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function LessonView() {
  const { id, index } = useParams();
  
  // حالة (State) لإدارة دفتر الملاحظات التفاعلي داخل الصفحة
  const [noteText, setNoteText] = useState('');
  const [savedNotes, setSavedNotes] = useState([
    'ملاحظة 1: تذكر مراجعة زمن المستقبل البسيط قبل الامتحان.',
    'ملاحظة 2: تركيز المعلم على أهمية الصراع النفسي في الرواية.'
  ]);

  // دالة لحفظ الملاحظة الجديدة في القائمة
  const handleSaveNote = (e) => {
    e.preventDefault();
    if (!noteText.trim()) return;
    setSavedNotes([...savedNotes, noteText]);
    setNoteText(''); // تفريغ صندوق الكتابة بعد الحفظ
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif', padding: '0 10px' }}>
      
      {/* 🔙 العودة لتفاصيل المادة */}
      <Link to={`/course/${id}`} style={{ textDecoration: 'none', color: '#2563eb', fontWeight: '600', display: 'inline-block', marginBottom: '20px' }}>
        ← العودة لقائمة الدروس
      </Link>

      {/* 📺 مشغل الفيديو التفاعلي المتجاوب */}
      <div style={{ background: '#000', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.15)', marginBottom: '25px' }}>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          <iframe 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // رابط فيديو تجريبي (يمكنك استبداله برابط شرحك)
            title="مشغل المحاضرة التعليمية"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* 📝 ترويسة الدرس الحالي */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.4rem', color: '#0f172a', fontWeight: 'bold', marginBottom: '8px' }}>
          عرض المحاضرة والشرح التفاعلي 💡
        </h2>
        <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
          معرف المادة الحالي: <code style={{ background: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>{id}</code> | الدرس رقم: <code style={{ background: '#e2e8f0', padding: '2px 6px', borderRadius: '4px' }}>{index}</code>
        </p>
      </div>

      <hr style={{ border: 0, borderTop: '1px solid #e2e8f0', marginBottom: '30px' }} />

      {/* ✍️ كشكول ومفكرة الطالب (Interactive Notepad) */}
      <div style={{ background: 'white', border: '1px solid #cbd5e1', borderRadius: '16px', padding: '25px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
        <h3 style={{ fontSize: '1.2rem', color: '#1e3a8a', marginBottom: '15px', fontWeight: 'bold' }}>✍️ دفتر الملاحظات السريع</h3>
        
        {/* نموذج كتابة الملاحظة */}
        <form onSubmit={handleSaveNote} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '25px' }}>
          <textarea
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="اكتب قانوناً، كلمة جديدة، أو ملاحظة ركز عليها المعلم أثناء الشرح..."
            rows="3"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              fontFamily: 'inherit',
              fontSize: '0.95rem',
              resize: 'vertical',
              outline: 'none'
            }}
          ></textarea>
          <button 
            type="submit"
            style={{
              background: '#10b981',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              alignSelf: 'flex-start'
            }}
          >
            حفظ الملاحظة في الكشكول 📌
          </button>
        </form>

        {/* عرض الملاحظات المحفوظة */}
        <div>
          <h4 style={{ fontSize: '1rem', color: '#475569', marginBottom: '10px', fontWeight: 'bold' }}>الملاحظات المدونة سابقاً ({savedNotes.length}):</h4>
          {savedNotes.length === 0 ? (
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', italic: 'true' }}>لم تقم بتدوين أي ملاحظة بعد.</p>
          ) : (
            <ul style={{ paddingRight: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {savedNotes.map((note, idx) => (
                <li key={idx} style={{ color: '#334155', fontSize: '0.95rem', lineHeight: '1.5', listStyleType: 'square' }}>
                  {note}
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>

    </div>
  );
}
