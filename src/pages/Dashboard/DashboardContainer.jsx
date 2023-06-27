import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setFeature, } from '../../store/appSlice';
import TestDisplay from './TestDisplay';
import SideBarContainer from './SideBarContainer';

export default function App(){
    const dispatch = useAppDispatch();
    const userID = useAppSelector((state) => state.app.userID)

    //on render, fetch all features associated with user and update state
    useEffect(() => {
        (async () => {
            await fetch(`/api/${userID}/features`)
            .then((res) => dispatch(setFeature(res)))
        })
    })

    return (
        <div>
            <SideBarContainer />
            <TestDisplay />
        </div>
    );
}