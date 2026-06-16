import React, { useState } from 'react';

export default function Discussion() {
  // بيانات تجريبية لأسئلة الطلاب والإجابات لتبدأ بها الصفحة
  const [questions, setQuestions] = useState([
    {
      id: 1,
      student: "أحمد علي",
      question: "ما هي أهم الكلمات المفتاحية المقررة في مادة اللغة الإنجليزية للترم الثاني؟",
      date: "منذ ساعتين",
      answers: [
        { id: 101, teacher: "مستر محمود", text: "أهلاً يا أحمد، ركز جيداً على مفردات الوحدتين الأولى والثانية وخاصة الكلمات المتعلقة بالتكنولوجيا والتعليم." }
      ]
    },
    {
      id: 2,
      student: "سارة محمد",
      question: "هل يوجد مراجعة شاملة لدرس حضارة بلاد العراق القديم في التاريخ؟",
      date: "منذ 5 ساعات",
      answers: [] // سؤال بدون إجابة حتى الآن
    }
  ]);

  // متغيرات لحفظ النص الجديد الذي يكتبه الطالب
  const [newQuestion, setNewQuestion] = useState("");
  const [studentName, setStudentName] = useState("");

  // دالة لإضافة سؤال جديد للمناقشة
  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (!newQuestion.trim() || !studentName.trim()) return;

    const newQ = {
      id: Date.now(),
      student: studentName,
      question: newQuestion,
      date: "الآن",
      answers: []
    };

    setQuestions([newQ, ...questions]);
    setNewQuestion("");
    setStudentName("");
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>💬 ساحة مناقشة أسئلة الطلاب</h1>
        <p style={styles.subtitle}>اطرح سؤالك الدراسي وشارك الإجابات مع زملائك والمعلمين</p>
      </header>

      {/* نموذج إضافة سؤال جديد */}
      <form onSubmit={handleAddQuestion} style={styles.formCard}>
        <h3 style={styles.cardTitle}>➕ اطرح سؤالاً جديداً</h3>
        <input 
          type="text" 
          placeholder="اكتب اسمك الثنائي..." 
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          style={styles.input}
          required
        />
        <textarea 
          placeholder="اكتب سؤالك بالتفصيل هنا..." 
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          style={styles.textarea}
          rows="3"
          required
        ></textarea>
        <button type="submit" style={styles.submitBtn}>نشر السؤال في الساحة 🚀</button>
      </form>

      {/* عرض قائمة الأسئلة والمناقشات */}
      <div style={styles.questionsList}>
        {questions.map((q) => (
          <div key={q.id} style={styles.questionCard}>
            <div style={styles.questionHeader}>
              <span style={styles.studentName}>👤 {q.student}</span>
              <span style={styles.date}>{q.date}</span>
            </div>
            <p style={styles.questionText}>{q.question}</p>

            {/* قسم الإجابات */}
            <div style={styles.answersSection}>
              <h4 style={styles.answersTitle}>👇 الإجابات والمناقشات:</h4>
              {q.answers.length === 0 ? (
                <p style={styles.noAnswers}>لم يتم الرد على هذا السؤال بعد. كن أول من يجيب! ✨</p>
              ) : (
                q.answers.map((ans) => (
                  <div key={ans.id} style={styles.answerCard}>
                    <span style={styles.teacherBadge}>👨‍🏫 {ans.teacher} (إجابة معتمدة)</span>
                    <p style={styles.answerText}>{ans.text}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// تصميم داخلي سريع ومتجاوب ومتناسق مع ألوان منصتك التعليمية الزرقاء
const styles = {
  container: { maxWidth: '800px', margin: '0 auto', padding: '20px', direction: 'rtl', fontFamily: 'sans-serif' },
  header: { textAlign: 'center', marginBottom: '30px' },
  title: { color: '#1e3a8a', fontSize: '24px', marginBottom: '8px' },
  subtitle: { color: '#64748b', fontSize: '14px' },
  formCard: { background: '#ffffff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', marginBottom: '30px' },
  cardTitle: { color: '#0f172a', marginBottom: '15px', fontSize: '16px' },
  input: { width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '12px', outline: 'none' },
  textarea: { width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '12px', outline: 'none', resize: 'vertical' },
  submitBtn: { background: '#2563eb', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', width: '100%' },
  questionsList: { display: 'flex', flexDirection: 'column', gap: '20px' },
  questionCard: { background: '#ffffff', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', borderRight: '5px solid #3b82f6' },
  questionHeader: { display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '12px' },
  studentName: { fontWeight: 'bold', color: '#334155' },
  date: { color: '#94a3b8' },
  questionText: { fontSize: '16px', color: '#1e293b', lineHeight: '1.6', marginBottom: '15px' },
  answersSection: { background: '#f8fafc', padding: '15px', borderRadius: '8px', marginTop: '10px' },
  answersTitle: { fontSize: '13px', color: '#475569', marginBottom: '10px' },
  noAnswers: { fontSize: '13px', color: '#94a3b8', fontStyle: 'italic' },
  answerCard: { background: '#fff', padding: '12px', borderRadius: '6px', borderRight: '3px solid #10b981', marginTop: '8px' },
  teacherBadge: { fontSize: '12px', color: '#059669', fontWeight: 'bold', display: 'block', marginBottom: '4px' },
  answerText: { fontSize: '14px', color: '#334155', lineHeight: '1.5' }
};
