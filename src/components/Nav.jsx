import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar, Nav, ListGroup, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getProducts, changeCarousel } from "../redux/actions";
import globalUrl from "../utils/url";
import SearchBox from "./SearchBox";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [dropDown, setDropDown] = useState(null);
  const cartQuantity = useSelector((store) =>
    store.cart.reduce((sum, val) => sum + val.quantity, 0)
  );

  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const [categoriesAvailable, setCategoriesAvailable] = useState();

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8000/api/v1/categories",
    })
      .then((response) => {
		
        setCategoriesAvailable(response.data.filter(cat=>cat.productsList[0] && cat.productsList[0].length > 1));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (search === "") {
    setSearch(null);
    setDropDown(null);
  }

  useEffect(() => {
    let url = `${globalUrl}/api/v1/products/search?name=${search}`;
    axios.get(url).then((res) => {
      setDropDown(res.data);
    });
  }, [search]);

  function handleNavClick(option) {
    axios.get(`${globalUrl}/api/v1/products/${option.name}`).then((res) => {
      dispatch(getProducts(res.data[0].productsList));
      dispatch(changeCarousel(res.data[0].banner));
    });
  }

  function handleLink() {
    setDropDown(null);
  }

  return (
    <Navbar className="bg-nav" variant="dark" expand="lg" fixed="top">
      <div className="container">
        <Navbar.Brand as={Link} to="/" className="brand-font">
          <i className="fas fa-bolt"></i> ELECTRO-HACK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavDropdown title="Categories" id="nav-dropdown">
              {categoriesAvailable &&
                categoriesAvailable.map((categoryOption) => (
                  <>
                    <NavDropdown.Item
                      className="mr-4"
                      as={Link}
                      to={
                        "/categories/" +
                        categoryOption.name
                          .toLowerCase()
                          .trim()
                          .replace(/ /g, "-")
                      }
                      onClick={() => handleNavClick(categoryOption)}
                    >
                      {categoryOption.name}
                    </NavDropdown.Item>
                  </>
                ))}
            </NavDropdown>

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
                Admin
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavBar;
