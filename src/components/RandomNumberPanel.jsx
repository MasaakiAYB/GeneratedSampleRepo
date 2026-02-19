import { useState } from 'react';

function RandomNumberPanel() {
  const [randomNumber, setRandomNumber] = useState(0);

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 1000));
  };

  return (
    <section className="panel">
      <p>現在の数値: {randomNumber}</p>
      <button type="button" onClick={generateRandomNumber}>
        ランダム生成
      </button>
    </section>
  );
}

export default RandomNumberPanel;
