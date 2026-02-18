import { createStatusCard } from '../components/StatusCard';

export const renderHomePage = (): HTMLElement => {
  const page = document.createElement('section');
  page.className = 'page-home';

  const title = document.createElement('h1');
  title.textContent = 'Frontend Base Ready';

  const description = document.createElement('p');
  description.textContent = 'Issue #9 の UI 実装は src/pages と src/components から開始できます。';

  page.append(title, description, createStatusCard());
  return page;
};
