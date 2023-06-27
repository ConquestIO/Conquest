import React from 'react';
import Button from '../../components/Button'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setFeatures } from '../../store/appSlice';

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
              <div className='mb-6'>
                <label
                  className='mb-2 block text-sm font-bold text-gray-700'
                  htmlFor={passwordInputId}
                >
                  Status
                </label>
                <input
                  className='focus:shadow-outline mb-3 w-full appearance-none rounded border bg-white px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                  id={passwordInputId}
                  type='password'
                  placeholder='******************'
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='mb-6'>
                <label
                  className='mb-2 block text-sm font-bold text-gray-700'
                  htmlFor={passwordInputId}
                >
                  Category
                </label>
                <input
                  className='focus:shadow-outline mb-3 w-full appearance-none rounded border bg-white px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                  id={passwordInputId}
                  type='password'
                  placeholder='******************'
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='flex items-center justify-between'>
                <Button type='submit' variant='secondary' size='lg'>
                  Save
                </Button>
              </div>
            </form>
          </>
        );
      };

export default FeatureForm