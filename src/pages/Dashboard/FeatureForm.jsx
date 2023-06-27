import React from 'react';
import Button from '../../components/Button'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setFeatures } from '../../store/appSlice';
import Dropdown from 'react-bootstrap/Dropdown'
// export default function FeatureForm() {
//     const dispatch = useAppDispatch();
//     const features = useAppSelector((state) => state.app.features);

    
    // form = [
    //     <input>
        
    //     </input>,
    //     <button
    //     //need to figre out how to take all data from form and send it with post request
    //         onClick = {async () => {
    //             //fetch all tests associated with the feature for the given user
    //             await fetch(`/api/${userID}/features`)
    //             //once data base is updated with new feature, update features in state so page rerenders
    //             .then((res) => dispatch(setFeatures(res)))
    //         }}
    //     >
    //     Add Feature
    //     </button>
    // ]

    const FeatureForm = ({
        setFeature,
        setPassword,
        featureInputId,
        passwordInputId,
        text,
        handleSubmit,
        value,
      }) => {
      
        const tests = [
            'Unit Tests', 'Integration Tests', 'Functional Tests', 'E2E Tests'
        ];
        const defaultTest = tests[0];

        const statuses = [
            'Not Started', 'In Progress', 'Completed'
        ];
        const defaultStatus = statuses[0];

        return (
          <>
            <p className='mb-4 block text-center text-xl font-bold text-gray-700'>
              Add A Feature
            </p>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label
                  className='mb-2 block text-sm font-bold text-gray-700'
                  htmlFor={featureInputId}
                >
                  Feature Name
                </label>
                <input
                  className='focus:shadow-outline w-full appearance-none rounded border bg-white px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                  id={featureInputId}
                  type='text'
                  placeholder='Feature'
                  value={value}
                  required
                  onChange={(e) => setFeature(e.target.value)}
                  spellCheck='false'
                />
              </div>
              <div className='mb-6 bg-blue'>
                <Dropdown className= 'bg-black px-3 py-2'>
                    <Dropdown.Toggle variant='success' id='dropdown-basic'>
                        Select A Status
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href='#/action1' className=' focus:shadow-outline w-full appearance-none rounded border bg-sky-700 px-3 py-2 flex flex-col' >Not Started</Dropdown.Item>
                        <Dropdown.Item href='#/action2' className=' focus:shadow-outline w-full appearance-none rounded border bg-sky-700 px-3 py-2 flex flex-col'>In Progress</Dropdown.Item>
                        <Dropdown.Item href='#/action3' className=' focus:shadow-outline w-full appearance-none rounded border bg-sky-700 px-3 py-2 flex flex-col'>Functional Tests</Dropdown.Item>
                        <Dropdown.Item href='#/action4' className=' focus:shadow-outline w-full appearance-none rounded border bg-sky-700 px-3 py-2 flex flex-col'>E2E Tests</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className='mb-6'>
              <Dropdown className='bg-black px-3 py-2 mt-1'>
                    <Dropdown.Toggle variant='success' id='dropdown-basic'>
                        Select A Category
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href='#/action1' className=' focus:shadow-outline w-full appearance-none rounded border bg-sky-700 px-3 py-2 flex flex-col'>Unit Tests</Dropdown.Item>
                        <Dropdown.Item href='#/action2' className=' focus:shadow-outline w-full appearance-none rounded border bg-sky-700 px-3 py-2 flex flex-col'>Integration Tests</Dropdown.Item>
                        <Dropdown.Item href='#/action3' className=' focus:shadow-outline w-full appearance-none rounded border bg-sky-700 px-3 py-2 flex flex-col'>Completed</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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

export default FeatureForm