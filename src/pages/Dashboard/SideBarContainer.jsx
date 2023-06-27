import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setLoggedIn, setFeatureID, setTests, updateFeatures } from '../../store/appSlice';

export default function SideBarContainer() {
    const dispatch = useAppDispatch();
    const loggedIn = useAppSelector((state) => state.app.loggedIn)
    const features = useAppSelector((state) => state.app.features)
    const userID = useAppSelector((state) => state.app.userID)
    const featureID = useAppSelector((state) => state.app.featureID)
    const navigate = useNavigate();


    let sidebar = [
        //add feature button (cant just update state because it will delete so we have to copy state and then add)
        <button
        onClick = {async () => {
            //will have to open a popup modal that then takes info and will have logic to update state with special reducer
            
        }}
        >
            Add Feature
        </button>,
        //Render a button for each created feature (may have to switch to map)
        features.forEach((el) => {
            <button
            onClick = {async () => {
                //update state to be the current element
                dispatch(setFeatureID(el));
                //fetch all tests associated with the feature for the given user
                await fetch(`/api/${userID}/${featureID.id}/tests`)
                //this will update tests in state to be the response which can then be rendered by TestDisplay
                .then((res) => dispatch(setTests(res)))
            }}
            >
            ${el.featureName}
            </button>
        }),
        //logout button for sidebar. Clear userId, set logged in to false and reroute to landing page
        <button
        onClick={async () => {
                dispatch(userID('none'))
                dispatch(setLoggedIn(false));
                navigate('/');
        }}
        >
            Logout
        </button>,
    ]

    return (
        <Nav>
            {sidebar}
        </Nav>
    );
}