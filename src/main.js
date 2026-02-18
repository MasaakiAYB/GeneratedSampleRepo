import { HomePage } from './pages/HomePage.js'

const root = document.getElementById('root')

if (!root) {
  throw new Error('root element was not found')
}

root.appendChild(HomePage())
