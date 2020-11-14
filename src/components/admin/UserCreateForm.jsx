import React, { useState } from "react";
import axios from "axios";

const UserCreateForm = ({ setUsers, setSearch, handleClose }) => {
  const [_id, set_id] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [admin, setAdmin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: "http://localhost:8000/api/v1/users/create",
      data: {
        _id: _id,
        name: name,
        lastname: lastname,
        email: email,
        address: address,
        telephone: telephone,
        admin: admin,
      },
    })
      .then((res) => {
        setUsers((users) => [...users, res.data]);
        setSearch(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 border-bottom border-dark">
          <h1 className="text-center">Insert new user data</h1>
        </div>
        <div className="col-md-12 mt-3">
          <form
            id="form-signUp"
            className="form-group m-auto"
            onSubmit={(handleSubmit, handleClose)}
          >
            <label for="name" className="mt-1">
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              name="name"
              className="form-control"
              value={name}
              id="name"
              type="text"
            />

            <label for="lastname" className="mt-1">
              Lastname
            </label>
            <input
              onChange={(e) => setLastname(e.target.value)}
              name="lastname"
              className="form-control"
              value={lastname}
              id="lastname"
              type="text"
            />

            <label for="email" className="mt-1">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="form-control"
              value={email}
              id="email"
              type="text"
            />

            <label for="address" className="mt-1">
              Address
            </label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              name="address"
              className="form-control"
              value={address}
              id="address"
              type="text"
            />

            <label for="telephone" className="mt-1">
              Telephone
            </label>
            <input
              onChange={(e) => setTelephone(e.target.value)}
              name="telephone"
              className="form-control"
              value={telephone}
              id="telephone"
              type="text"
            />

            <label for="admin" className="mt-1">
              Admin
            </label>
            <input
              onChange={(e) => setAdmin(e.target.value)}
              name="admin"
              className="form-control"
              value={admin}
              id="admin"
              type="text"
            />
            <div className="d-flex justify-content-center mt-3">
              <button className="btn btn-success btn-block mb-3" type="submit">
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserCreateForm;
