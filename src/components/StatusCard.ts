export const createStatusCard = (): HTMLElement => {
  const card = document.createElement('article');
  card.className = 'status-card';

  const heading = document.createElement('h2');
  heading.textContent = 'Current Status';

  const body = document.createElement('p');
  body.textContent = 'Minimum frontend foundation is configured.';

  card.append(heading, body);
  return card;
};
