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
		<div className="modal-wrapper">
			<h4 className="text-center">Update item</h4>
			<hr />
			<form
				id="form-signUp"
				className="form-group m-auto"
				onSubmit={(e) => handleSubmit(e)}
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

						<label for="description">Description</label>
						<input
							onChange={(e) => setDescription(e.target.value)}
							name="description"
							className="form-control mb-2"
							value={description}
							id="description"
							type="text"
						/>

						<label for="image">Image Link or...</label>
						<input
							onChange={(e) => setImage(e.target.value)}
							name="image"
							className="form-control mb-2"
							value={image}
							id="image"
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
							value={price}
							id="price"
							type="number"
						/>

						<label for="category">Category</label>
						<input
							onChange={(e) => setCategory(e.target.value)}
							name="category"
							className="form-control mb-2"
							value={category}
							id="category"
							type="category"
						/>

						<label for="stock">Stock</label>
						<input
							onChange={(e) => setStock(e.target.value)}
							name="stock"
							className="form-control mb-2"
							value={stock}
							id="stock"
							type="number"
						/>

						<label for="featured">Featured</label>
						<input
							onChange={(e) => setFeatured(e.target.value)}
							name="featured"
							className="form-control mb-2"
							value={featured}
							id="featured"
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

export default UpdateForm;
