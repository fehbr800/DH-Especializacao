import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../styles/Navbar.scss";

export default function NavBar() {
  return (
    <Navbar className="menuNav text-light" expand="md">
    <Container className="d-flex">
      <Navbar.Brand className="text-light" href="#">DigiWallet</Navbar.Brand>
      <Navbar.Toggle  aria-controls="navbar-collapse" className="custom-toggle "  />
      <Navbar.Collapse className="justify-content-end "  id="navbar-collapse  ">
        <Nav className=" md-auto text-center">
          <Nav.Link className="text-light"  href="#">Home</Nav.Link>
          <Nav.Link className="text-light"   href="#">Sobre</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
