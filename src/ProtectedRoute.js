import React, {
  Suspense,
  useRef,
  useLayoutEffect,
  useState,
  useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Loader from './components/common/loader';

const NewComponent = ({ component: Component, ...restProps }) => {
  return <Component {...restProps} />;
};

const ProtectedRoute = ({ layout: Layout, component: Component, ...rest }) => {
  const [authenticationPending, setAuthenticationPending] = useState(true);
  const firstUpdate = useRef(true);
  const isLoggedIn = useSelector(state => state.users.isLoggedIn);
  const getUserDataPending = useSelector(
    state => state.users.getUserDataPending
  );

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (!getUserDataPending) {
      setAuthenticationPending(false);
    }
  }, [getUserDataPending]);

  useEffect(() => {
    if (isLoggedIn) {
      setAuthenticationPending(false);
    }
  }, [isLoggedIn]);

  return (
    <Route
      path={rest.path}
      exact={rest.exact}
      component={props => {
        return authenticationPending === true ? (
          <Loader />
        ) : isLoggedIn ? (
          <Layout
            {...props}
            noNavbar={rest.noNavbar}
            navbar={rest.navbar}
            navItems={rest.navItems}
            homeIcon={rest.homeIcon}
          >
            <Suspense fallback={<div className="text-primary" />}>
              <NewComponent component={Component} {...props} />
            </Suspense>
          </Layout>
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default ProtectedRoute;
