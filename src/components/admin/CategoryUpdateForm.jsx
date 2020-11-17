import React, { useState, useEffect } from "react";
import axios from "axios";

const CategoryUpdateForm = ({
  category,
  setCategory,
  setSearch,
  closeModal,
}) => {
  const [_id, set_id] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (category !== null) {
      set_id(category._id);
      setName(category.name);
    }
  }, [category]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      url: "http://localhost:8000/api/v1/categories",
      data: {
        _id: _id,
        name: name,
      },
    })
      .then((res) => {
        setCategory(null);
        setSearch(null);
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 border-bottom border-dark">
          <h1 className="text-center">Update category data</h1>
        </div>
        <div className="col-md-12 mt-3">
          <form
            id="form-signUp"
            className="form-group m-auto"
            onSubmit={handleSubmit}
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

            <div className="d-flex justify-content-center mt-3">
              <button className="btn btn-success btn-block mb-3" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryUpdateForm;
