import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export async function createServer(root = process.cwd()) {

  const indexProd = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

  const app = express()

  const vite = await createViteServer({
      root,
      server: {
        middlewareMode: true,
      },
      appType: 'custom',
  })

  app.use(vite.middlewares)

  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl

      let template = indexProd; 
      template = await vite.transformIndexHtml(url, template)
      let render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render

      const appHtml = render(url)

      const html = template.replace(`<!--app-html-->`, appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      vite.ssrFixStacktrace(e)
      console.log(e.stack)
      res.status(500).end(e.stack)
    }
  })

    app.listen(5173);
}

createServer();
