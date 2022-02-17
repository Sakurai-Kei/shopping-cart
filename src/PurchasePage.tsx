import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { getItemList } from "./ItemsCart";
import Card from "react-bootstrap/Card";
import { Button, ProgressBar } from "react-bootstrap";
import { useEffect, useState } from "react";

function ShowProgressBar({ show, value }: any) {
  if (show && value < 100) {
    return (
      <ProgressBar animated now={value} style={{ margin: "0", padding: "0" }} />
    );
  } else if (value === 100) {
    return <Col>Payment Done!</Col>;
  }
  return null;
}

function PurchasePage() {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(50);
  const itemInCart = getItemList();

  function simulatePaySys() {
    setShow(true);
    setTimeout(() => {
      console.log("once");
      setValue(100);
    }, 3000);
  }

  return (
    <Container className="Purchase" fluid>
      <Col className="ProcessItem">
        <Row className="ItemList">
          {itemInCart.map((item) => {
            const { id, src, name, description, price } = item;
            return (
              <Card
                key={id}
                style={{ width: "18rem" }}
                className="ProductModal"
              >
                <Card.Img variant="top" src={src} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Card.Text>RM{price}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
        <Row className="PayOption">
          <Button variant="primary" onClick={simulatePaySys}>
            Pay with Visa
          </Button>
          <ShowProgressBar show={show} value={value}></ShowProgressBar>
        </Row>
      </Col>
    </Container>
  );
}

export default PurchasePage;
