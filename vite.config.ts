import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(),    tailwindcss(),svgr()
  ],
  assetsInclude: ["**/*.xml","**/*.bpmn"],
  server:{
    host: '0.0.0.0',
    proxy: {
      '/authorization': {
        target: 'http://admin-gw.platform-dev.pres.proxym-it.net',
        changeOrigin: true,
        xfwd: true,
      },
      '/oauth2': {
        target: 'http://admin-gw.platform-dev.pres.proxym-it.net',
        changeOrigin: true,
        xfwd: true,
      },

      '/configuration': {
          target: "http://admin-gw.platform-dev.pres.proxym-it.net",
          changeOrigin: true,
          xfwd: true,
        },
        '/public': {
          target: "http://admin-gw.platform-dev.pres.proxym-it.net",
          changeOrigin: true,
          xfwd: true,
        },
        '/gw': {
          target: "http://admin-gw.platform-dev.pres.proxym-it.net",
          changeOrigin: true,
          xfwd: true,
        },
        '/secured': {
          target: "http://admin-gw.platform-dev.pres.proxym-it.net",
          changeOrigin: true,
          xfwd: true,
        },
    
        '/secure': {
          target: "http://admin-gw.platform-dev.pres.proxym-it.net",
          changeOrigin: true,
          xfwd: true,
        },
        '/login': {
          target: "http://admin-gw.platform-dev.pres.proxym-it.net",
          changeOrigin: true,
          xfwd: true,
        },
  }
}
  
})
