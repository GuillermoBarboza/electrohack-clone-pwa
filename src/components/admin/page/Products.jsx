import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import globalUrl from "../../../utils/url";
import SearchBox from "../../SearchBox";
import ProductCreateForm from "../ProductCreateForm";
import ProductUpdateForm from "../ProductUpdateForm";

const Products = () => {
	const token = useSelector((store) => store.user.token);
	const [products, setProducts] = useState(null);
	const [search, setSearch] = useState(null);
	const [product, setProduct] = useState(null);
	const [showCreate, setShowCreate] = useState(false);
	const [showUpdate, setShowUpdate] = useState(false);

	useEffect(() => {
		let url = `${globalUrl}/api/v1/products`;
		search && (url = url.concat(`/search?name=${search}`));
		axios.get(url).then((res) => {
			setProducts(res.data);
		});
	}, [search, product]);

	const handleDelete = (_id) => {
		axios({
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			url: `${globalUrl}/api/v1/products`,
			data: {
				_id: _id,
			},
		}).then((res) => {
			setProducts(products.filter((product) => product._id !== _id));
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
		<div className="container-fluid">
			<div className="admin-wrapper">
				<div className="d-flex justify-content-between">
					<SearchBox setSearch={setSearch} />
					<button className="btn btn-modal" onClick={showModalCreate}>
						New item
					</button>
				</div>
				<div className="table-responsive">
					<table className="table table-hover table-bordered mt-5">
						<thead className="bg-table-head">
							<tr className="text-center">
								<th scope="col">Product</th>
								<th scope="col">Price</th>
								<th scope="col">Stock</th>
								<th scope="col">Update</th>
								<th scope="col">Delete</th>
							</tr>
						</thead>
						<tbody>
							{products &&
								products.map((product) => {
									return (
										<tr>
											<td>{product.name}</td>
											<td className="text-center">$ {product.price}</td>
											<td className="text-center">{product.stock}</td>
											<td className="text-center">
												<button
													className="btn"
													onClick={() => {
														showModalUpdate();
														return setProduct(product);
													}}
												>
													<i className="fas fa-edit"></i>
												</button>
											</td>
											<td className="text-center">
												<button
													className="btn"
													onClick={() => handleDelete(product._id)}
												>
													<i className="fas fa-trash-alt"></i>
												</button>
											</td>
										</tr>
									);
								})}
						</tbody>
					</table>
				</div>
			</div>
			<Modal size="lg" show={showUpdate} onHide={closeModal}>
				<ProductUpdateForm
					product={product}
					setProduct={setProduct}
					setSearch={setSearch}
					closeModal={closeModal}
				/>
			</Modal>

			<Modal size="lg" show={showCreate} onHide={closeModal}>
				<ProductCreateForm
					setProducts={setProducts}
					setSearch={setSearch}
					closeModal={closeModal}
				/>
			</Modal>
		</div>
	);
};

export default Products;
