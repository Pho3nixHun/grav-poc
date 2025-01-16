import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '_': '/app/src',
    },
  },
});
