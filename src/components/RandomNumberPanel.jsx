import { useState } from 'react';

const generateRandomNumber = () => Math.floor(Math.random() * 1000);

function RandomNumberPanel() {
  const [randomNumber, setRandomNumber] = useState(() => generateRandomNumber());

  const handleGenerateClick = () => {
    setRandomNumber(generateRandomNumber());
  };

  return (
    <section className="panel">
      <p className="current-number-label">現在のランダム数値</p>
      <p className="current-number-value">{randomNumber}</p>
      <button type="button" onClick={handleGenerateClick}>
        ランダム生成
      </button>
    </section>
  );
}

export default RandomNumberPanel;
