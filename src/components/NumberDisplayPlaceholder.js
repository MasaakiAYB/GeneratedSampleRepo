export function NumberDisplayPlaceholder({ label, value }) {
  const section = document.createElement('section')
  section.className = 'placeholder-block'
  section.setAttribute('aria-label', label)

  const heading = document.createElement('h2')
  heading.textContent = label

  const valueText = document.createElement('p')
  valueText.className = 'placeholder-value'
  valueText.textContent = value

  section.append(heading, valueText)
  return section
}
