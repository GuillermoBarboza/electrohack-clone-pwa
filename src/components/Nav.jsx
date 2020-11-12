import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar, Form, FormControl, Nav, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getCategory, changeCarousel } from "../redux/actions";

const NavBar = () => {
  const state = useSelector((state) => state.state);
  const dispatch = useDispatch();

  function handleClick(option) {
    axios.get(`http://localhost:8000/api/v1/products/${option}`).then((res) => {
      dispatch(getCategory(res.data));
    });
    dispatch(changeCarousel(option));
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          ELECTRO-HACK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              onClick={() => {
                handleClick("home audio");
              }}
            >
              Home Audio
            </Nav.Link>
            <Nav.Link
              as={Link}
              onClick={() => {
                handleClick("bathroom");
              }}
            >
              Bathroom
            </Nav.Link>
            <Nav.Link
              as={Link}
              onClick={() => {
                handleClick("kitchen");
              }}
            >
              Kitchen
            </Nav.Link>

            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
