import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/anamnasi/',
  plugins: [
    react(),
    {
      name: 'save-backup',
      configureServer(server) {
        server.middlewares.use('/api/save-backup', function (req, res) {
          if (req.method === 'POST') {
            var body = '';
            req.on('data', function (chunk) { body += chunk; });
            req.on('end', function () {
              try {
                var savePath = path.resolve('C:/anamnesi/anamnesi-backup.json');
                fs.writeFileSync(savePath, body, 'utf8');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ ok: true, path: savePath }));
              } catch (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
              }
            });
          } else {
            res.writeHead(405);
            res.end();
          }
        });
      }
    }
  ],
})
