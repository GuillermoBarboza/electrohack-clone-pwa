import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navbar, Form, FormControl, Nav, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const NavBar = () => {
  const state = useSelector((state) => state.state);
  function handleClick() {}
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
            <Nav.Link as={Link} to="/">
              Imagen y Sonido
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Climatización
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Cocina
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
              Carrito
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
