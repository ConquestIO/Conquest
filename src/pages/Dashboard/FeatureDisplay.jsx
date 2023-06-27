import React from "react";
// import { setFeatureName, setFeatureDescription } from '../../store/appSlice'
import { useAppSelector } from "../../store/hooks";

const FeatureDisplay = () => {
  
  const featureName = useAppSelector((state) => state.app.featureName)
  const description = useAppSelector((state) => state.app.description)
    
    return (
        <div className="max-w-md mx-auto bg-gray-200 p-4 rounded-lg ml-80">
        <div>
          <div className="flex items-center justify-between">
            <span className="font-bold">Feature Name:</span>
            <span className="ml-2">{featureName}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="font-bold">Description:</span>
            <span className="ml-2">{description}</span>
          </div>
        </div>
      </div>
    );
  };

export default FeatureDisplay;