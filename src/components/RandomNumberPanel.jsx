import { useState } from 'react';

function generateRandomInteger() {
  return Math.floor(Math.random() * 1000);
}

function RandomNumberPanel() {
  const [randomNumber, setRandomNumber] = useState(0);

  const handleGenerate = () => {
    setRandomNumber(generateRandomInteger());
  };

  return (
    <section className="panel">
      <p className="random-number-label">現在の数値</p>
      <p className="random-number-value" aria-live="polite">
        {randomNumber}
      </p>
      <button type="button" onClick={handleGenerate}>
        ランダム生成
      </button>
    </section>
  );
}

export default RandomNumberPanel;
