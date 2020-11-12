import "./App.css";
import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/page/Home";
import Category from "./components/page/Category";
import Cart from "./components/page/Cart";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/page/Login";
import Register from "./components/page/Register";

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute restricted={false} component={Home} path="/" exact />
        <PublicRoute
          restricted={false}
          component={Home}
          path="/categories/:category"
          exact
        />
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
