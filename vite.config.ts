import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
import veauryVitePlugins from 'veaury/vite/index.js'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue(),
    veauryVitePlugins({
      type: 'vue',
      reactOptions:{
        jsxRuntime: 'classic'
      }
    }),
  ],
  optimizeDeps:{
    esbuildOptions: {
      define: {
        global: 'globalThis',
        "process.env": '{}'
      }
    },
  }
})
