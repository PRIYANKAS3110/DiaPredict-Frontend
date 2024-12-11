import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { builtinModules } from 'node:module';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        // Externalize Node.js core modules
        ...builtinModules,
        // Externalize specific libraries
        'some-externally-required-library',
        // Externalize a specific file by URL
        fileURLToPath(
          new URL('./src/some-local-file.js', import.meta.url)
        ),
        
      ],
    },
  },
});
