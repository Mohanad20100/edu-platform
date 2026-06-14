import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // 💡 تنبيه هام: إذا كنت ترفع المنصة على GitHub Pages، 
  // استبدل 'My-first-project' باسم المستودع (Repository) الخاص بك تماماً كما يظهر في الرابط.
  // أما إذا كنت ترفع على منصة Vercel، يمكنك حذف السطر التالي بالكامل.
  base: '/My-first-project/',
})
