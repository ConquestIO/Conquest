import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userID: 'none',
  features: [],
  featureID: 'none',
  featureName: 'No Test Selected',
  description: "Where are the tests?",
  tests: [],
  loggedIn: false,
  loginModal: closed,
  signupModal: closed,
  featureModal: closed,
  testModal: closed,
  normalizedTests: [[],[],[],[]]
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setUserID: (state, action) => {
      state.user = action.payload;
    },
    setFeatures: (state, action) => {
      state.features = action.payload;
    },
    setFeatureID: (state, action) => {
      state.featureID = action.payload;
    },
    setFeatureName: (state, action) => {
      state.featureName = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    setTests: (state, action) => {
      state.tests = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    setLoginModal: (state, action) => {
      state.loginModal = action.payload;
    },
    setSignupModal: (state, action) => {
      state.signupModal = action.payload;
    },
    setFeatureModal: (state, action) => {
      state.featureModal = action.payload;
    },
    setTestModal: (state, action) => {
      state.testModal = action.payload;
    },
    setNormalizedTests: (state, action) => {
      state.normalizedTests = action.payload;
    },
  },
});

export const {
  setUserID,
  setFeatures,
  setFeatureID,
  setFeatureName,
  setDescription,
  setTests,
  setLoggedIn,
  setLoginModal,
  setSignupModal,
  setFeatureModal,
  setTestModal,
  setNormalizedTests,
} = appSlice.actions;

export default appSlice.reducer;
