import { useState } from 'react';

const generateRandomInteger = () => Math.floor(Math.random() * 1000);

function RandomNumberPanel() {
  const [randomNumber, setRandomNumber] = useState(() => generateRandomInteger());

  const handleGenerateClick = () => {
    setRandomNumber(generateRandomInteger());
  };

  return (
    <section className="panel">
      <p>現在のランダム数値: {randomNumber}</p>
      <button type="button" onClick={handleGenerateClick}>
        ランダム生成
      </button>
    </section>
  );
}

export default RandomNumberPanel;
