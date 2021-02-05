import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/userActions';
import Loader from '../../components/common/loader';

const AfterLogin = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.users.isLoggedIn);
  const isLoginPending = useSelector(state => state.users.isLoginPending);
  const firstUpdate = useRef(true);

  useEffect(() => {
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
  }, []);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (!isLoginPending) {
      if (isLoggedIn) {
        history.replace('/');
      } else {
        history.replace('/login');
      }
    }
  }, [isLoginPending]);

  return <Loader />;
};

export default AfterLogin;
