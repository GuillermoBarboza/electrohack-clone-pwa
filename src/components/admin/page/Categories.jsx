import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import SearchBox from "../../SearchBox";
import CategoryCreateForm from "../CategoryCreateForm";
import CategoryUpdateForm from "../CategoryUpdateForm";

const Categories = () => {
	const token = useSelector((store) => store.user.token);
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
	}, [search, category]);

	const handleDelete = (_id) => {
		axios({
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			url: "http://localhost:8000/api/v1/categories",
			data: {
				_id: _id,
			},
		}).then((res) => {
			setCategories(categories.filter((category) => category._id !== _id));
		});
	};

	const closeModal = () => {
		setShowCreate(false);
		setShowUpdate(false);
	};

	const showModalCreate = () => {
		setShowCreate(true);
	};

	const showModalUpdate = () => {
		setShowUpdate(true);
	};

	return (
		<div className="admin-wrapper">
			<div className="d-flex justify-content-between">
				<SearchBox setSearch={setSearch} />
				<button className="btn btn-modal" onClick={showModalCreate}>
					New category
				</button>
			</div>

			<table className="table table-hover table-bordered mt-5">
				<thead className="bg-table-head">
					<tr className="text-center">
						<th scope="col">Category</th>
						<th scope="col">Category Items</th>
						<th scope="col">Update</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				<tbody>
					{categories &&
						categories.map((category) => {
							return (
								<tr>
									<td>{category.name}</td>
									<td className="text-center">
										{category.productsList.length}
									</td>
									<td className="text-center">
										<button
											className="btn"
											onClick={() => {
												showModalUpdate();
												return setCategory(category);
											}}
										>
											<i className="fas fa-edit"></i>
										</button>
									</td>
									<td className="text-center">
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
			<Modal show={showUpdate} onHide={closeModal}>
				<CategoryUpdateForm
					category={category}
					setCategory={setCategory}
					setSearch={setSearch}
					closeModal={closeModal}
				/>
			</Modal>

			<Modal show={showCreate} onHide={closeModal}>
				<CategoryCreateForm
					setCategories={setCategories}
					setSearch={setSearch}
					closeModal={closeModal}
				/>
			</Modal>
		</div>
	);
};

export default Categories;
