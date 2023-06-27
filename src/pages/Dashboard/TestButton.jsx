import React from "react";
import Button from '../../components/Button';
import Modal from '../../components/Modal';
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
        <div className="max-w-md mx-auto ml-auto mt-4">
          <Button
            className="ml-auto"
            onClick={handleButtonClick}
            variant="secondary" // Example additional prop for Button
          >
            Add Test
          </Button>
          <Modal
            open={openTestModal}
            onClose={handleCloseModal}
            size="small" // Example additional prop for Modal
          >
            {/* Your modal content goes here */}
          </Modal>
        </div>
      );
    };

export default TestButton;