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
  // Configuração mais robusta para resolver importações
  resolve: {
    alias: {
      '@': '/src',
      'components': '/src/components',
      'Components': '/src/components',
    },
    // Tenta resolver diferentes extensões
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  // Configurações específicas para o desenvolvimento
  server: {
    port: 3000,
  },
});