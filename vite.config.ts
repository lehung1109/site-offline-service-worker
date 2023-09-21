import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

const entryFileNames = (chunkInfo) => {
  return 'assets/scripts/[name].js';
};

export default defineConfig({
  // plugins: [basicSsl()],
  server: {
    // https: true,
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: [
        'index.html',
        'src/assets/scripts/service-worker.ts'
      ],
      output: {
        entryFileNames,
      }
    }
  },
});