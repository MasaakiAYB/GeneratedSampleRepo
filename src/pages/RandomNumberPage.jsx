import RandomNumberPanel from '../components/RandomNumberPanel.jsx';

function RandomNumberPage() {
  return (
    <main className="page-container">
      <h1>ランダム数値生成ページ</h1>
      <p className="page-description">ボタンを押すたびにランダムな数値を生成して表示します。</p>
      <RandomNumberPanel />
    </main>
  );
}

export default RandomNumberPage;
