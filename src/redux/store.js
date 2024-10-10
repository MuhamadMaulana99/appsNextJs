import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebarSlice'; // Impor slice yang akan dibuat

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer, // Tambahkan reducer yang diperlukan
  },
});
