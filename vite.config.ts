import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: '.', // Looks for .env files in the root
  resolve: {
    alias: {
      // Optional: Shortcuts for cleaner imports
      '@': '/src',
    },
  },
  optimizeDeps: {
    include: ['@bufbuild/protobuf'], // Ensures protobuf deps are pre-bundled for Vite
  },
});
