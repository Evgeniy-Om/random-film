import { configureStore } from '@reduxjs/toolkit'
import toolkitSlice from "./toolkitSlice"

export const store = configureStore({
  reducer: {
    toolkit: toolkitSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store