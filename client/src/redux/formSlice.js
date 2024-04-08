// formSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 1,
  formData: {
    form1: {
      name: '',
      email: '',
      password: ''
    },
    form2: {
      // Define initial state for form 2
    },
    // Define initial states for other forms
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      const { formName, data } = action.payload;
      state.formData[formName] = data;
    },
    nextStep: state => {
      state.step += 1;
    },
    prevStep: state => {
      state.step -= 1;
    },
  },
});

export const { setFormData, nextStep, prevStep } = formSlice.actions;

export default formSlice.reducer;
