import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setLoggedIn, setFeatureID, setFeatures } from '../../store/appSlice';

export default function DashBoardContainer() {
    const dispatch = useAppDispatch();
    const loggedIn = useAppSelector((state) => state.app.loggedIn)
    const features = useAppSelector((state) => state.app.features)
    const userID = useAppSelector((state) => state.app.userID)
    const featureID = useAppSelector((state) => state.app.featureID)
    const navigate = useNavigate();
}

sidebar = [
    //Render a button for each created feature (may have to switch to map)
  features.forEach((el) => {
        <button
        onClick={async () => {
            //update state to be the current element
            dispatch(setFeatureID(el));
            //fetch all tests associated with the feature for the given user
            await fetch(`/api/${userID}/${featureID.id}/tests`)
        }}
        >
        ${el.featureName}
    </button>,
  }),
    //logout button for sidebar
     <button
       onClick={async () => {
            await fetch('/api/user/logout');
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
)