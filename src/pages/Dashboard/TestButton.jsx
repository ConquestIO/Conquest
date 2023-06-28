import React from "react";
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import TestForm from "./TestForm";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setTestModal } from '../../store/appSlice';

const TestButton = () => {
    const dispatch = useAppDispatch();
    const openTestModal = useAppSelector((state) => state.app.testModal);
    const featureID = useAppSelector((state) => state.app.featureID )
    
    const handleButtonClick = () => {
        dispatch(setTestModal(true));
      };
    
      const handleCloseModal = () => {
        dispatch(setTestModal(false));
      };

      let testButton;

      if (typeof(featureID) === 'string'){
         testButton = [<div></div>]
      } else {
        testButton = [
          <div className='ml-auto h-[60px] flex relative w-40'>
          <Button
            className=' mx-auto bg-sky-600 w-40 text-white text-base rounded-md'
            onClick={handleButtonClick}
            variant='secondary' 
          >
            Add Test
          </Button>
          <Modal
            open={openTestModal}
            onClose={handleCloseModal}
          >
            <TestForm />
          </Modal>
        </div>
        ]
      }
    
      return (
       <div>
        {testButton}
       </div>
      );
    };

export default TestButton;