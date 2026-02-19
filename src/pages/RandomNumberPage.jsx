import RandomNumberPanel from '../components/RandomNumberPanel.jsx';

function RandomNumberPage() {
  return (
    <main className="page-container">
      <h1>ランダム数値表示</h1>
      <p className="page-description">ボタンを押してランダム数値を生成できます。</p>
      <RandomNumberPanel />
    </main>
  );
}

export default RandomNumberPage;
