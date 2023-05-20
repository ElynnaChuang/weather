import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  base: '/weather/',
  plugins: [react(), svgrPlugin()],
  server: {
    https: {
      key: fs.readFileSync(`${__dirname}/localhost-key.pem`),
      cert: fs.readFileSync(`${__dirname}/localhost.pem`),
    },
    open: true,
    port: 3000,
    host: true,
  },

  build: { outDir: 'build' },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  envDir: './env/',
});
