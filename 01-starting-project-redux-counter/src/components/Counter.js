import { useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {

  // useSelector gets specific state values from the store
  // redux automatically sets up a subscription to the store
  // component is updated whenever state changes
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
