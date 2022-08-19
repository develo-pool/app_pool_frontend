import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Alert {
  type: 'Complete' | 'Error' | string;
  text: string;
}

interface AlertState {
  isVisible: boolean;
  alert: Alert;
}

const initialState: AlertState = {
  isVisible: true,
  alert: {
    type: 'Complete',
    text: 'Safe Area View Test Alert',
  },
};
// const initialState: AlertState = {
//   isVisible: false,
//   alert: {
//     type: '',
//     text: '',
//   },
// };

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    createAlert(state, action: PayloadAction<Alert>) {
      state.isVisible = true;
      state.alert = action.payload;
    },
    deleteAlert(state) {
      state.isVisible = false;
    },
  },
});

export default alertSlice.reducer;
export const {createAlert, deleteAlert} = alertSlice.actions;
