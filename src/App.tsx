import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";

import Welcome from "./components/pages/welcome";
import Login from "./components/pages/login";
import Dashboard from "./components/pages/dashboard";
import RedirectLogin from "./components/pages/redirectPages/redirectLogin";
import RedirectRandom from "./components/pages/redirectPages/redirectRandom";

interface PrivateRouteProps {
  component: React.ComponentType<any>;
  path?: string | string[];
  exact?: boolean;
}

function App() {
  const isAuthenticated = () => {
    return localStorage.getItem("token") !== null;
  };

  const PrivateRoute: React.FC<PrivateRouteProps> = ({
    component: Component,
    ...rest
  }) => (
    <Route
      {...rest}
      render={(props: any) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/notlogged" />
        )
      }
    />
  );

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/notlogged" component={RedirectLogin} />
          <Route path="*" component={RedirectRandom} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
