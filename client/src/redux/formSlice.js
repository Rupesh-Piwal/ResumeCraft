// formSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  formData: {
    personalDetails: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
    },
    education: [], // Store education entries as an array
    experience: [], // Store experience entries as an array
    projects: [], // Store project entries as an array
    skills: [], // Store skills as an array
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      const { formName, data } = action.payload;
      // Check if formName is education, experience, or projects and data is an array
      if (
        ["education", "experience", "projects"].includes(formName) &&
        Array.isArray(data)
      ) {
        state.formData[formName] = data;
      } else {
        state.formData[formName] = data;
      }
    },
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
  },
});

export const { setFormData, nextStep, prevStep } = formSlice.actions;

export default formSlice.reducer;
