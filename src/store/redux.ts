import { configureStore } from '@reduxjs/toolkit';
import fazmaReducer from './fazmofobia_slice.ts';
const store = configureStore({
  reducer: {
    fazma: fazmaReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
