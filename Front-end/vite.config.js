import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  // Load environment variables based on the mode (development or production)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL),
    },
    plugins: [react()],
  }
})
