import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/

export default defineConfig({
  base: `/kendo-vue/dashboard/`,
  plugins: [vue()],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
})
