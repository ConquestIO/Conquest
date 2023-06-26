import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userID: 'none',
    features: [],
    featureID: 'none',
    tests: {},
    loggedIn: false,
    loginModal: closed,
    signupModal: closed,
    featureModal: closed,
    testModal: closed
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setUserID: (state, action) => {
            state.user = action.payload
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

export const { setUserID, setFeatures, setFeatureID, setTests, setLoggedIn, setLoginModal, setSignupModal, setFeatureModal, setTestModal }
 = appSlice.actions;

export default appSlice.reducer

