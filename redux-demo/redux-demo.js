const redux = require('redux');

// reducer function - same input creates same output
// need default value for state for first time it runs
const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1
  }
};

// store learns the reducer function
const store = redux.createStore(counterReducer);

// console.log(store.getState());

// subscriber function, reaches out to the store to get latest snapshot
// is triggered whenever state is changed
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
}

// make redux aware of subscriber function
// just point at the function, Redux executes it
store.subscribe(counterSubscriber);

// dispatches an action, a JS object with a type property
store.dispatch({ type: 'increment' });