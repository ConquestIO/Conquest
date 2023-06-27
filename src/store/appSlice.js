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
  tests: [
    {
      id: 1,
      testName: 'Unit Test 1',
      description: 'testing the thing',
      status: 'complete',
      category: 'unit',
      featureId: 1,
      createdOn: '2023',
    },
    {
      id: 2,
      testName: 'Functional Test 1',
      description: 'testing the thing',
      status: 'complete',
      category: 'functional',
      featureId: 1,
      createdOn: '2023',
    },
    {
      id: 3,
      testName: 'E2E Test 1',
      description: 'testing the thing',
      status: 'complete',
      category: 'e2e',
      featureId: 1,
      createdOn: '2023',
    },
    {
      id: 4,
      testName: 'Unit Test 2',
      description: 'testing the thing',
      status: 'complete',
      category: 'unit',
      featureId: 1,
      createdOn: '2023',
    },
  ],
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
  setTests,
  setLoggedIn,
  setLoginModal,
  setSignupModal,
  setFeatureModal,
  setTestModal,
} = appSlice.actions;

export default appSlice.reducer;
