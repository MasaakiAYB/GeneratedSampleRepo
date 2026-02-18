import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'

const HOST = '127.0.0.1'
const PORT = 5173
const ROOT = process.cwd()

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
}

const server = createServer(async (req, res) => {
  try {
    const urlPath = req.url === '/' ? '/index.html' : req.url || '/index.html'
    const safePath = normalize(urlPath).replace(/^\.+[\\/]/, '')
    const filePath = join(ROOT, safePath)
    const data = await readFile(filePath)
    const contentType = contentTypes[extname(filePath)] || 'application/octet-stream'

    res.writeHead(200, { 'Content-Type': contentType })
    res.end(data)
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    res.end('Not Found')
  }
})

server.listen(PORT, HOST, () => {
  console.log(`Frontend dev server: http://${HOST}:${PORT}`)
})
