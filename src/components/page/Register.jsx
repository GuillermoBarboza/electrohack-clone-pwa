import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: "http://localhost:8000/api/v1/users/create",
      data: {
        name: name,
        lastname: lastname,
        telephone: telephone,
        password: password,
        email: email,
        address: address,
      },
    })
      .then((res) => {
        dispatch(createUser(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Sign Up on Twita</h1>
        </div>
        <div className="col-md-12">
          <form
            id="form-signUp"
            className="form-group m-auto"
            onSubmit={handleSubmit}
          >
            <label for="firstname" className="">
              Nombre
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              name="firstname"
              className="form-control"
              id="firstname"
              type="text"
            />

            <label for="lastname" className="">
              Apellido
            </label>
            <input
              onChange={(e) => setLastname(e.target.value)}
              name="lastname"
              className="form-control"
              id="lastname"
              type="text"
            />

            <label for="address" className="">
              Username
            </label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              name="address"
              className="form-control"
              id="username"
              type="text"
            />

            <label for="telephone" className="">
              Telephone
            </label>
            <input
              onChange={(e) => setTelephone(e.target.value)}
              name="telephone"
              className="form-control"
              id="telephone"
              type="text"
            />

            <label for="email" className="">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="form-control"
              id="email"
              type="email"
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
            <div className="d-flex justify-content-center mt-2">
              <button className="btn btn-signUp btn-lg" type="submit">
                Regístrate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
