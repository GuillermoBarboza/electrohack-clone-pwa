import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import globalUrl from "../../utils/url";

const ProductCreateForm = ({ setProducts, setSearch, closeModal }) => {
  const token = useSelector((store) => store.user.token);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(
    "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
  );
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [featured, setFeatured] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let img = document.querySelector("#imageFile");
    let imageToSend = img.files[0] || image;

    let formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", imageToSend);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("stock", stock);
    formData.append("featured", featured);

    axios({
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      url: `${globalUrl}/api/v1/products`,
      data: formData,
    })
      .then((res) => {
        setProducts((products) => [...products, res.data]);

        setSearch(null);
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="modal-wrapper">
      <h4 className="text-center">Insert new item</h4>
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
              id="name"
              type="text"
            />

            <label for="description">Description</label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              className="form-control mb-2"
              id="description"
              type="text"
            />

            <label for="image">Image Link or...</label>
            <input
              onChange={(e) => setImage(e.target.value)}
              name="image"
              className="form-control mb-2"
              id="username"
              type="text"
            />

            <label for="imageFile">Have an Image? upload it!</label>
            <input
              name="imageFile"
              className="form-control mb-2"
              id="imageFile"
              type="file"
            />
          </div>
          <div className="col-lg-6">
            <label for="price">Price</label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              name="price"
              className="form-control mb-2"
              id="price"
              type="number"
            />

            <label for="category">Category</label>
            <input
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              className="form-control mb-2"
              id="category"
              type="category"
            />

            <label for="stock">Stock</label>
            <input
              onChange={(e) => setStock(e.target.value)}
              name="stock"
              className="form-control mb-2"
              id="stock"
              type="number"
            />

            <label for="featured">Featured</label>
            <input
              onChange={(e) => setFeatured(e.target.value)}
              name="featured"
              className="form-control mb-2"
              id="featured"
              type="text"
            />
          </div>
        </div>
        <button className="btn btn-modal btn-block mt-4 mb-3" type="submit">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default ProductCreateForm;
