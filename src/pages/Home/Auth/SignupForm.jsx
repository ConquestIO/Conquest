import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';
import { v4 as uuidv4 } from 'uuid';
import { setLoggedIn, setUserID } from '../../../store/appSlice';
import { useAppDispatch } from '../../../store/hooks';

const Signup = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const uniqueId = uuidv4();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.length < 3) {
      alert('Username length must be at least 3!');
      return;
    }
    if (password.length < 6) {
      alert('Password length must be at least 6!');
      return;
    }
    try {
      const res = await fetch('/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      if (res.status === 201) {
        const data = await res.json();
        dispatch(setLoggedIn(true));
        dispatch(setUserID(data.userId));
        navigate('/dashboard');
      } else {
        alert('Registration unsuccessful. Please retry.');
      }
    } catch (err) {
      console.log('Sign up ERROR: ', err);
    }
  };

  return (
    <AuthForm
      usernameInputId={`un${uniqueId}`}
      passwordInputId={`pwd${uniqueId}`}
      text={'Sign Up'}
      handleSubmit={handleSubmit}
      setUsername={setUsername}
      setPassword={setPassword}
    />
  );
};

export default Signup;
