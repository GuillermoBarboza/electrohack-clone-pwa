import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser } from "../../redux/actions";
import axios from "axios";

const Register = () => {
	const [name, setName] = useState("");
	const [lastname, setLastname] = useState("");
	const [telephone, setTelephone] = useState("");
	const [address, setAddress] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const dispatch = useDispatch();
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		axios({
			method: "POST",
			headers: { "Content-Type": "application/json" },
			url: "http://localhost:8000/api/v1/users/create",
			data: {
				name: name,
				lastname: lastname,
				telephone: telephone,
				password: password,
				email: email,
				address: address,
			},
		})
			.then((res) => {
				dispatch(getUser(res.data));
				history.goBack();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="container">
			<div className="form-signup-wrapper">
				<div className="signup-avatar">
					<i class="fas fa-user-plus"></i>
				</div>

				<h4 className="text-center">Sign Up</h4>
				<form id="form-signUp" className="form-group" onSubmit={handleSubmit}>
					<label htmlFor="firstname">Name</label>
					<input
						onChange={(e) => setName(e.target.value)}
						name="firstname"
						className="form-control mb-2"
						id="firstname"
						type="text"
					/>

					<label htmlFor="lastname">Lastname</label>
					<input
						onChange={(e) => setLastname(e.target.value)}
						name="lastname"
						className="form-control mb-2"
						id="lastname"
						type="text"
					/>

					<label htmlFor="address">Adress</label>
					<input
						onChange={(e) => setAddress(e.target.value)}
						name="address"
						className="form-control mb-2"
						id="username"
						type="text"
					/>

					<label htmlFor="telephone">Telephone</label>
					<input
						onChange={(e) => setTelephone(e.target.value)}
						name="telephone"
						className="form-control mb-2"
						id="telephone"
						type="text"
					/>

					<label htmlFor="email">Email</label>
					<input
						onChange={(e) => setEmail(e.target.value)}
						name="email"
						className="form-control mb-2"
						id="email"
						type="email"
					/>

					<label htmlFor="password">Password</label>
					<input
						onChange={(e) => setPassword(e.target.value)}
						name="password"
						className="form-control mb-2"
						id="password"
						type="password"
					/>
					<div className="d-flex justify-content-center mt-2">
						<button className="btn btn-logIn btn-block" type="submit">
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
