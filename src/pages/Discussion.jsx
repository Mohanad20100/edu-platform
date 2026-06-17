import React, { useState } from 'react';

export default function Discussion() {
  const [questions, setQuestions] = useState([
    { id: 1, text: "كيف يمكنني تنظيم وقتي بين المواد العلمية والأدبية؟", replies: ["افضل طريقة هي عمل جدول يومي وثابت.", "ابدأ بالمادة الأصعب دائماً."] },
    { id: 2, text: "هل هناك ملخصات جيدة لمنهج التاريخ الترم الثاني؟", replies: ["نعم، تواصل مع المشرف بجروب التليجرام الرئيسي."] }
  ]);
  const [newQuestion, setNewQuestion] = useState("");

  // دالة إضافة سؤال جديد للمناقشة
  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;

    const questionObj = {
      id: questions.length + 1,
      text: newQuestion,
      replies: []
    };

    setQuestions([...questions, questionObj]);
    setNewQuestion("");
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, sans-serif' }}>
      <h2 style={{ color: '#1e3a8a', marginBottom: '20px', textAlign: 'center' }}>💬 مجتمعات النقاش والأسئلة</h2>

      {/* صندوق إضافة سؤال جديد */}
      <form onSubmit={handleAddQuestion} style={{ background: '#f1f5f9', padding: '20px', borderRadius: '16px', marginBottom: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold', color: '#334155' }}>اطرح سؤالاً أو استفساراً دراسياً:</label>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input 
            type="text" 
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="اكتب سؤالك هنا..." 
            style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }}
          />
          <button type="submit" style={{ background: '#2563eb', color: 'white', border: 'none', padding: '0 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>نشر</button>
        </div>
      </form>

      {/* عرض قائمة الأسئلة المطروحة */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {questions.map((q) => (
          <div key={q.id} style={{ background: 'white', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
            <h4 style={{ margin: '0 0 15px 0', color: '#1e293b', fontSize: '1.1rem' }}>🙋‍♂️ {q.text}</h4>
            
            {/* قسم الردود */}
            <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '12px' }}>
              <h5 style={{ margin: '0 0 10px 0', color: '#64748b' }}>الردود والإجابات:</h5>
              {q.replies.length === 0 ? (
                <p style={{ margin: 0, color: '#94a3b8', fontSize: '0.9rem' }}>لا توجد ردود بعد، كن أول من يكتب إجابة!</p>
              ) : (
                <ul style={{ paddingRight: '20px', margin: 0, color: '#475569', lineHeight: '1.6' }}>
                  {q.replies.map((reply, i) => (
                    <li key={i} style={{ marginBottom: '5px' }}>{reply}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
