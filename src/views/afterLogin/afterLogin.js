import { CircularProgress, Container } from '@material-ui/core';
import React from 'react';
import DefaultLayout from '../../layouts/defaultLayout';
import { Redirect, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userActions';

const AfterLogin = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.users.isLoggedIn);

  if (!isLoggedIn) {
    let code = '';
    if (location.search.length > 0) {
      let temp = location.search.match(/^\?code=(.*)&.*$/);
      if (temp.length == 2) {
        code = temp[1];
      }
    }
    if (code.length) {
      dispatch(login(code));
    }
  }
  return isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <DefaultLayout>
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <CircularProgress />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default AfterLogin;
