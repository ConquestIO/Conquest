import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setLoggedIn, setFeatureID, setTests, setUserID, setFeatureName, setDescription } from '../../store/appSlice';
import FeatureContainer from './FeatureContainer';

export default function SideBarContainer() {
    const dispatch = useAppDispatch();
    const loggedIn = useAppSelector((state) => state.app.loggedIn)
    const features = useAppSelector((state) => state.app.features)
    const userID = useAppSelector((state) => state.app.userID)
    const featureID = useAppSelector((state) => state.app.featureID)
    const navigate = useNavigate();

    let sidebar = [
        //Render a button for each created feature
        ...features.map((el) => {
            return (<div className='justify-items-center' key={el.id}>
                <button className = ' bg-sky-500 text-white w-40 h-10 rounded-md mt-5'
              key={el.id}
            onClick = {async () => {
                //update state to be the current element
                dispatch(setFeatureID(el));
                //fetch all tests associated with the feature for the given user
                const res = await fetch(`/api/tests/${el.id}`)
                const data = await res.json()
                //this will update tests in state to be the response which can then be rendered by TestDisplay
                dispatch(setTests(data))
                //update feature name to current feature name
                dispatch(setFeatureName(el.feature_name))
                //update description to current feature description
                dispatch(setDescription(el.description))

            }}
            >
            {el.feature_name}
            </button>
            </div>)
        }),
        //logout button for sidebar. Clear userId, set logged in to false and reroute to landing page
        <button className= ' secondary w-40 h-10 text-white mt-16 text-base rounded-md'
        key={'button'}
        onClick={async () => {
                dispatch(setUserID('none'))
                dispatch(setLoggedIn(false));
                navigate('/');
        }}
        >
            Log Out
        </button>,
    ]
    return (
        <div className= ' bg-gray-200 p-4 rounded-lg flex-nowrap flex-row h-screen overflow-scroll'>
            <FeatureContainer />
            {sidebar}
        </div>
    );
}