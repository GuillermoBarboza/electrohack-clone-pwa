import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./Nav";
import { isLogin } from "../utils";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const token = useSelector((state) => state.user.token);
  return (
    <div className="bg-color">
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
    </div>
  );
};

export default PublicRoute;
