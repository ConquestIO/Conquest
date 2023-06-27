import React from "react";
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import TestForm from "./TestForm";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setTestModal } from '../../store/appSlice';

const TestButton = () => {
    const dispatch = useAppDispatch();
    const openTestModal = useAppSelector((state) => state.app.testModal);
    
    const handleButtonClick = () => {
        dispatch(setTestModal(true));
      };
    
      const handleCloseModal = () => {
        dispatch(setTestModal(false));
      };
    
      return (
        <div className='max-w-md mx-auto ml-auto mt-4 flex justify-end'>
          <Button
            className='ml-auto'
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
      );
    };

export default TestButton;