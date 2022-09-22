import { defineConfig } from 'vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'json-microscope',
      fileName: (format) => `json-microscope.${format}.js`,
      formats: ['cjs', 'es']
    },
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  }
})
