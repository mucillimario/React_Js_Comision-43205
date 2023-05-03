
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import logo from "../../assets/logo-lego.png";
import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar bg="warning" expand="lg">
    <Container>
      <Navbar.Brand>

      <img src={logo} className="logo" alt="Vite logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="colorTexto">COMPRAR</Nav.Link>
          <Nav.Link className="colorTexto">DESCUBRIR</Nav.Link>
          <Nav.Link className="colorTexto">AYUDA</Nav.Link>
        </Nav>
        <CartWidget/>
      </Navbar.Collapse>
          </Container>
  </Navbar>
);
}

export default NavBar