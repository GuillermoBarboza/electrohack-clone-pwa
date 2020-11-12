import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/actions";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: "http://localhost:8000/api/v1/users/find",
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        dispatch(logIn(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Log In to Twita</h1>
        </div>
        <div className="col-md-12">
          <form
            id="form-logIn"
            className="form-group m-auto"
            onSubmit={handleLogin}
          >
            <label for="email" className="">
              Username or Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="form-control"
              id="email"
              type="text"
            />

            <label for="password" className="">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="form-control"
              id="password"
              type="password"
            />
            <div className="d-flex justify-content-center">
              <button className="btn btn-logIn btn-lg mt-2" type="submit">
                Log In
              </button>
            </div>
            <div className="text-center">
              <a className="link-logIn" href="/register">
                Regístrate en Twita
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
