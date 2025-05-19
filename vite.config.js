
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configuração para ajudar com o deploy Vercel
  build: {
    outDir: 'dist',
    // Ajuda a resolver problemas com módulos CommonJS e ESM
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  // Habilite a compatibilidade com resoluções de alias
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // Configurações específicas para o desenvolvimento
  server: {
    port: 3000,
  },
});