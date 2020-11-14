import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import SearchBox from "../../SearchBox";
import UserUpdateForm from "../UserUpdateForm";

const Users = () => {
  const [users, setUsers] = useState(null);
  const [search, setSearch] = useState(null);
  const [user, setUser] = useState(null);
  const [showUpdate, setShowUpdate] = useState(false);

  useEffect(() => {
    let url = "http://localhost:8000/api/v1/users";
    search && (url = url.concat(`/search?name=${search}`));
    axios.get(url).then((res) => {
      setUsers(res.data);
    });
  }, [search]);

  const handleClose = () => {
    setShowUpdate(false);
  };

  const handleShowUpdate = () => {
    setShowUpdate(true);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="d-flex justify-content-between">
          {" "}
          <SearchBox setSearch={setSearch} />
        </div>

        <table className="table mt-3">
          <thead>
            <tr>
              <th scope="col">User</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user) => {
                return (
                  <tr>
                    <td>{user.name + " " + user.lastname}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>{user.phone}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => {
                          handleShowUpdate();
                          return setUser(user);
                        }}
                      >
                        <i class="fas fa-edit"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <Modal show={showUpdate} onHide={handleClose}>
          <UserUpdateForm
            user={user}
            setUser={setUser}
            setSearch={setSearch}
            handleClose={handleClose}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Users;
