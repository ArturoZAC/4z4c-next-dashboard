import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  count: number;
  isReady: boolean;
}

const initialState: CounterState = {
  count: 5,
  isReady: false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounterState ( state, { payload }: PayloadAction<number>) {
      if ( state.isReady ) return;

      state.count = payload;
      state.isReady = true;
    },
    addOne( state ) {
      state.count++;
    },
    substracOne( state ) {
      
      if( state.count === 0 ) return;

      state.count--;
    },
    resetCount( state, { payload }: PayloadAction<number> ) {

      if( payload < 0 ) payload = 0;

      state.count = payload;
    }
  }
});

export const { addOne, substracOne, resetCount, initCounterState } = counterSlice.actions;

export default counterSlice.reducer;