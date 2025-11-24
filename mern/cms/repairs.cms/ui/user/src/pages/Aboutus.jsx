import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import slide1 from "../assets/images/slide1.jpg";
import { SectionHeading } from "../components/SectionHeading";

const Aboutus = () => {
  return (
    <div>
      <section className="about-us-banner">
        <h2 align="center">About Us</h2>
      </section>
      <Container fluid="md" className="my-5">
        <section>
          <SectionHeading className="text-center my-5">
            Our motive
          </SectionHeading>
          <Row>
            <Col xs={12} lg={6} md={6} sm={12}>
              <img src={slide1} className="aboutus-image-left" />
            </Col>
            <Col xs={12} lg={6} md={6} sm={12}>
              <h3>What does Lorem Ipsum text say?</h3>
              <p>
                Printers in the 1500s scrambled the words from Cicero's "De
                Finibus Bonorum et Malorum'' after mixing the words in each
                sentence. The familiar "lorem ipsum dolor sit amet" text emerged
                when 16th-century printers adapted Cicero's original work,
                beginning with the phrase "dolor sit amet consectetur."
              </p>
            </Col>
          </Row>
        </section>

        <section>
          <SectionHeading className="text-center my-5">
            Why choose us
          </SectionHeading>
          <div>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Aboutus;
