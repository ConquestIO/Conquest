import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userID: 'none',
  features: [
    {
      id: 1,
      featureName: 'Login',
      description: 'Login component',
      createdOn: '2023',
      userId: 1,
    },
    {
      id: 2,
      featureName: 'Create User',
      description: 'User component',
      createdOn: '2023',
      userId: 1,
    },
  ],
  featureID: 'none',
  featureName: 'No Test Selected',
  description: "Where are the tests?",
  tests: {},
  loggedIn: false,
  loginModal: closed,
  signupModal: closed,
  featureModal: closed,
  testModal: closed,
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
} = appSlice.actions;

export default appSlice.reducer;
