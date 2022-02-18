import {
  Col,
  Container,
  Row,
  Image,
  Carousel,
  Button,
  Alert,
} from "react-bootstrap";
import Hero from "./assets/Main/Hero.jpg";
import FirstSlide from "./assets/Main/FirstSlide.jpg";
import SecondSlide from "./assets/Main/SecondSlide.jpg";
import { useState } from "react";

function Main() {
  const [userInput, setUserInput] = useState("hide");

  function simulateSendInput() {
    setUserInput("show");
  }

  function AlertInput() {
    if (userInput === "show") {
      return (
        <Alert variant="success">
          <p>You input has been received</p>
        </Alert>
      );
    }

    return null;
  }

  return (
    <Container fluid className="Main">
      <Row className="Hero">
        <Col sm>
          <Image alt="Hero" className="HeroPicture" src={Hero} fluid />
        </Col>
        <Col lg sm>
          Shop with us for better quality at a more affordable prices!
        </Col>
      </Row>
      <Row className="ProductInfo">
        <Carousel>
          <Carousel.Item interval={5000}>
            <img className="d-block" src={FirstSlide} alt="first slide" />
            <Carousel.Caption>
              <h3>Variety of choices</h3>
              <p>We have a large collection for you to choose from</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="d-block" src={SecondSlide} alt="Second slide" />
            <Carousel.Caption>
              <h3>Stylish and Practical</h3>
              <p>Looks and feel good while wearing our product</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
      <Row className="Contact">
        <Col sm>
          <h3>You may send us a message for suggestions or any concerns</h3>
        </Col>
        <Col sm>
          <textarea
            id="UserInput"
            rows={4}
            cols={50}
            placeholder="Please enter suggestions/concerns here"
          ></textarea>
        </Col>
        <Col sm>
          <Button onClick={simulateSendInput}>Send</Button>
        </Col>
        <AlertInput />
      </Row>
    </Container>
  );
}

export default Main;
