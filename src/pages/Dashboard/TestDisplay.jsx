import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setFeatures, setFeatureModal, setTestModal } from '../../store/appSlice';

export default function TestDisplay(){
    const dispatch = useAppDispatch();
    
    const features = useAppSelector((state) => state.app.features)
    const userID = useAppSelector((state) => state.app.userID)
    const featureID = useAppSelector((state) => state.app.featureID)
    const navigate = useNavigate();


    return (
        <div>
            
        </div>
    );

}