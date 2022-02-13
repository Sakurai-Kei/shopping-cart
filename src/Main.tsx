import { Col, Container, Row } from "react-bootstrap";

function Main() {
  return (
    <Container fluid className="Main">
      <Row className="Hero">
        <Col sm>Hero Picture</Col>
        <Col sm>Hero Description</Col>
      </Row>
      <Row className="ProductInfo">
        <Col sm>Product Carousel</Col>
        <Col sm>Carousel Description</Col>
      </Row>
      <Row className="Contact">
        <Col sm>Contact Info Here</Col>
        <Col sm>Text area to send message</Col>
      </Row>
    </Container>
  );
}

export default Main;
