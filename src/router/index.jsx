import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import NotFound from '../pages/error/NotFound';
import Login from '../pages/auth/Login';
import User from '../pages/user/User';

const Router = () => {
  const userInfo = useSelector((state) => state.auth.userInfo);

  if (userInfo.token) {
    return (
      <div className="page-wrapper">
        <Routes>
            <Route path="/" element={ <User /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="*" element={ <NotFound/> } />
    </Routes>
  );
};

export default Router;
