import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import SearchBox from "../../SearchBox";
import CategoryCreateForm from "../CategoryCreateForm";
import CategoryUpdateForm from "../CategoryUpdateForm";

const Categories = () => {
	const [categories, setCategories] = useState(null);
	const [search, setSearch] = useState(null);
	const [category, setCategory] = useState(null);
	const [showCreate, setShowCreate] = useState(false);
	const [showUpdate, setShowUpdate] = useState(false);

	useEffect(() => {
		let url = "http://localhost:8000/api/v1/categories";
		search && (url = url.concat(`/search?name=${search}`));
		axios.get(url).then((res) => {
			setCategories(res.data);
		});
	}, [search]);

	const handleDelete = (_id) => {
		axios({
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
			url: "http://localhost:8000/api/v1/categories",
			data: {
				_id: _id,
			},
		}).then((res) => {
			setCategories(categories.filter((category) => category._id !== _id));
		});
	};

	const handleClose = () => {
		setShowCreate(false);
		setShowUpdate(false);
	};

	const handleShowCreate = () => {
		setShowCreate(true);
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
					<button className="btn btn-success" onClick={handleShowCreate}>
						New category
					</button>
				</div>

				<table className="table mt-3">
					<thead>
						<tr>
							<th scope="col">Category</th>
							<th scope="col">Category Items</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						{categories &&
							categories.map((category) => {
								return (
									<tr>
										<td>{category.name}</td>
										<td>{category.productsList.length}</td>
										<td>
											<button
												className="btn"
												onClick={() => {
													handleShowUpdate();
													return setCategory(category);
												}}
											>
												<i className="fas fa-edit"></i>
											</button>
										</td>
										<td>
											{category.productsList.length === 0 && (
												<button
													className="btn"
													onClick={() => handleDelete(category._id)}
												>
													<i className="fas fa-trash-alt"></i>
												</button>
											)}
										</td>
									</tr>
								);
							})}
					</tbody>
				</table>
				<Modal show={showUpdate} onHide={handleClose}>
					<CategoryUpdateForm
						category={category}
						setCategory={setCategory}
						setSearch={setSearch}
						handleClose={handleClose}
					/>
				</Modal>

				<Modal show={showCreate} onHide={handleClose}>
					<CategoryCreateForm
						setCategories={setCategories}
						setSearch={setSearch}
						handleClose={handleClose}
					/>
				</Modal>
			</div>
		</div>
	);
};

export default Categories;
