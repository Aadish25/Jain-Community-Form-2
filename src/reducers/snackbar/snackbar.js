// snackbar.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  message: '',
  severity: 'info',
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    handleOpen: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    handleClose: (state) => {
      state.open = false;
    },
  },
});

export const { handleOpen, handleClose } = snackbarSlice.actions;
export default snackbarSlice.reducer;
