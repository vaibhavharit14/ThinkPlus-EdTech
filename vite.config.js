import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for React + GitHub Pages deployment
export default defineConfig({
  plugins: [react()],
  base: '/ThinkPlus-EdTech/' // 👈 Must match your GitHub repo name exactly (case-sensitive)
});