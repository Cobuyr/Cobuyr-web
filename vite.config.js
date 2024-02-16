import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['babel-plugin-glsl']
  },
  module: {
    rules: [{ test: /\.hdr$/, use: "url-loader" }]
  },
  assetsInclude: "**/*.hdr"
})
