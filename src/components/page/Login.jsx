import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { getUser } from "../../redux/actions";
import axios from "axios";
import globalUrl from "../../utils/url";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const formValidation = () => {
    const passwordErr = {};
    const emailErr = {};
    let isValid = true;

    if (password === "") {
      passwordErr.passwordEmpty = "this is a required field";
      isValid = false;
    }

    if (password.trim().length < 4) {
      passwordErr.passwordShort = "password should have at least 4 characters";
      isValid = false;
    }

    if (password.trim().length > 10) {
      passwordErr.passwordLong = "password should have less than 10 characters";
      isValid = false;
    }

    if (email === "") {
      emailErr.emailEmpty = "this is a required field";
      isValid = false;
    }

    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(mailformat)) {
      emailErr.passwordFormat = "email should be a valid email address";
      isValid = false;
    }

    setPasswordErr(passwordErr);
    setEmailErr(emailErr);
    return isValid;
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    isValid &&
      axios({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        url: `${globalUrl}/api/v1/users/find`,
        data: {
          email: email,
          password: password,
        },
      })
        .then((res) => {
          dispatch(getUser(res.data));
          history.goBack();
        })
        .catch((err) => {
          console.log(err);
        });
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <div className="login-avatar">
          <i class="fas fa-user-circle"></i>
        </div>
        <h4 className="text-center">Log In</h4>
        <form
          id="form-logIn"
          className="form-group m-auto"
          onSubmit={handleLogin}
        >
          <label htmlFor="email">Username or Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="form-control mb-3"
            id="email"
            type="text"
          />
          {Object.keys(emailErr).map((key) => {
            return <div className="alert-danger">{emailErr[key]}</div>;
          })}
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="form-control"
            id="password"
            type="password"
          />
          {Object.keys(passwordErr).map((key) => {
            return <div className="alert-danger">{passwordErr[key]}</div>;
          })}
          <button
            className="btn btn-logIn btn-block custom-shadow"
            type="submit"
          >
            Log In
          </button>
          <div className="d-flex justify-content-between">
            <p>
              <small>Forgot password?</small>
            </p>
            <p className="">
              <Link className="link-logIn" to="/register">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
