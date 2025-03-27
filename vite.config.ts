import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  build: {
    emptyOutDir: true,
  },
  plugins: [react(), tailwindcss()],
});
