import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import globalUrl from "../../utils/url";

const CategoryCreateForm = ({ setCategories, setSearch, closeModal }) => {
  const token = useSelector((store) => store.user.token);
  const [name, setName] = useState("");
  const [banner, setBanner] = useState(
    "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    let img = document.querySelector("#imageFile");
    let imageToSend = img.files[0] || banner;

    let formData = new FormData();
    formData.append("name", name);
    formData.append("banner", imageToSend);

    axios({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      url: `${globalUrl}/api/v1/categories`,
      data: formData,
    })
      .then((res) => {
        setCategories((categories) => [...categories, res.data]);
        setSearch(null);
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="modal-wrapper">
      <h4 className="text-center">Insert new category</h4>
      <hr />
      <form
        id="form-signUp"
        className="form-group m-auto"
        onSubmit={handleSubmit}
      >
        <label for="name">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          name="name"
          className="form-control"
          value={name}
          id="name"
          type="text"
        />

        <label for="image" className="mt-1">
          Image Link or...
        </label>
        <input
          onChange={(e) => setBanner(e.target.value)}
          name="image"
          className="form-control"
          id="username"
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

        <button className="btn btn-modal btn-block mt-4 mb-3" type="submit">
          Add Category
        </button>
      </form>
    </div>
  );
};

export default CategoryCreateForm;
