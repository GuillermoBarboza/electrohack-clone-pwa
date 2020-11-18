import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { getUser } from "../../redux/actions";
import axios from "axios";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const history = useHistory();

	const handleLogin = (e) => {
		e.preventDefault();
		axios({
			method: "POST",
			headers: { "Content-Type": "application/json" },
			url: "http://localhost:8000/api/v1/users/find",
			data: {
				email: email,
				password: password,
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
			<div className="form-wrapper">
				<div className="login-avatar">
					<i class="fas fa-user-circle"></i>
				</div>
				<h4 className="text-center">Log In</h4>
				<form
					id="form-logIn"
					className="form-group m-auto"
					onSubmit={handleLogin}
				>
					<label htmlFor="email">Username or Email</label>
					<input
						onChange={(e) => setEmail(e.target.value)}
						name="email"
						className="form-control mb-3"
						id="email"
						type="text"
					/>

					<label htmlFor="password">Password</label>
					<input
						onChange={(e) => setPassword(e.target.value)}
						name="password"
						className="form-control"
						id="password"
						type="password"
					/>
					<button
						className="btn btn-logIn btn-block custom-shadow"
						type="submit"
					>
						Log In
					</button>
					<div className="d-flex justify-content-between">
						<p>
							<small>Forgot password?</small>
						</p>
						<p className="">
							<Link className="link-logIn" to="/register">
								Sign Up
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
