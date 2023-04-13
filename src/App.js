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

    if (color === colors.length - 1) {
      // Stop changing the color when the last item in the array is reached
      setColor(colors.length - 1);
    } else {
      setColor((color + 1) % colors.length);
    }
  };

  const increase = () => {
    setTemp(temp + 1);

    if (color === 0) {
      // Stop changing the color when the first item in the array is reached
      setColor(0);
    } else {
      setColor((color - 1) % colors.length);
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
