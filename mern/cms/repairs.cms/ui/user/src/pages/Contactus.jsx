import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Contactus = () => {
  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col xs={12} lg={6} md={6} sm={6}>
            <div className="contactus-info">
              <div>
                <small>Phone</small>
                <label>+92 340 4567897</label>
              </div>
              
              <div>
                <small>Email</small>
                <label>company.co@email.com</label>
              </div>
              
              <div>
                <small>Address</small>
                <label>Wood streat 158 EVE, NY</label>
              </div>

            </div>
          </Col>
          <Col xs={12} lg={6} md={6} sm={6}>
            <div className="contactus-booking-form">
              <h2 align="center">Book an appointment</h2>
              <Form>
                <Form.Group controlId="formGridFullname">
                  <Form.Label>Full name</Form.Label>
                  <Form.Control type="text" placeholder="Your full name" />
                </Form.Group>

                <Form.Group controlId="formGridPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="number" placeholder="Enter phone" />
                </Form.Group>

                <Form.Group controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Choose appliance</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>Oven</option>
                    <option>Fridge</option>
                    <option>Freezer</option>
                    <option>Washing machine</option>
                  </Form.Select>
                </Form.Group>

                <Button style={{marginTop: "20px"}} variant="primary" type="submit">
                  Book appointment
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contactus;
