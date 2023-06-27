import React, { useState } from 'react';
import Button from '../../components/Button'
import { useAppDispatch, useAppSelector} from '../../store/hooks';
import { setFeatures, setFeatureModal, setFeatureName, setDescription } from '../../store/appSlice';
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

    const FeatureForm = () => {

      const dispatch = useAppDispatch();
      const featureName = useAppSelector((state) => state.app.featureName)
      const description = useAppSelector((state) => state.app.description)

        const handleSubmit = async (e) => {
          console.log(featureName)
          console.log(description)
          e.preventDefault();
          try {
            document.getElementById("form").reset();
            dispatch(setFeatureModal(closed))
            const res = await fetch('/api/features', {
              method: 'POST',
              headers: {
                'Content-Type': 'Application/JSON',
              },
              body: JSON.stringify({
                featureName,
                description
              }),
            });
            if (res.status === 204) {
              await res.json()
              //need to update redux state to store new feature list when done
              .then((res) => dispatch(setFeatures(res)))
              
            } else {
              alert('Failed to add new feature');
            }
          } catch (err) {
            console.log('Log in: ERROR: ', err);
          }
        };

        return (
          <>
            <p className='mb-4 block text-center text-xl font-bold text-gray-700'>
              Add A Feature
            </p>
            <form id='form' onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label
                  className='mb-2 block text-sm font-bold text-gray-700'
                >
                </label>
                <input
                  className='focus:shadow-outline w-full appearance-none rounded border bg-white px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                  type='text'
                  placeholder='Feature Name'
                  required
                  onChange={(e) => dispatch(setFeatureName((e.target.value)))}
                  spellCheck='false'
                />
              </div>
              <div className='mb-6 bg-blue'>
              <input
                  className=' h-20 focus:shadow-outline w-full appearance-none rounded border bg-white px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                  type='text'
                  placeholder='Description'
                  required
                  onChange={(e) => dispatch(setDescription((e.target.value)))}
                  spellCheck='false'
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

export default FeatureForm