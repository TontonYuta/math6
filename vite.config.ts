import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // 1. Đảm bảo đường dẫn tương đối để không lỗi trang khi OTA
  base: './',

  plugins: [react(), tailwindcss()],

  build: {
    // 2. Cấu hình Rollup để tương thích tuyệt đối với hệ điều hành Android
    rollupOptions: {
      output: {
        // Loại bỏ dấu gạch dưới (_) ở đầu tên file để Android không chặn file
        sanitizeFileName: (name) => {
          return name.replace(/^_+/, '');
        },
        // Đặt tên file gọn gàng trong thư mục assets
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
  },

  resolve: {
    alias: {
      // Cho phép dùng @ để trỏ nhanh vào thư mục gốc
      '@': path.resolve(__dirname, '.'),
    },
  },

  server: {
    // Giữ lại cấu hình hmr (Hot Module Replacement) để bạn dev trên máy tính cho nhanh
    hmr: true,
  },
});