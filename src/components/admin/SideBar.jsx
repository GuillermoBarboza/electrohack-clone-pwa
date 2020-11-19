import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
	return (
		<div className="sidebar d-flex flex-column justify-content-between">
			<ul className="nav d-flex flex-column ">
				<li className="nav-item">
					<Link className="nav-link active" to="/admin">
						Dashboard <span className="sr-only">(current)</span>
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/admin/products">
						Products
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/admin/users">
						Users
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/admin/categories">
						Categories
					</Link>
				</li>
			</ul>
			<Link to="/" className="text-decoration-none brand-font">
				<h6>
					<i className="fas fa-xs fa-bolt"></i> Electro<strong>Hack</strong>
				</h6>
			</Link>
		</div>
	);
};

export default SideBar;
