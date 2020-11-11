import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./NavBar";
import isLogin from "../utils";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const token = true;
  return (
    <>
      <NavBar />
      <Route
        {...rest}
        render={(props) =>
          isLogin(token) && restricted ? (
            <Redirect to="/" />
          ) : (
            <Component {...props} />
          )
        }
      />
    </>
  );
};

export default PublicRoute;
