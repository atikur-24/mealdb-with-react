import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-light"  href="#">Meal DB</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ms-5"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <ActiveLink to={"/"}>Home</ActiveLink>
            <ActiveLink to={"/menu"}>Menu</ActiveLink>
            <ActiveLink to={"/contact"}>Contact</ActiveLink>
            <ActiveLink to={"/about"}>About</ActiveLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;