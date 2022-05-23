const redux = require('redux');

// reducer function - a JS object with action type properties
// same input creates same output
// need default value for state for first time it runs
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    };
  }

  return state;

};

// store learns the reducer function
const store = redux.createStore(counterReducer);

// console.log(store.getState());

// (component) subscriber function
// is triggered whenever a reducer's state is changed
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
}

// subscribe method is given the subscriber function
store.subscribe(counterSubscriber);

// store dispatches an action using its reducer function, 
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });