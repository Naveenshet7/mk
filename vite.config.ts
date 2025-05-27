import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/project/', // Replace 'project' with your repository name
  build: {
    outDir: 'dist',
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['lucide-react'],
          'utils': ['fuse.js']
        }
      }
    },
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lucide-react'],
    exclude: ['@supabase/supabase-js']
  },
  server: {
    port: 5173,
    host: true,
    open: true,
    hmr: {
      overlay: true
    }
  },
  preview: {
    port: 5173,
    host: true,
    open: true
  }
});