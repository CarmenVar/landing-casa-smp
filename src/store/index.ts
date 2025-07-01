import { configureStore } from '@reduxjs/toolkit';
import propertySlice from './propertySlice';

export const store = configureStore({
  reducer: {
    property: propertySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 