import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAdmin } from "../utils";
import SideBar from "./admin/SideBar";
import { Navbar, Nav, ListGroup, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const user = useSelector((state) => state.user);
	return (
		<div className="row bg-admin-color">
			<div className="d-none d-md-block col-md-2">
				<SideBar />
			</div>
			<div className="d-block d-md-none">
				<Navbar className="bg-nav-admin" variant="dark" expand="lg" fixed="top">
					<div className="container">
						<Navbar.Brand as={Link} to="/" className="brand-font">
							<i className="fas fa-xs fa-bolt"></i> Electro<strong>Hack</strong>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse
							id="basic-navbar-nav"
							className="justify-content-end"
						>
							<Nav>
								<Nav.Link as={Link} to="/admin" className="mr-4">
									Dashboard
								</Nav.Link>

								<Nav.Link as={Link} to="/admin/products" className="mr-4">
									Products
								</Nav.Link>
								<Nav.Link as={Link} to="/admin/users" className="mr-4">
									Users
								</Nav.Link>

								<Nav.Link as={Link} to="/admin/categories">
									Categories
								</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</div>
				</Navbar>
			</div>
			<div className="col-12 col-md-10">
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
