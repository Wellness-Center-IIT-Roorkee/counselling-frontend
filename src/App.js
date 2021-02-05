import React, { useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { publicRoutes, protectedRoutes } from './routes';
import { useDispatch } from 'react-redux';
import { getInfo } from './actions/userActions';
import PublicRoute from './publicRoute';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfo());
  }, []);
  const isAuth = true;
  return (
    <Router>
      <Switch>
        {publicRoutes.map((route, index) => (
          <PublicRoute
            key={index}
            strictlyPublic={route.strictlyPublic}
            layout={route.layout}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        {protectedRoutes.map((route, index) => (
          <ProtectedRoute
            key={index}
            isAuthenticated={isAuth}
            layout={route.layout}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
