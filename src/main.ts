import { createApp } from './app';
import './styles/global.css';

const root = document.querySelector<HTMLDivElement>('#app');

if (!root) {
  throw new Error('Root element #app not found');
}

root.append(createApp());
