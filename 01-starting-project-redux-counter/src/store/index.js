// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

// map of reducers
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer
  },
});

// creates a unique ID for each action object created in counterSlice

export default store;

// action types stored in counterReducer
// redux store uses them when an action is dispatched by the subscriber

// always copy new objects in state. Don't mutate state with primitive values
// const counterReducer = (state = initialState, action) => {
//   // must include all state objects
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     }
//   }

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     }
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     }
//   }

//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter
//     }
//   }

//   return state;

// };

// const store = createStore(counterReducer);
// const store = createStore(counterSlice.reducer);

// set a map of reducers using configureStore
// const store = configureStore({
//   reducer: { counter: counterSlice.reducer }
// });