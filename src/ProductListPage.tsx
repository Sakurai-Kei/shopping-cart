import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import getProductList from "./ProductList";

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

  return (
    <Container fluid className="ProductList">
      {products.map((product: Product) => {
        const { src, name, description, price, quantity } = product;
        return (
          <Card style={{ width: "18rem" }} className="ProductModal">
            <Card.Img src={src} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>RM{price}</Card.Text>
              <Card.Text>{quantity} left!</Card.Text>
              <Button variant="primary">Add to cart</Button>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
}

export default ProductListPage;
