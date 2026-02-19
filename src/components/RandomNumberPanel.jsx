import { useState } from 'react';

function generateRandomNumber() {
  return Number((Math.random() * 1000).toFixed(2));
}

function formatNumber(value) {
  return value.toFixed(2);
}

function RandomNumberPanel() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [history, setHistory] = useState([]);

  const handleGenerate = () => {
    const newValue = generateRandomNumber();
    setRandomNumber(newValue);
    setHistory((prevHistory) => [newValue, ...prevHistory].slice(0, 10));
  };

  return (
    <section className="panel">
      <div className="panel-current">
        <p className="random-number-label">現在の数値</p>
        <p className="random-number-value" aria-live="polite">
          {formatNumber(randomNumber)}
        </p>
        <button type="button" onClick={handleGenerate}>
          ランダム生成
        </button>
      </div>

      <div className="panel-history">
        <p className="history-title">直近10件の履歴</p>
        <table className="history-table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">数値</th>
            </tr>
          </thead>
          <tbody>
            {history.map((value, index) => (
              <tr key={`${value}-${index}`}>
                <td>{index + 1}</td>
                <td>{formatNumber(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default RandomNumberPanel;
