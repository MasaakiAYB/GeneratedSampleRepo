import { useState } from 'react';

function RandomNumberPanel() {
  const [randomNumber, setRandomNumber] = useState(0);

  const handleGenerateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 1000));
  };

  return (
    <section className="panel">
      <p className="random-number-label">現在の数値</p>
      <p className="random-number-value">{randomNumber}</p>
      <button type="button" onClick={handleGenerateRandomNumber}>
        ランダム生成
      </button>
    </section>
  );
}

export default RandomNumberPanel;
