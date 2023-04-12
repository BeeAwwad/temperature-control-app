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
  const [color, setColor] = useState(0);

  const decrease = () => {
    setTemp(temp - 1);
  };

  const increase = () => {
    setTemp(temp + 1);

    setColor((color + 1) % colors.length);
    // const newColor = getRandomColor();
    // setColor(newColor);
  };

  // const getRandomColor = () => {
    // const colors = [
    //   '#c51d35',
    //   '#d32840',
    //   '#d94557',
    //   '#d95662',
    //   '#e0717a',
    //   '#e0717a',
    //   '#d9b7b8',
    //   '#f6f6f5',
    //   '#a5c1d4',
    //   '#94b8d0',
    //   '#6a92b6',
    //   '#3d6aa1',
    //   '#33649e',
    //   '#1a4b8d',
    //   '#063b81',
    //  ];
  //   let randomColor = '';
  //   for (let i = 0; i < colors.length; i++) {
  //      randomColor = colors[Math.floor(Math.random() * colors.length)];
  //   }
  //   return randomColor;
  // };


  return (
    <div className={styles.App}>
      <div className={styles.backshape} style={{ backgroundColor: colors[color]}}>
        <h1>{temp}&#8451;</h1>
      </div>
      <div className={styles.buttons}>
        <button onClick={decrease}>Colder</button>
        <button onClick={() => { increase();}}>Warmer</button>
      </div>
    </div>
  );
}

export default App;
