
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import logo from "../../assets/logo-lego.png";
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <Navbar bg="warning" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <img src={logo} className="logo" alt="logo de lego" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <h6>COMPRAR</h6>
            <h6>DESCUBRIR</h6>
            <h6>AYUDA</h6>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header