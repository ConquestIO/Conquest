import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setFeature } from '../../store/appSlice';

export default function FeatureModal() {
    const dispatch = useAppDispatch();
    const features = useAppSelector((state) => state.app.features);

    
    form = [
        <input>
        
        </input>,
        <button
        //need to figre out how to take all data from form and send it with post request
            onClick = {async () => {
                //fetch all tests associated with the feature for the given user
                await fetch(`/api/${userID}/features`)
                //once data base is updated with new feature, update features in state so page rerenders
                .then((res) => dispatch(setFeature(res)))
            }}
        >
        Add Feature
        </button>
    ]

    return (
        <div>
        {form}
        </div>
    )
};