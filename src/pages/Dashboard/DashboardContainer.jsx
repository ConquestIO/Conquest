import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setFeatures } from '../../store/appSlice';
import TestDisplay from './TestDisplay';
import SideBarContainer from './SideBarContainer';

export default function DashboardContainer(){
    const dispatch = useAppDispatch();
    const userID = useAppSelector((state) => state.app.userID)

    //on render, fetch all features associated with user and update state
    useEffect( () => {
      const getFeatures = async () => {
        const res = await fetch(`/api/features`)
        const data = await res.json();
        dispatch(setFeatures(data))}
      getFeatures();
    }, [])

    return (
        <div className='flex w-full h-screen'>
            <SideBarContainer />
            <TestDisplay />
        </div>
    );
}