import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // For using the '@' symbol. It points to the src directory
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }

})
