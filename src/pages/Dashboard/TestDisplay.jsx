import React from 'react';
import TestChart from './TestChart';
import TestButton from './TestButton';
import FeatureDisplay from './FeatureDisplay';

export default function TestDisplay() {
  return (
    <div className='flex flex-col p-6 gap-12 items-center w-full border-l'>
      <div className='flex justify-between w-full items-center'>
        <FeatureDisplay />
        <TestButton />
      </div>
      <TestChart />
    </div>
  );
};
