import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:2000',  // Keep this for local development only
        secure: false
      }
    }
  },
  // This will ensure the frontend uses the correct API base URL in production
  define: {
    'process.env': {
      VITE_API_BASE_URL: 'https://sidan.site/api',  // Add this line
    }
  }
});
