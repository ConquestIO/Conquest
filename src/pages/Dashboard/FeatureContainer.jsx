import Button from '../../components/Button';
import DashboardModal from '../../components/DashboardModal';
import FeatureForm from './FeatureForm';
import { useAppDispatch, useAppSelector } from '../..//store/hooks';
import { setFeatureModal } from '../../store/appSlice';

const FeatureContainer = () => {
    const dispatch = useAppDispatch();
    const openFeatureModal = useAppSelector((state) => state.app.featureModal);
  
  
    return (
      <div className = 'm-auto mr-4 justify-center mt-4 mb-8'>
        <ul className='flex gap-3'>
          <li>
            <Button 
              className='mx-0 drop-shadow-sm rounded-md bg-sky-600 w-40 h-10 text-white'
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