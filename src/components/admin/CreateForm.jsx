import React, { useState } from "react";
import axios from "axios";

const CreateForm = ({ setProducts, setSearch, handleClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [featured, setFeatured] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      headers: { "Content-Type": "application/json" },
      url: "http://localhost:8000/api/v1/products",
      data: {
        name: name,
        description: description,
        image: image,
        price: price,
        category: category,
        stock: stock,
        featured: featured,
      },
    })
      .then((res) => {
        setProducts((products) => [...products, res.data]);
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
          <h1 className="text-center">Insert new item data</h1>
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
              id="name"
              type="text"
            />

            <label for="description" className="mt-1">
              Description
            </label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              className="form-control"
              id="description"
              type="text"
            />

            <label for="image" className="mt-1">
              Image
            </label>
            <input
              onChange={(e) => setImage(e.target.value)}
              name="image"
              className="form-control"
              id="username"
              type="text"
            />

            <label for="price" className="mt-1">
              Price
            </label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              name="price"
              className="form-control"
              id="price"
              type="number"
            />

            <label for="category" className="mt-1">
              Category
            </label>
            <input
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              className="form-control"
              id="category"
              type="category"
            />

            <label for="stock" className="mt-1">
              Stock
            </label>
            <input
              onChange={(e) => setStock(e.target.value)}
              name="stock"
              className="form-control"
              id="stock"
              type="number"
            />

            <label for="featured" className="mt-1">
              Featured
            </label>
            <input
              onChange={(e) => setFeatured(e.target.value)}
              name="featured"
              className="form-control"
              id="featured"
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

export default CreateForm;
