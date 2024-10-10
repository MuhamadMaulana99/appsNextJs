import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    open: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.open = !state.open; // Toggle status open sidebar
    },
    closeSidebar: (state) => {
      state.open = false; // Menutup sidebar
    },
    openSidebar: (state) => {
      state.open = true; // Membuka sidebar
    },
  },
});

// Ekspor actions dan reducer
export const { toggleSidebar, closeSidebar, openSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
