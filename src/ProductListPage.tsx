import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import getProductList from "./ProductList";
import { addToCart, getItemList } from "./ItemsCart";
import { useState, useEffect } from "react";

interface Product {
  id: number;
  src: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

function ProductListPage() {
  const products: any[] = getProductList();
  const [inCart, setInCart] = useState(getItemList());
  let status: boolean = false;

  return (
    <Container fluid className="ProductList">
      {products.map((product: Product) => {
        const { id, src, name, description, price, quantity } = product;

        if (
          inCart.some((item) => {
            return item.id === id;
          })
        ) {
          status = true;
        } else {
          status = false;
        }

        return (
          <Card key={id} style={{ width: "18rem" }} className="ProductModal">
            <Card.Img src={src} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>RM{price}</Card.Text>
              <Card.Text>{quantity} left!</Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  addToCart(product);
                  setInCart(getItemList());
                }}
                disabled={status}
              >
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
}

export default ProductListPage;
