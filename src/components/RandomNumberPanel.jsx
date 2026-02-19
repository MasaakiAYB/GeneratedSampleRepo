import { useState } from 'react';

const generateRandomInteger = () => Math.floor(Math.random() * 1000);

function RandomNumberPanel() {
  const [randomNumber, setRandomNumber] = useState(generateRandomInteger);

  const handleGenerateClick = () => {
    setRandomNumber(generateRandomInteger());
  };

  return (
    <section className="panel">
      <p className="random-number-label">現在の数値</p>
      <p className="random-number-value">{randomNumber}</p>
      <button type="button" onClick={handleGenerateClick}>
        ランダム生成
      </button>
    </section>
  );
}

export default RandomNumberPanel;
