import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
const Header = () => {
  const { user, LogOut } = useAuth();
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
              {user?.email ? (
                <>
                  <Nav.Link as={Link} to="/mybooking">
                    my-Booking
                  </Nav.Link>
                  <Nav.Link as={Link} to="/bookinglist">
                    Booking-List
                  </Nav.Link>
                  <Nav.Link as={Link} to="/services">
                    Services
                  </Nav.Link>
                  <Nav.Link as={Link} to="/add/services">
                    add Services
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              )}
            </Nav>
            <span className="d-flex">
              {user?.email ? (
                <>
                  <img
                    src={user?.photoURL}
                    className="rounded-circle me-2 z-depth-2"
                    height="40"
                    width="40"
                    alt=""
                  />
                  <Button onClick={LogOut} variant="danger">
                    LogOut
                  </Button>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
