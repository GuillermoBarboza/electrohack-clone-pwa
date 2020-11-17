import React, { useState } from "react";
import axios from "axios";

const CategoryCreateForm = ({ setCategories, setSearch, closeModal }) => {
	const [name, setName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		axios({
			method: "POST",
			headers: { "Content-Type": "application/json" },
			url: "http://localhost:8000/api/v1/categories",
			data: {
				name: name,
				productsList: [],
			},
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

				<button className="btn btn-modal btn-block mt-4 mb-3" type="submit">
					Add Category
				</button>
			</form>
		</div>
	);
};

export default CategoryCreateForm;
