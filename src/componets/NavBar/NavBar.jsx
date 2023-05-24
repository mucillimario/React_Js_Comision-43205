import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import './NavBar.css'

const NavBar = () => {
  return (
    <Navbar className="NavBar">
      <Nav className="Nav-2">
        <NavLink to={`/categoria/1`} className="colorTextoNav">Clasicos</NavLink>
        <NavLink to={`/categoria/2`} className="colorTextoNav">Arquitectura</NavLink>
        <NavLink to={`/categoria/3`} className="colorTextoNav">Mario Bross</NavLink>
      </Nav>
        {/* <h5 class="tituloGreeting">Bienvenidos a la web de lego realizada en React Js</h5> */}
    </Navbar>
  );
}

export default NavBar