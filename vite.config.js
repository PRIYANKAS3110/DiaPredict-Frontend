import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Ensure your build targets modern browsers that support ES Modules
    rollupOptions: {
      external: ['fsevents'], // Exclude fsevents from the bundle
    },
  },
  server: {
    open: true,
  },
});
