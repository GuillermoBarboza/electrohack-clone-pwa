import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar, Form, FormControl, Nav, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getProducts, changeCarousel } from "../redux/actions";

const SearchBox = ({ setSearch }) => {
  return (
    <Form className="mr-4" inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

export default SearchBox;
