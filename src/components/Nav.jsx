import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getProducts, changeCarousel } from "../redux/actions";
import SearchBox from "./SearchBox";

const NavBar = () => {
  const cartQuantity = useSelector((store) =>
    store.cart.reduce((sum, val) => sum + val.quantity, 0)
  );

  const user = useSelector((store) => store.user);

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

            {user.token ? (
              <>
                <Nav.Link>Hola {user.name}</Nav.Link>
                <Nav.Link
                  onClick={() => {
                    dispatch(getUser({}));
                  }}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            <Nav.Link as={Link} to="/cart">
              <i class="fas fa-shopping-cart"></i>
              <span>{cartQuantity}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
