import React, { useState } from 'react';
import Button from '../../components/Button';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setTestModal, setTests } from '../../store/appSlice';
import Select from 'react-select';

const TestForm = () => {
  const dispatch = useAppDispatch();
  const [testName, setTestName] = useState('none');
  const [status, setStatus] = useState('none');
  const [category, setCategory] = useState('none');
  const featureID = useAppSelector((state) => state.app.featureID.id)

  const tests = [
    { value: 'unitTest', label: 'Unit Test' },
    { value: 'integrationTest', label: 'Integration Test' },
    { value: 'functionalTest', label: 'Functional Test' },
    { value: 'e2eTest', label: 'E2E Test' },
  ];

  const statuses = [
    { value: 'notStarted', label: 'Not Started' },
    { value: 'inProgress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setTestModal(closed));
      const res = await fetch('api/tests', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON',
        },
        body: JSON.stringify({
          testName,
          status,
          category,
          featureID
        }),
      });
      if (res.status === 201) {
        await res.json();
        //need to update redux state to store new feature list when done
        dispatch(setTests(res));
      } else {
        alert('Failed to add new test');
      }
    } catch (err) {
      console.log('Create new test: ERROR: ', err);
    }
  };

  return (
    <>
      <p className='mb-4 block text-center text-xl font-bold text-gray-700'>
        Add A Feature
      </p>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='mb-2 block text-sm font-bold text-gray-700'></label>
          <input
            className='focus:shadow-outline w-full appearance-none rounded border bg-white px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            type='text'
            placeholder='Test Name'
            required
            onChange={(e) => setTestName(e.target.value)}
            spellCheck='false'
          />
        </div>
        <div className='mb-6 bg-blue'>
          <Select
            options={statuses}
            onChange={(e) => setStatus(e.value)}
            placeholder='Select A Status'
          />
        </div>
        <div className='mb-6'>
          <Select
            options={tests}
            onChange={(e) => setCategory(e.value)}
            placeholder='Select A Category'
          />
        </div>
        <div className='flex items-center justify-center'>
          <Button type='submit' variant='secondary' size='lg'>
            Save
          </Button>
        </div>
      </form>
    </>
  );
};

export default TestForm;
