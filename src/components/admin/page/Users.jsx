import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import globalUrl from "../../../utils/url";
import SearchBox from "../../SearchBox";
import UserUpdateForm from "../UserUpdateForm";
import UserCreateForm from "../UserCreateForm";

const Users = () => {
	const token = useSelector((store) => store.user.token);
	const [users, setUsers] = useState(null);
	const [search, setSearch] = useState(null);
	const [user, setUser] = useState(null);
	const [showCreate, setShowCreate] = useState(false);
	const [showUpdate, setShowUpdate] = useState(false);

	useEffect(() => {
		let url = `${globalUrl}/api/v1/auth/users`;
		search && (url = url.concat(`/search?name=${search}`));
		axios({
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			url: url,
		}).then((res) => {
			setUsers(res.data);
		});
	}, [search, user]);

	const handleDelete = (_id) => {
		axios({
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			url: `${globalUrl}/api/v1/auth/users`,
			data: {
				_id: _id,
			},
		}).then((res) => {
			setUsers(users.filter((user) => user._id !== _id));
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
			<div className="row">
				<div className="col-md-10">
					<div className="d-flex justify-content-between">
						<SearchBox setSearch={setSearch} />
						<button className="btn btn-modal" onClick={showModalCreate}>
							New user
						</button>
					</div>
					<div className="table-responsive">
						<table className="table  table-hover table-bordered mt-5">
							<thead className="bg-table-head">
								<tr className="text-center">
									<th scope="col">User</th>
									<th scope="col">Email</th>
									<th scope="col">Address</th>
									<th scope="col">Phone</th>
									<th scope="col">Update</th>
									<th scope="col">Delete</th>
								</tr>
							</thead>
							<tbody>
								{users &&
									users.map((user) => {
										return (
											<tr>
												<td>{user.name + " " + user.lastname}</td>
												<td>{user.email}</td>
												<td>{user.address}</td>
												<td>{user.telephone}</td>
												<td className="text-center">
													<button
														className="btn"
														onClick={() => {
															showModalUpdate();
															return setUser(user);
														}}
													>
														<i className="fas fa-edit"></i>
													</button>
												</td>
												<td className="text-center">
													<button
														className="btn"
														onClick={() => handleDelete(user._id)}
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
			</div>
			<Modal size="lg" show={showUpdate} onHide={closeModal}>
				<UserUpdateForm
					user={user}
					setUser={setUser}
					setSearch={setSearch}
					closeModal={closeModal}
				/>
			</Modal>

			<Modal size="lg" show={showCreate} onHide={closeModal}>
				<UserCreateForm
					setUsers={setUsers}
					setSearch={setSearch}
					closeModal={closeModal}
				/>
			</Modal>
		</div>
	);
};

export default Users;
