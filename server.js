import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const production = process.env.VITE_PRODUCTION === "production";



export async function createServer(root = process.cwd()) {

    const indexProd = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8');

    const app = express()

    let vite;

    if (!production) {
        vite = await createViteServer({
            root,
            server: {
                middlewareMode: true,
            },
            appType: 'custom',
        })

        app.use(vite.middlewares)
    } else {
       app.use((await import('compression')).default());
       app.use(
           (await import('serve-static')).default(path.resolve(__dirname, 'dist/client'), {
               index: false,
           }),
        );
    } 
    

    app.use('*', async (req, res) => {
        try {
            const url = req.originalUrl
            let template, render; 
        
            if (!production) {
                template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
                template = await vite.transformIndexHtml(url, template);
                render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
            } else {
                template = indexProd;
                render = (await import('./dist/server/entry-server.js')).render;
            }

            const appHtml = render(url);

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
