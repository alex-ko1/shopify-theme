import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import shopify from 'vite-plugin-shopify'

export default defineConfig({
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler',
      '~/*': 'frontend/*',
      '@/*': 'frontend/*',
    }
  },
  plugins: [
    vue(),
    shopify()
  ],
})
