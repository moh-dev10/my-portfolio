import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: './',// هذا يجعل كل الروابط نسبية، فتعمل في أي مكان
  build: {
    // ضغط الملفات وتقليل حجم الـ Bundle
    minify: 'terser', 
    rollupOptions: {
      output: {
        // تقسيم المكتبات الكبيرة (مثل react-router, framer-motion) إلى ملفات منفصلة
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    // إزالة التعليقات والـ logs من الكود النهائي
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  }, 
})

