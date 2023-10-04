import { defineConfig } from 'vite';

const entryFileNames = (chunkInfo) => {
  if(chunkInfo.name === 'service-worker') {
    return '[name].js';
  }

  return 'assets/scripts/[name].js';
};

export default defineConfig({
  base: '/service-worker/dist/',
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