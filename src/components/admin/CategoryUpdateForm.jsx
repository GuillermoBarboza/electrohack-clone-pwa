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
		<div className="modal-wrapper">
			<h4 className="text-center">Update category</h4>
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
					Update
				</button>
			</form>
		</div>
	);
};

export default CategoryUpdateForm;
