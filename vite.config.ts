import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  plugins: [
    react(),
    tsconfigPaths(),
    viteCompression(),
  ],
  build: {
    outDir: 'build',
    manifest: true,
    minify: 'esbuild',
    reportCompressedSize: true,
  },
});
