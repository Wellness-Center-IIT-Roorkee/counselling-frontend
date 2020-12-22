import React, { Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';

const NewComponent = ({ component: Component, ...restProps }) => {
  return <Component {...restProps} />;
};

const ProtectedRoute = ({
  layout: Layout,
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      path={rest.path}
      exact={rest.exact}
      component={props => {
        return isAuthenticated === true ? (
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
