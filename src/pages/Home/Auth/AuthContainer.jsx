import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setLoginModal, setSignupModal } from "../../../store/appSlice";

const AuthContainer = () => {
  const dispatch = useAppDispatch();
  const openLoginModal = useAppSelector((state) => state.app.loginModal);
  const openSignupModal = useAppSelector((state) => state.app.signupModal);

  return (
    <div>
      <ul className="flex gap-3">
        <li>
          <Button
            className="mx-0 drop-shadow-sm h-8"
            onClick={() => dispatch(setLoginModal(true))}
          >
            Sign In
          </Button>
        </li>
        <li className="mr-3">
          <Button
            variant="secondary"
            className="mx-0 bg-secondary drop-shadow-sm h-8"
            onClick={() => dispatch(setSignupModal(true))}
          >
            Sign Up
          </Button>
        </li>
      </ul>
      <Modal
        open={openLoginModal}
        onClose={() => {
          dispatch(setLoginModal(false));
        }}
      >
        <LoginForm />
      </Modal>
      <Modal
        open={openSignupModal}
        onClose={() => {
          dispatch(setSignupModal(false));
        }}
      >
        <SignupForm />
      </Modal>
    </div>
  );
};

export default AuthContainer;
