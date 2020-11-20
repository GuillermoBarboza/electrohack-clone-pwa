import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser } from "../../redux/actions";
import axios from "axios";
import globalUrl from "../../utils/url";

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [telephone, setTelephone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [lastnameErr, setLastnameErr] = useState("");
  const [telephoneErr, setTelephoneErr] = useState("");
  const [addressErr, setAddressErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const formValidation = () => {
    const nameErr = {};
    const lastnameErr = {};
    const telephoneErr = {};
    const addressErr = {};
    const passwordErr = {};
    const emailErr = {};
    let isValid = true;

    if (name === "") {
      nameErr.nameEmpty = "this is a required field";
      isValid = false;
    }

    if (name.trim().length < 3) {
      nameErr.nameShort = "name should have at least 3 characters";
      isValid = false;
    }

    if (name.trim().length > 10) {
      nameErr.nameLong = "name should have less than 10 characters";
      isValid = false;
    }

    if (lastname === "") {
      lastnameErr.nameEmpty = "this is a required field";
      isValid = false;
    }

    if (lastname.trim().length < 3) {
      lastnameErr.lastnameShort = "name should have at least 3 characters";
      isValid = false;
    }

    if (lastname.trim().length > 10) {
      lastnameErr.lastnameLong = "name should have less than 10 characters";
      isValid = false;
    }

    if (telephone === "") {
      telephoneErr.telephoneEmpty = "this is a required field";
      isValid = false;
    }

    if (isNaN(telephone)) {
      telephoneErr.notNumber = "this field should be a number";
      isValid = false;
    }

    if (telephone.trim().length > 15) {
      lastnameErr.lastnameLong = "phone should have less than 15 characters";
      isValid = false;
    }

    if (address === "") {
      addressErr.addressEmpty = "this is a required field";
      isValid = false;
    }

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

    setNameErr(nameErr);
    setLastnameErr(lastnameErr);
    setTelephoneErr(telephoneErr);
    setAddressErr(addressErr);
    setPasswordErr(passwordErr);
    setEmailErr(emailErr);
    return isValid;
  };

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    isValid &&
      axios({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        url: `${globalUrl}/api/v1/users/create`,
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
          dispatch(getUser(res.data));
          history.goBack();
        })
        .catch((err) => {
          console.log(err);
        });
  };

  return (
    <div className="container">
      <div className="form-signup-wrapper">
        <div className="signup-avatar">
          <i class="fas fa-user-plus"></i>
        </div>

        <h4 className="text-center">Sign Up</h4>
        <form id="form-signUp" className="form-group" onSubmit={handleSubmit}>
          <label htmlFor="firstname">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            name="firstname"
            className="form-control mb-2"
            id="firstname"
            type="text"
          />
          {Object.keys(nameErr).map((key) => {
            return <div className="alert-danger">{nameErr[key]}</div>;
          })}
          <label htmlFor="lastname">Lastname</label>
          <input
            onChange={(e) => setLastname(e.target.value)}
            name="lastname"
            className="form-control mb-2"
            id="lastname"
            type="text"
          />
          {Object.keys(lastnameErr).map((key) => {
            return <div className="alert-danger">{lastnameErr[key]}</div>;
          })}
          <label htmlFor="address">Address</label>
          <input
            onChange={(e) => setAddress(e.target.value)}
            name="address"
            className="form-control mb-2"
            id="username"
            type="text"
          />
          {Object.keys(addressErr).map((key) => {
            return <div className="alert-danger">{addressErr[key]}</div>;
          })}
          <label htmlFor="telephone">Telephone</label>
          <input
            onChange={(e) => setTelephone(e.target.value)}
            name="telephone"
            className="form-control mb-2"
            id="telephone"
            type="text"
          />
          {Object.keys(telephoneErr).map((key) => {
            return <div className="alert-danger">{telephoneErr[key]}</div>;
          })}
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            className="form-control mb-2"
            id="email"
            type="email"
          />
          {Object.keys(emailErr).map((key) => {
            return <div className="alert-danger">{emailErr[key]}</div>;
          })}
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="form-control mb-2"
            id="password"
            type="password"
          />
          {Object.keys(passwordErr).map((key) => {
            return <div className="alert-danger">{passwordErr[key]}</div>;
          })}
          <div className="d-flex justify-content-center mt-2">
            <button
              className="btn btn-logIn custom-shadow btn-block"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
