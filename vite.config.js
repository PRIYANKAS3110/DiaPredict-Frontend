import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { builtinModules } from 'node:module';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [react()],
  
});
