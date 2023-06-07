import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login, updateUserInfo } from '../../stores/auth';
import {
  checkEmail,
  checkPassword,
} from '../../utils/Validate';
import Images from '../../assets';

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    if (email && pwd) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [email, pwd]);

  const handleSubmit = async () => {
    if (!checkEmail(email)) {
      alert('Please enter a valid email');
      return;
    }

    if (!checkPassword(pwd)) {
      alert('Please enter a valid password (8-32 bits, including numbers, letters, and special characters)');
      return;
    }

    const res = await dispatch(login({
      email: email,
      pwd: pwd
    }));

    if (res.payload) {
      dispatch(updateUserInfo(res.payload.data));
      alert('Login successful!');
    }
  };

  return (
    <div className="page-login">
      <div>
        <img
          className="logo"
          src={Images.logo}
        />
      </div>
      <div>
        <input
          className="login-input"
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>
      <button
        className="login-submit"
        disabled={submitDisabled}
        onClick={() => handleSubmit()}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
