import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const UpdateForm = ({ product, setProduct, setSearch, closeModal }) => {
  const [_id, set_id] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(
    "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
  );
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [featured, setFeatured] = useState("");

  useEffect(() => {
    if (product !== null) {
      set_id(product._id);
      setName(product.name);
      setDescription(product.description);
      setImage(product.image);
      setPrice(product.price);
      setCategory(product.category);
      setStock(product.stock);
      setFeatured(product.featured);
    }
  }, [product]);

  const token = useSelector((store) => store.user.token);

  const handleSubmit = (e) => {
    e.preventDefault();
    let img = document.querySelector("#imageFile");
    let imageToSend = img.files[0] || image;

    let formData = new FormData();
    formData.append("_id", _id);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("image", imageToSend);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("stock", stock);
    formData.append("featured", featured);
    axios({
      method: "PUT",
      header: { Authorization: `Bearer ${token}` },
      url: `http://localhost:8000/api/v1/products`,
      data: formData,
    })
      .then((res) => {
        setProduct(null);
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
          <h1 className="text-center">Update item data</h1>
        </div>
        <div className="col-md-12 mt-3">
          <form
            id="form-signUp"
            className="form-group m-auto"
            onSubmit={(e) => handleSubmit(e)}
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

            <label for="description" className="mt-1">
              Description
            </label>
            <input
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              className="form-control"
              value={description}
              id="description"
              type="text"
            />

            <label for="image" className="mt-1">
              Image Link or...
            </label>
            <input
              onChange={(e) => setImage(e.target.value)}
              name="image"
              className="form-control"
              value={image}
              id="image"
              type="text"
            />

            <label for="imageFile" className="mt-1">
              Have an Image? upload it!
            </label>
            <input
              name="imageFile"
              className="form-control"
              id="imageFile"
              type="file"
            />

            <label for="price" className="mt-1">
              Price
            </label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              name="price"
              className="form-control"
              value={price}
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
              value={category}
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
              value={stock}
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
              value={featured}
              id="featured"
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

export default UpdateForm;
