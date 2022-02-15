import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    // @ts-ignore: variant propTypes is too restrictive
    <Navbar expand="lg" className="Header" variant="custom">
      <Navbar.Brand>Shopping Cart Project</Navbar.Brand>
      <Navbar.Toggle as={Button} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/purchase">Purchase</NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
