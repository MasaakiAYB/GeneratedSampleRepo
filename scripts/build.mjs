import { cp, mkdir, rm } from 'node:fs/promises'
import { join } from 'node:path'

const root = process.cwd()
const distDir = join(root, 'dist')

await rm(distDir, { force: true, recursive: true })
await mkdir(join(distDir, 'src'), { recursive: true })
await cp(join(root, 'index.html'), join(distDir, 'index.html'))
await cp(join(root, 'src'), join(distDir, 'src'), { recursive: true })

console.log('Build completed: dist/ generated')
