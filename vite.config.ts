import { defineConfig } from 'vite';
export default defineConfig({
  resolve: {
    alias: {
      // @ts-ignore
      '_': Deno.cwd() + '/src',
    },
  },
});
