import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function PurchasePage() {
  return (
    <Container className="Purchase" fluid>
      <Col className="ProcessItem">
        <Row className="ItemList">List of Items in cart</Row>
        <Row className="PayOption">Payment Option</Row>
      </Col>
    </Container>
  );
}

export default PurchasePage;
