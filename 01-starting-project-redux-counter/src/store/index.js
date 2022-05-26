import { createStore } from 'redux';

// action types stored in counterReducer
// redux store uses them when an action is dispatched by the subscriber
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    }
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    }
  }

  return state;

};

const store = createStore(counterReducer);

export default store;