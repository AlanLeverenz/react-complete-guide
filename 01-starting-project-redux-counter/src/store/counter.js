import { createSlice } from '@reduxjs/toolkit';

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

export default counterSlice;
