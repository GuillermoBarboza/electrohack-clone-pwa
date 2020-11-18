import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import globalUrl from "../../utils/url";

const UserUpdateForm = ({ user, setUser, setSearch, closeModal }) => {
  const token = useSelector((store) => store.user.token);
  const [_id, set_id] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [admin, setAdmin] = useState("");

  useEffect(() => {
    if (user !== null) {
      set_id(user._id);
      setName(user.name);
      setLastname(user.lastname);
      setEmail(user.email);
      setAddress(user.address);
      setTelephone(user.telephone);
      setAdmin(user.admin);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: `${globalUrl}/api/v1/auth/users`,
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
        setUser(null);
        setSearch(null);
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="modal-wrapper">
      <h4 className="text-center">Update user</h4>
      <hr />
      <form
        id="form-signUp"
        className="form-group m-auto"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-lg-6">
            <label for="name">Name</label>
            <input
              onChange={(e) => setName(e.target.value)}
              name="name"
              className="form-control mb-2"
              value={name}
              id="name"
              type="text"
            />

            <label for="lastname">Lastname</label>
            <input
              onChange={(e) => setLastname(e.target.value)}
              name="lastname"
              className="form-control mb-2"
              value={lastname}
              id="lastname"
              type="text"
            />

            <label for="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="form-control mb-2"
              value={email}
              id="email"
              type="text"
            />
          </div>
          <div className="col-lg-6">
            <label for="address">Address</label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              name="address"
              className="form-control mb-2"
              value={address}
              id="address"
              type="text"
            />
            <label for="telephone">Telephone</label>
            <input
              onChange={(e) => setTelephone(e.target.value)}
              name="telephone"
              className="form-control mb-2"
              value={telephone}
              id="telephone"
              type="text"
            />

            <label for="admin">Admin</label>
            <input
              onChange={(e) => setAdmin(e.target.value)}
              name="admin"
              className="form-control mb-2"
              value={admin}
              id="admin"
              type="text"
            />
          </div>
        </div>
        <button className="btn btn-modal btn-block mt-4 mb-3" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default UserUpdateForm;
