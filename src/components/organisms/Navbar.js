import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Bubblegum_Sans } from 'next/font/google';

function BarraNavegacion() {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container>
        <Navbar.Brand href="#home">
          <img
            className="freshness"
            src= "./images/freshness.jpg"
            width="70px"
            alt="freshness"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#comentarios">Comentarios</Nav.Link>
            
            <NavDropdown title="Mas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#contacto">Contactanos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
        <Nav.Link href="#productos">
          <img
            className="carrito"
            src='./images/logo-tienda32pxblack.png'
            width="32px"
            alt="cart"
          />
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;
 