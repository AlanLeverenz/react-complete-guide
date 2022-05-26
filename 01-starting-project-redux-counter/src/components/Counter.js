import { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';

import classes from './Counter.module.css';

// const Counter = () => {

//   // instantiates the useDispatch hook
//   const dispatch = useDispatch();

//   // useSelector gets specific state values from the store
//   // redux automatically sets up a subscription to the store
//   // component is updated whenever state changes
//   const counter = useSelector(state => state.counter);

//   // dispatch tells the store which action to execute
//   const incrementHandler = () => {
//     dispatch({ type: 'increment' })
//   };

//   const decrementHandler = () => {
//     dispatch({ type: 'decrement' })
//   };

//   const toggleCounterHandler = () => { };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends Component {

  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {

  }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    )
  }
}

// access to values
const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

// access to dispatch methods
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// connect uses the class component function as an argument to connect with Redux
// connect is a higher order component


// export default Counter;
