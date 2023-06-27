import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthForm from './AuthForm';
import { v4 as uuidv4 } from 'uuid';
import { setLoggedIn, setUserID } from '../../../store/appSlice';
import { useAppDispatch } from '../../../store/hooks';

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const uniqueId = uuidv4();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      if (res.status === 204) {
        const data = await res.json();
        dispatch(setLoggedIn(true));
        dispatch(setUserID(data.userId));
        navigate('/dashboard');
      } else {
        alert('Log in unsuccessful. Please check your login information');
      }
    } catch (err) {
      console.log('Log in: ERROR: ', err);
    }
  };

  return (
    <AuthForm
      usernameInputId={`un${uniqueId}`}
      passwordInputId={`pwd${uniqueId}`}
      text={'Sign In'}
      handleSubmit={handleSubmit}
      setUsername={setUsername}
      setPassword={setPassword}
    />
  );
};

export default Login;
