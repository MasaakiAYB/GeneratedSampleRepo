export function UpdateControlsPlaceholder() {
  const section = document.createElement('section')
  section.className = 'placeholder-block'
  section.setAttribute('aria-label', '操作領域')

  const heading = document.createElement('h2')
  heading.textContent = '更新操作領域'

  const button = document.createElement('button')
  button.type = 'button'
  button.disabled = true
  button.textContent = '更新ボタン（#9 で実装予定）'

  section.append(heading, button)
  return section
}
