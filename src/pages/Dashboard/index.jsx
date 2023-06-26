import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setLoggedIn, setFeatureID } from '../../store/appSlice';

export default function DashBoardContainer() {
    const dispatch = useAppDispatch();
    const loggedIn = useAppSelector((state) => state.app.loggedIn)
    const features = useAppSelector((state) => state.app.features)
    const userID = useAppSelector((state) => state.app.userID)
}

sidebar = [
    //might have to make Map
  features.forEach((el) => {
    //update state to be the current element
    dispatch(setFeatureID(el))
        <button>
        onClick={async () => {
            await fetch(`/api/${userID}/${featureID}/tests`)
        }}
    </button>,
    }),
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