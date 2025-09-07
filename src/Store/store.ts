import {configureStore} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import reduxSlice from './reduxSlice';

const store = configureStore({
  // middleware: getDefaultMiddleware({
  //   immutableCheck: false,
  // }),
  reducer: {
    reduxSlice:reduxSlice,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>()


export default store;






