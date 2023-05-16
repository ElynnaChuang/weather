import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/weather/',
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
  },
  build: { outDir: 'build' },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
