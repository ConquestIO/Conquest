import React from "react";
// import { setFeatureName, setFeatureDescription } from '../../store/appSlice'
// import { useAppDispatch } from '../../store/hooks'

const FeatureDisplay = () => {
    // const featureName = useAppDispatch();
    // const featureDescription = useAppDispatch();
    
    return (
        <div className="max-w-md mx-auto bg-gray-200 p-4 rounded-lg ml-80">
        <div>
          <div className="flex items-center justify-between">
            <span className="font-bold">Feature Name:</span>
            <span className="ml-2">{/* text here */}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="font-bold">Description:</span>
            <span className="ml-2">{/* text here */}</span>
          </div>
        </div>
      </div>
    );
  };

export default FeatureDisplay;