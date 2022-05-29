// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

// can identify parts of the overall state
// redux toolkit will include the whole state for the update
// can now change state primitive values in createSlice
// redux toolkit fixes it under the hood
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

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


const store = configureStore({
  reducer: counterSlice.reducer
});

// creates a unique ID for each action object created in counterSlice
export const counterActions = counterSlice.actions;

export default store;