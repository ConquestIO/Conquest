import Button from '../../../components/Button';
import Modal from '../../../components/Modal';
import LoginForm from './LoginForm';
import FeatureForm from './FeatureForm';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setLoginModal, setSignupModal } from '../../../store/appSlice';

const FeatureContainer = () => {
    const dispatch = useAppDispatch();
    const openFeatureModal = useAppSelector((state) => state.app.featureModal);
  
  
    return (
      <div>
        <ul className='flex gap-3'>
          <li>
            <Button
              className='mx-0 drop-shadow-sm'
              onClick={() => dispatch(setLoginModal(true))}
            >
              Add Feature
            </Button>
          </li>
        </ul>
        <Modal
          open={openFeatureModal}
          onClose={() => {
            dispatch(setLoginModal(false))
          }}
        >
          <FeatureForm/>
        </Modal>
      </div>
    );
  };
  
  export default FeatureContainer;