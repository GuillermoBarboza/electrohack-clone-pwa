import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAdmin } from "../utils";
import SideBar from "./admin/SideBar";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const user = useSelector((state) => state.user);
	return (
		<div className="row">
			<div className="col-md-2">
				<SideBar />
			</div>
			<div className="col-md-10">
				<Route
					{...rest}
					render={(props) =>
						isAdmin(user) ? <Component {...props} /> : <Redirect to="/" />
					}
				/>
			</div>
		</div>
	);
};

export default PrivateRoute;
