import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import routes from './routes';
import AfterLogin from './views/afterLogin/afterLogin';

function App() {
  const isAuth = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/after_login" component={AfterLogin} />
        {routes.map((route, index) => (
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
