import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./Nav";
import { isLogin } from "../utils";
import Footer from "./Footer";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const token = useSelector((state) => state.user.token);
  /* {token === undefined && (
	<div className="alert alert-success">
	  <h4 className="font-weight-bold">
		Please go to "About this project" to get the full experience
	  </h4>
	</div>
  )} */
  return (
    <div className="bg-color custom-height">
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
      <Footer />
    </div>
  );
};

export default PublicRoute;
