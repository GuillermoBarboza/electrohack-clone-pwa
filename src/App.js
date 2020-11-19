import "./App.css";
import React from "react";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/page/Home";
import Category from "./components/page/Category";
import Product from "./components/page/Product";
import Cart from "./components/page/Cart";
import PublicRoute from "./components/PublicRoute";
import Main from "./components/admin/page/Main";
import Products from "./components/admin/page/Products";
import AboutUs from "./components/page/AboutUs";
import Users from "./components/admin/page/Users";
import Categories from "./components/admin/page/Categories";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/page/Login";
import Register from "./components/page/Register";

function App() {
	return (
		<Router>
			<Switch>
				<PublicRoute restricted={false} component={Home} path="/" exact />
				<PublicRoute
					restricted={false}
					component={Category}
					path="/categories/:category"
					exact
				/>

				<PublicRoute
					restricted={false}
					component={Product}
					path="/products/:product"
					exact
				/>
				<PublicRoute restricted={false} component={Cart} path="/cart" exact />

				<PublicRoute restricted={true} component={Login} path="/login" />
				<PublicRoute
					restricted={true}
					component={Register}
					path="/register"
					exact
				/>
				<PublicRoute restricted={false} component={AboutUs} path="/about-us" />
				<PrivateRoute component={Main} path="/admin" exact />
				<PrivateRoute component={Products} path="/admin/products" exact />
				<PrivateRoute component={Users} path="/admin/users" exact />
				<PrivateRoute component={Categories} path="/admin/categories" exact />
			</Switch>
		</Router>
	);
}

export default App;
