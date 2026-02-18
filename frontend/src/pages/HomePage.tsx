import { RandomNumberPanel } from '../components/RandomNumberPanel';

export function HomePage() {
  return (
    <main className="app-shell">
      <h1>Generated Sample Repo</h1>
      <p className="page-description">Frontend foundation is ready. Implement issue #9 in the panel below.</p>
      <RandomNumberPanel />
    </main>
  );
}
