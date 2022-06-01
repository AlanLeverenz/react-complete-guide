// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

// COUNTER SLICE
const initialCounterState = { counter: 0, showCounter: true };
// can identify parts of the overall state
// redux toolkit will include the whole state for the update
// can now change state primitive values in createSlice
// redux toolkit fixes it under the hood
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      // action.payload carries the payload from Counter
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

// AUTH STATE SLICE
const initialAuthState = {
  isAuthenticated: false
}

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});

// map of reducers
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  },
});

// creates a unique ID for each action object created in counterSlice
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

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