import { useState } from 'react';
import styles from './App.module.css';

function App() {

  const [temp, setTemp] = useState(0);

  const decrease = () => {
    setTemp(temp - 1);
  };

  const increase = () => {
    setTemp(temp + 1);
  };
  return (
    <div className={styles.App}>
      <div className={styles.backshape}>
      <h1>{temp}&#8451;</h1>
      </div>
      <button onClick={decrease}>Colder</button>
      <button onClick={increase}>Warmer</button>
    </div>
  );
}

export default App;
