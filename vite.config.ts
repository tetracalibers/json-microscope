import { defineConfig } from 'vite'
import { resolve } from 'path'

const config = {
  browser: {
    name: 'json-microscope',
    entry: resolve(__dirname, './src/browser.ts'),
    fileName: (format) => `json-microscope-browser.${format}.js`,
    formats: ['umd', 'es']
  },
  node: {
    name: 'json-microscope',
    entry: resolve(__dirname, './src/node.ts'),
    fileName: (format) => `json-microscope-node.${format}.js`,
    formats: ['cjs', 'es']
  }
}

const currentConfig = config[process.env.LIB_NAME]

if (currentConfig === undefined) {
  throw new Error('LIB_NAME is not defined or is not valid')
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      ...currentConfig
    },
    emptyOutDir: false
  }
})
