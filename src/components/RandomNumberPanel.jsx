import { useState } from 'react';

function RandomNumberPanel() {
  const [currentValue, setCurrentValue] = useState(null);
  const [history, setHistory] = useState([]);

  const handleGenerate = () => {
    const nextValue = Math.random() * 100;
    const generatedAt = new Date().toLocaleTimeString('ja-JP', { hour12: false });

    setCurrentValue(nextValue);
    setHistory((prevHistory) => [{ value: nextValue, generatedAt }, ...prevHistory].slice(0, 10));
  };

  return (
    <section className="panel">
      <div className="panel-content">
        <div className="panel-main">
          <h2 className="panel-title">ランダム数値</h2>
          <p className="current-label">現在の値</p>
          <p className="current-value">{currentValue === null ? '--.--' : currentValue.toFixed(2)}</p>
          <button type="button" onClick={handleGenerate}>
            ランダム生成
          </button>
        </div>

        <div className="history-section">
          <h3 className="history-title">直近10件の履歴</h3>
          <table className="history-table">
            <thead>
              <tr>
                <th>No</th>
                <th>値</th>
                <th>時刻</th>
              </tr>
            </thead>
            <tbody>
              {history.length === 0 ? (
                <tr>
                  <td colSpan="3" className="history-empty">
                    まだ生成されていません
                  </td>
                </tr>
              ) : (
                history.map((entry, index) => (
                  <tr key={`${entry.generatedAt}-${index}`}>
                    <td>{index + 1}</td>
                    <td>{entry.value.toFixed(2)}</td>
                    <td>{entry.generatedAt}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default RandomNumberPanel;
