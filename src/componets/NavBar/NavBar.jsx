import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar className="NavBar">
        <Nav className="Nav-2">
          <NavLink to={`/categoria/1`} className="colorTexto">Clasicos</NavLink>
          <NavLink to={`/categoria/2`} className="colorTexto">Arquitectura</NavLink>
          <NavLink to={`/categoria/3`} className="colorTexto">Mario Bross</NavLink>
        </Nav>
  </Navbar>
);
}

export default NavBar