import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type ReduxState = {
  [key: string]: any;
};

const initialState: ReduxState = {};

const reduxSlice = createSlice({
  name: 'reduxState',
  initialState,
  reducers: {
    setReduxState: (state, action: PayloadAction<{ key: string; value: any }>) => {
      if (state[action.payload.key] !== action.payload.value) {
        state[action.payload.key] = action.payload.value;
      }
    },
    resetReduxState: (state, action: PayloadAction<{ key: string; initialValue: any }>) => {
      state[action.payload.key] = action.payload.initialValue;
    },
  },
});

export const { setReduxState, resetReduxState } = reduxSlice.actions;
export default reduxSlice.reducer;