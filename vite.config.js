// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible'

export default defineConfig({
  envPrefix: 'REACT_APP_',
  plugins: [
    react(),
    envCompatible()
  ],
  build: {
    outDir: 'dist',
  },
  server: { 
    port: 3000,
    
  },
});
