import React, { Component } from "react";
import {
  Button,
  Alert,
  Breadcrumb,
  Card,
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";

export class Menu extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.pinimg.com/564x/0c/7f/70/0c7f7025c1b21ca037fc3e1c89c21d7a.jpg"
              width="100"
              height="100"
              className="d-inline-block align-top"
            />{' '}
            Restaurante el buen Chifrijo
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Sobre nosotros</Nav.Link>
            <Nav.Link href="#features">Horarios</Nav.Link>
            <Nav.Link href="#pricing">Reservas</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
export default Menu;
