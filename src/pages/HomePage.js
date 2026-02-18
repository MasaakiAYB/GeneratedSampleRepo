import { NumberDisplayPlaceholder } from '../components/NumberDisplayPlaceholder.js'
import { UpdateControlsPlaceholder } from '../components/UpdateControlsPlaceholder.js'

export function HomePage() {
  const main = document.createElement('main')
  main.className = 'page-root'

  const header = document.createElement('header')

  const title = document.createElement('h1')
  title.textContent = 'Random Number UI Placeholder'

  const description = document.createElement('p')
  description.textContent = '#9 でランダム数値の表示と更新ロジックを実装します。'

  header.append(title, description)
  main.append(
    header,
    NumberDisplayPlaceholder({ label: '数値表示領域', value: '--' }),
    UpdateControlsPlaceholder(),
  )

  return main
}
