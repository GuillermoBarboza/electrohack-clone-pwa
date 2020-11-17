import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar, Nav, ListGroup, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getProducts, changeCarousel } from "../redux/actions";
import SearchBox from "./SearchBox";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [dropDown, setDropDown] = useState(null);
  const cartQuantity = useSelector((store) =>
    store.cart.reduce((sum, val) => sum + val.quantity, 0)
  );

  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  if (search === "") {
    setSearch(null);
    setDropDown(null);
  }

  useEffect(() => {
    let url = `http://localhost:8000/api/v1/products/search?name=${search}`;
    axios.get(url).then((res) => {
      setDropDown(res.data);
    });
  }, [search]);

  function handleClick(option) {
    axios
      .get(`http://localhost:8000/api/v1/categories/${option}`)
      .then((res) => {
        dispatch(getProducts(res.data[0].productsList));
        dispatch(changeCarousel(res.data[0].banner));
      });
  }

  function handleLink() {
    setDropDown(null);
  }

  return (
    <Navbar className="bg-nav" expand="lg" fixed="top">
      <div className="container">
        <Navbar.Brand as={Link} to="/">
          <i className="fas fa-bolt"></i> ELECTRO-HACK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link
              className="mr-4"
              as={Link}
              to="/categories/home-audio"
              onClick={() => {
                handleClick("home-audio");
              }}
            >
              Home Audio
            </Nav.Link>
            <Nav.Link
              className="mr-4"
              as={Link}
              to="/categories/bathroom"
              onClick={() => {
                handleClick("bathroom");
              }}
            >
              Bathroom
            </Nav.Link>
            <Nav.Link
              className="mr-4"
              as={Link}
              to="/categories/kitchen"
              onClick={() => {
                handleClick("kitchen");
              }}
            >
              Kitchen
            </Nav.Link>

            <div className="d-flex flex-column position-relative mt-1">
              <SearchBox setSearch={setSearch} />
              <ListGroup variant="flush" className="search-results">
                {dropDown &&
                  dropDown.map((product) => {
                    return (
                      <ListGroup.Item>
                        <Link
                          className="text-dark"
                          to={{
                            pathname:
                              "/products/" +
                              product.name
                                .toLowerCase()
                                .trim()
                                .replace(/ /g, "-"),
                            state: { product },
                          }}
                          onClick={handleLink}
                        >
                          {product.name}
                        </Link>
                      </ListGroup.Item>
                    );
                  })}
              </ListGroup>
            </div>

            {user.token ? (
              <>
                <Nav.Link>Hello, {user.name}</Nav.Link>
                <Nav.Link
                  onClick={() => {
                    dispatch(getUser({}));
                  }}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <Nav.Link className="mr-4" as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            <Nav.Link as={Link} to="/cart">
              {cartQuantity > 0 ? (
                <span className="fa-stack has-badge" data-count={cartQuantity}>
                  <i className="fas fa-lg fa-shopping-cart"></i>
                </span>
              ) : (
                <span className="fa-stack">
                  <i className="fas fa-lg fa-shopping-cart"></i>
                </span>
              )}
            </Nav.Link>
            {user.admin && (
              <Nav.Link as={Link} to="/admin">
                Admin Dashboard
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
