import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" to="/admin">
              <span data-feather="home"></span>
              Dashboard <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/products">
              <span data-feather="shopping-cart"></span>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/users">
              <span data-feather="users"></span>
              Users
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/categories">
              <span data-feather="users"></span>
              Categories
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
