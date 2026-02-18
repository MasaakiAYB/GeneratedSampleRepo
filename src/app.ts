import { renderHomePage } from './pages/HomePage';

export const createApp = (): HTMLElement => {
  const app = document.createElement('main');
  app.className = 'app-shell';
  app.append(renderHomePage());
  return app;
};
