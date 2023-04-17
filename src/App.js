import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const colors = [
    '#c51d35',
    '#d32840',
    '#d94557',
    '#d95662',
    '#e0717a',
    '#e0717a',
    '#d9b7b8',
    '#f6f6f5',
    '#a5c1d4',
    '#94b8d0',
    '#6a92b6',
    '#3d6aa1',
    '#33649e',
    '#1a4b8d',
    '#063b81',
   ];

  const [temp, setTemp] = useState(0);
  const [color, setColor] = useState(7);

  const decrease = () => {
    setTemp(temp - 1);

    if (temp === 0) {
      setColor(7);
    }else if (temp === -1) {
      setColor(8);
    }else if (temp === -2) {
      setColor(9);
    }else if (temp === -3) {
      setColor(10);
    }else if (temp === -4) {
      setColor(11);
    }else if (temp === -5) {
      setColor(12);
    }else if (temp === -6) {
      setColor(13);
    }else if (temp <= -7) {
      setColor(14);
    }
  };

  const increase = () => {
    setTemp(temp + 1);

    if (temp === 0) {
      setColor(7);
    }else if (temp === 1) {
      setColor(6);
    }else if (temp === 2) {
      setColor(5);
    }else if (temp === 3) {
      setColor(4);
    }else if (temp === 4) {
      setColor(3);
    }else if (temp === 5) {
      setColor(2);
    }else if (temp === 6) {
      setColor(1);
    }else if (temp >= 7) {
      setColor(0);
    }
  };
 

  return (
    <div className={styles.App}>
      <div className={styles.backshape} style={{ backgroundColor: colors[color]}}>
        <h1>{temp}&#8451;</h1>
      </div>
      <div className={styles.buttons}>
        <button className={styles.buttoncold} onClick={decrease}>Colder</button>
        <button className={styles.buttonwarm} onClick={() => { increase();}}>Warmer</button>
      </div>
    </div>
  );
}

export default App;
