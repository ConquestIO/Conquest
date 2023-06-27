import Button from '../../components/Button';
import DashboardModal from '../../components/DashboardModal';
import FeatureForm from './FeatureForm';
import { useAppDispatch, useAppSelector } from '../..//store/hooks';
import { setFeatureModal } from '../../store/appSlice';

const FeatureContainer = () => {
    const dispatch = useAppDispatch();
    const openFeatureModal = useAppSelector((state) => state.app.featureModal);
  
  
    return (
      <div>
        <ul className='flex gap-3'>
          <li>
            <Button
              className='mx-0 ml-5 drop-shadow-sm'
              onClick={() => dispatch(setFeatureModal(true))}
            >
              Add Feature
            </Button>
          </li>
        </ul>
        <DashboardModal
          open={openFeatureModal}
          onClose={() => {
            dispatch(setFeatureModal(false))
          }}
        >
          <FeatureForm/>
        </DashboardModal>
      </div>
    );
  };
  
  export default FeatureContainer;