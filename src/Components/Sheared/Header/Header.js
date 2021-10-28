import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src={`https://i.ibb.co/3RKP0Ct/logo.png`} height="40" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>

              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <span className="d-flex">
              <Button variant="outline-success">Search</Button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
