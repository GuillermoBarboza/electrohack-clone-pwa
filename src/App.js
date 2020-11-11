import "./App.css";
import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute restricted={false} component={Home} path="/" exact />
        <PublicRoute restricted={false} component={Cart} path="/cart" exact />
        <PublicRoute restricted={false} component={Login} path="/login" />
        <PublicRoute
          restricted={false}
          component={Register}
          path="/register"
          exact
        />
      </Switch>
    </Router>
  );
}

export default App;
