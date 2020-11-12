import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar, Form, FormControl, Nav, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getProducts, changeCarousel } from "../redux/actions";
import SearchBox from "./SearchBox";

const NavBar = () => {
  const dispatch = useDispatch();

  function handleClick(option) {
    axios
      .get(`http://localhost:8000/api/v1/categories/${option}`)
      .then((res) => {
        dispatch(getProducts(res.data[0].productsList));
        dispatch(changeCarousel(res.data[0].banner));
      });
  }

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand as={Link} to="/">
          ELECTRO-HACK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => {
                dispatch(
                  changeCarousel([
                    "https://image.shutterstock.com/image-vector/brush-sale-banner-promotion-ribbon-260nw-1182942766.jpg",
                  ])
                );
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/categories/home-audio"
              onClick={() => {
                handleClick("home-audio");
              }}
            >
              Home Audio
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/categories/bathroom"
              onClick={() => {
                handleClick("bathroom");
              }}
            >
              Bathroom
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/categories/kitchen"
              onClick={() => {
                handleClick("kitchen");
              }}
            >
              Kitchen
            </Nav.Link>

            <SearchBox />

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
