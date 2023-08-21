
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { shoppingInitialState } from '@/reducer/shoppingReducer';

const {cart} = shoppingInitialState;


function BarraNavegacion({mostrarCarrito, setMostrarCarrito}) {
  
const handleCheckboxChange = () => {
  setMostrarCarrito(!mostrarCarrito);
};


  return (
    <Navbar expand="lg" className="navbar-dark bg-dark fixed-top">
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
              <NavDropdown.Item href="#contacto">Contáctanos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
        <label >
          <input type="checkbox" onChange={handleCheckboxChange} hidden/>
            <img
                className="carrito"
                src='./images/logo-tienda32pxwhite.png'
                width="32px"
                alt="cart"
              />
        </label>
      </Container>
    </Navbar>
  );
}

export default BarraNavegacion;

 