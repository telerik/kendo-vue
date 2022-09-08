import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/

const BASE_URL = process.env.NODE_ENV === 'production' ? '/kendo-vue/coffee-warehouse/' : '';

export default defineConfig({
  base: `${BASE_URL}/kendo-vue/dashboard/`,
  plugins: [vue()],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
})
