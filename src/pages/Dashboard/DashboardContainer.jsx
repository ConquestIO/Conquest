import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setFeatures } from '../../store/appSlice';
import TestDisplay from './TestDisplay';
import SideBarContainer from './SideBarContainer';
import FeatureDisplay from './FeatureDisplay';
import TestButton from './TestButton';

export default function DashboardContainer(){
    const dispatch = useAppDispatch();
    const userID = useAppSelector((state) => state.app.userID)

    //on render, fetch all features associated with user and update state
    useEffect(() => {
        (async () => {
            await fetch(`/api/${userID}/features`)
            .then((res) => dispatch(setFeatures(res)))
        })
    })

    return (
        <div>
            <SideBarContainer />
            <FeatureDisplay /> 
            <TestButton />
            <TestDisplay />
        </div>
    );
}