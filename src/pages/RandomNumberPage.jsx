import RandomNumberPanel from '../components/RandomNumberPanel.jsx';

function RandomNumberPage() {
  return (
    <main className="page-container">
      <h1>ランダム数値生成</h1>
      <p className="page-description">ボタン押下で数値を更新できます。</p>
      <RandomNumberPanel />
    </main>
  );
}

export default RandomNumberPage;
