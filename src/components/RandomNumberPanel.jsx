import { useState } from 'react';

const generateRandomNumber = () => Math.floor(Math.random() * 1000);

function RandomNumberPanel() {
  const [randomNumber, setRandomNumber] = useState(() => generateRandomNumber());
  const [history, setHistory] = useState([]);

  const handleGenerateClick = () => {
    const nextNumber = generateRandomNumber();
    setRandomNumber(nextNumber);
    setHistory((prevHistory) => [nextNumber, ...prevHistory].slice(0, 10));
  };

  return (
    <section className="panel">
      <div className="panel-layout">
        <div className="current-number-section">
          <p className="current-number-label">現在のランダム数値</p>
          <p className="current-number-value">{randomNumber}</p>
          <button type="button" onClick={handleGenerateClick}>
            ランダム生成
          </button>
        </div>
        <div className="history-section">
          <p className="history-title">直近10件の履歴</p>
          <table className="history-table">
            <thead>
              <tr>
                <th>番号</th>
                <th>値</th>
              </tr>
            </thead>
            <tbody>
              {history.length === 0 ? (
                <tr>
                  <td colSpan="2">履歴はまだありません</td>
                </tr>
              ) : (
                history.map((value, index) => (
                  <tr key={`${value}-${index}`}>
                    <td>{index + 1}</td>
                    <td>{value}</td>
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
