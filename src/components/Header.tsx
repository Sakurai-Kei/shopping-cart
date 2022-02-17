import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { getItemList } from "../ItemsCart";

function Header() {
  const [itemsInCart, setItemsInCart] = useState(getItemList().length);

  window.addEventListener("mousemove", () => {
    setItemsInCart(getItemList().length);
  });

  return (
    // @ts-ignore: variant propTypes is too restrictive
    <Navbar expand="lg" className="Header" variant="custom">
      <Navbar.Brand>Shopping Cart Project</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/products">
          <Nav.Link>Products</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/purchase">
          <Nav.Link>
            Purchase<sup>{itemsInCart}</sup>
          </Nav.Link>
        </LinkContainer>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
