import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar, Form, FormControl, Nav, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getProducts, changeCarousel } from "../redux/actions";

const SearchBox = () => {
	return (
		<Form className="mr-4" inline>
			<FormControl type="text" placeholder="Search" className="mr-sm-2" />
			<Button variant="outline-success">Search</Button>
		</Form>
	);
};

export default SearchBox;
