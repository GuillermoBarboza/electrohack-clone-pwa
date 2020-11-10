import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <PublicRoute restricted={false} component={Home} path="/" exact />
        <PrivateRoute />
      </div>
    </Router>
  );
}

export default App;
